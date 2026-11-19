<?php
// ============================================================
//  API DO PAINEL — login só com senha, salvar cardápio, enviar fotos.
//  A senha fica guardada (criptografada) em admin/senha.php, criado no primeiro acesso.
//  Os dados ficam em ../dados/dados.json e as fotos novas em ../bolos/
// ============================================================
declare(strict_types=1);

$RAIZ       = dirname(__DIR__);
$ARQ_DADOS  = $RAIZ . '/dados/dados.json';
$DIR_BACKUP = $RAIZ . '/dados/backups';
$DIR_FOTOS  = $RAIZ . '/bolos';
$ARQ_SENHA  = __DIR__ . '/senha.php';
$ARQ_TENT   = sys_get_temp_dir() . '/moranguinho-tent-' . md5(__DIR__) . '.json';

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');
header('X-Content-Type-Options: nosniff');

function resp($dados, int $codigo = 200): void {
    http_response_code($codigo);
    echo json_encode($dados, JSON_UNESCAPED_UNICODE);
    exit;
}
function erro(string $msg, int $codigo = 400): void { resp(['erro' => $msg], $codigo); }

// ---------- Sessão ----------
$https = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off')
      || (($_SERVER['HTTP_X_FORWARDED_PROTO'] ?? '') === 'https');
ini_set('session.gc_maxlifetime', '28800');
session_name('moranguinho_admin');
session_set_cookie_params([
    'lifetime' => 28800,
    'path'     => rtrim(dirname($_SERVER['SCRIPT_NAME'] ?? '/'), '/') . '/',
    'secure'   => $https,
    'httponly' => true,
    'samesite' => 'Strict',
]);
session_start();

$acao   = $_GET['acao'] ?? '';
$metodo = $_SERVER['REQUEST_METHOD'] ?? 'GET';
$corpo  = file_get_contents('php://input') ?: '';

function senha_configurada(): bool { global $ARQ_SENHA; return is_file($ARQ_SENHA); }
function hash_salvo(): string { global $ARQ_SENHA; $h = @include $ARQ_SENHA; return is_string($h) ? $h : ''; }
function logado(): bool { return !empty($_SESSION['ok']); }

function exigir_login(bool $csrf = true): void {
    if (!logado()) erro('Sessão expirada. Entre novamente.', 401);
    if ($csrf) {
        $enviado = $_SERVER['HTTP_X_CSRF_TOKEN'] ?? '';
        if (!is_string($enviado) || !hash_equals((string)($_SESSION['csrf'] ?? ''), $enviado)) {
            erro('Sessão inválida. Recarregue a página e entre novamente.', 403);
        }
    }
}
function iniciar_sessao_logada(): void {
    session_regenerate_id(true);
    $_SESSION['ok']   = true;
    $_SESSION['csrf'] = bin2hex(random_bytes(16));
}
function salvar_senha(string $senha): void {
    global $ARQ_SENHA;
    $conteudo = "<?php\n// Gerado pelo painel. Não compartilhe este arquivo.\nreturn " . var_export(password_hash($senha, PASSWORD_DEFAULT), true) . ";\n";
    if (@file_put_contents($ARQ_SENHA, $conteudo, LOCK_EX) === false) {
        erro('Não consegui gravar a senha. A pasta admin/ precisa de permissão de escrita no servidor.', 500);
    }
}
function json_corpo(): array {
    global $corpo;
    $j = json_decode($corpo, true);
    return is_array($j) ? $j : [];
}

// ---------- Limite de tentativas de senha (5 erros = espera 15 min) ----------
function tent_ler(): array {
    global $ARQ_TENT;
    $j = is_file($ARQ_TENT) ? json_decode((string)@file_get_contents($ARQ_TENT), true) : [];
    return is_array($j) ? $j : [];
}
function tent_gravar(array $t): void { global $ARQ_TENT; @file_put_contents($ARQ_TENT, json_encode($t), LOCK_EX); }
function tent_recentes(string $ip): array {
    $t = tent_ler();
    return array_values(array_filter($t[$ip] ?? [], function ($x) { return $x > time() - 900; }));
}
function tent_bloqueado(): bool { return count(tent_recentes($_SERVER['REMOTE_ADDR'] ?? '0')) >= 5; }
function tent_falhou(): void {
    $ip = $_SERVER['REMOTE_ADDR'] ?? '0';
    $t = tent_ler();
    $lista = tent_recentes($ip);
    $lista[] = time();
    $t[$ip] = $lista;
    tent_gravar($t);
}
function tent_limpar(): void {
    $ip = $_SERVER['REMOTE_ADDR'] ?? '0';
    $t = tent_ler();
    unset($t[$ip]);
    tent_gravar($t);
}

// ---------- Validação dos dados antes de gravar ----------
function texto($v, int $max = 2000): string {
    return mb_substr(trim((string)($v ?? '')), 0, $max);
}
function numero($v): ?float {
    if ($v === null || $v === '') return null;
    if (!is_numeric($v)) return null;
    $n = round((float)$v, 2);
    return $n >= 0 ? $n : null;
}
function limpar_dados(array $d): array {
    if (!isset($d['categorias'], $d['produtos'], $d['config'])
        || !is_array($d['categorias']) || !is_array($d['produtos']) || !is_array($d['config'])) {
        erro('Dados inválidos.');
    }
    if (count($d['categorias']) > 100 || count($d['produtos']) > 2000) erro('Dados grandes demais.');

    $cats = []; $idsCat = [];
    foreach ($d['categorias'] as $c) {
        $id = texto($c['id'] ?? '', 60);
        $nome = texto($c['nome'] ?? '', 120);
        if (!preg_match('/^[a-z0-9_-]+$/', $id) || $nome === '') erro('Categoria inválida.');
        if (isset($idsCat[$id])) erro('Categoria repetida.');
        $idsCat[$id] = true;
        $cats[] = ['id' => $id, 'nome' => $nome, 'nota' => texto($c['nota'] ?? ''), 'unidade' => texto($c['unidade'] ?? '', 40), 'ordem' => (int)($c['ordem'] ?? 0)];
    }

    $prods = []; $idsProd = [];
    foreach ($d['produtos'] as $p) {
        $id = texto($p['id'] ?? '', 40);
        $nome = texto($p['nome'] ?? '', 120);
        $cat = texto($p['categoria_id'] ?? '', 60);
        $preco = numero($p['preco'] ?? null);
        if (!preg_match('/^[A-Za-z0-9_-]+$/', $id) || $nome === '' || !isset($idsCat[$cat]) || $preco === null) {
            erro('Produto inválido: ' . ($nome !== '' ? $nome : '(sem nome)'));
        }
        if (isset($idsProd[$id])) erro('Produto repetido.');
        $idsProd[$id] = true;
        $img = $p['imagem'] ?? null;
        $img = ($img === null || $img === '') ? null : texto($img, 300);
        if ($img !== null && !preg_match('#^https?://#i', $img) && (strpos($img, '/') !== false || strpos($img, '\\') !== false || strpos($img, '..') !== false)) {
            $img = null;
        }
        $prods[] = [
            'id' => $id, 'categoria_id' => $cat, 'nome' => $nome,
            'descricao' => texto($p['descricao'] ?? ''), 'preco_antigo' => numero($p['preco_antigo'] ?? null),
            'preco' => $preco, 'imagem' => $img, 'ordem' => (int)($p['ordem'] ?? 0), 'ativo' => !empty($p['ativo']),
        ];
    }

    $cfg = [];
    foreach ($d['config'] as $k => $v) {
        $k = (string)$k;
        if (preg_match('/^[a-z0-9_]+$/', $k) && is_scalar($v)) $cfg[$k] = texto($v);
    }
    return ['categorias' => $cats, 'produtos' => $prods, 'config' => $cfg];
}

// ============================================================
//  AÇÕES
// ============================================================
switch ($acao) {

    case 'estado':
        resp([
            'configurada' => senha_configurada(),
            'logado'      => logado(),
            'csrf'        => logado() ? ($_SESSION['csrf'] ?? '') : '',
        ]);

    // Primeiro acesso: cria a senha (só funciona enquanto não existir senha)
    case 'configurar':
        if ($metodo !== 'POST') erro('Método inválido.', 405);
        if (senha_configurada()) erro('A senha já foi criada.', 403);
        $senha = (string)(json_corpo()['senha'] ?? '');
        if (mb_strlen($senha) < 8) erro('A senha precisa ter pelo menos 8 caracteres.');
        salvar_senha($senha);
        iniciar_sessao_logada();
        resp(['ok' => true, 'csrf' => $_SESSION['csrf']]);

    case 'entrar':
        if ($metodo !== 'POST') erro('Método inválido.', 405);
        if (!senha_configurada()) erro('Crie a senha primeiro.', 403);
        if (tent_bloqueado()) erro('Muitas tentativas. Aguarde 15 minutos.', 429);
        $senha = (string)(json_corpo()['senha'] ?? '');
        if ($senha === '' || !password_verify($senha, hash_salvo())) {
            tent_falhou();
            sleep(1);
            erro('Senha incorreta.', 401);
        }
        tent_limpar();
        iniciar_sessao_logada();
        resp(['ok' => true, 'csrf' => $_SESSION['csrf']]);

    case 'sair':
        $_SESSION = [];
        session_destroy();
        resp(['ok' => true]);

    case 'dados':
        exigir_login(false);
        if (!is_file($ARQ_DADOS)) erro('Arquivo dados/dados.json não encontrado no servidor.', 500);
        $j = json_decode((string)file_get_contents($ARQ_DADOS), true);
        if (!is_array($j)) erro('O arquivo dados/dados.json está corrompido.', 500);
        resp($j);

    case 'salvar':
        if ($metodo !== 'POST') erro('Método inválido.', 405);
        exigir_login();
        if (strlen($corpo) > 3000000) erro('Dados grandes demais.', 413);
        $dados = limpar_dados(json_corpo());

        $pasta = dirname($ARQ_DADOS);
        if (!is_dir($pasta) || !is_writable($pasta)) {
            erro('A pasta dados/ não tem permissão de escrita no servidor.', 500);
        }
        // Cópia de segurança da versão anterior (guarda as 20 últimas)
        if (is_file($ARQ_DADOS)) {
            if (!is_dir($DIR_BACKUP)) @mkdir($DIR_BACKUP, 0755, true);
            if (is_dir($DIR_BACKUP) && is_writable($DIR_BACKUP)) {
                @copy($ARQ_DADOS, $DIR_BACKUP . '/dados-' . date('Ymd-His') . '.json');
                $antigos = glob($DIR_BACKUP . '/dados-*.json') ?: [];
                sort($antigos);
                foreach (array_slice($antigos, 0, max(0, count($antigos) - 20)) as $f) @unlink($f);
            }
        }
        $json = json_encode($dados, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
        $tmp = $ARQ_DADOS . '.tmp';
        if (@file_put_contents($tmp, $json . "\n", LOCK_EX) === false || !@rename($tmp, $ARQ_DADOS)) {
            @unlink($tmp);
            erro('Não consegui gravar o arquivo no servidor.', 500);
        }
        resp(['ok' => true]);

    case 'foto':
        if ($metodo !== 'POST') erro('Método inválido.', 405);
        exigir_login();
        if ($corpo === '' || strlen($corpo) > 4000000) erro('Foto vazia ou grande demais.', 413);
        $info = @getimagesizefromstring($corpo);
        if (!$info || ($info['mime'] ?? '') !== 'image/jpeg') erro('A foto precisa ser uma imagem JPEG.');
        if (!is_dir($DIR_FOTOS) || !is_writable($DIR_FOTOS)) erro('A pasta bolos/ não tem permissão de escrita no servidor.', 500);
        $nome = 'foto-' . date('Ymd-His') . '-' . bin2hex(random_bytes(3)) . '.jpg';
        if (@file_put_contents($DIR_FOTOS . '/' . $nome, $corpo, LOCK_EX) === false) erro('Não consegui gravar a foto.', 500);
        resp(['arquivo' => $nome]);

    case 'trocar_senha':
        if ($metodo !== 'POST') erro('Método inválido.', 405);
        exigir_login();
        $j = json_corpo();
        if (!password_verify((string)($j['atual'] ?? ''), hash_salvo())) erro('A senha atual está incorreta.', 403);
        $nova = (string)($j['nova'] ?? '');
        if (mb_strlen($nova) < 8) erro('A nova senha precisa ter pelo menos 8 caracteres.');
        salvar_senha($nova);
        resp(['ok' => true]);

    default:
        erro('Ação desconhecida.', 404);
}
