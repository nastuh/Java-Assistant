import os
import re
import sys
import time
import shutil
import subprocess
from pathlib import Path

ROOT = Path(__file__).resolve().parent


def envfile():
    e = os.environ.copy()
    p = ROOT / '.env'
    if p.exists():
        for line in p.read_text(encoding='utf-8').splitlines():
            line = line.strip()
            if not line or line.startswith('#'):
                continue
            if '=' in line:
                k, v = line.split('=', 1)
                e[k.strip()] = v.strip()
    return e


env = envfile()

if not env.get('BOT_TOKEN'):
    print('BOT_TOKEN не найден. Создай .env из .env.example и вставь токен.')
    sys.exit(1)

cloud = (
    shutil.which('cloudflared')
    or (str(ROOT / 'cloudflared.exe') if (ROOT / 'cloudflared.exe').exists() else None)
    or (str(ROOT / 'cloudflared') if (ROOT / 'cloudflared').exists() else None)
)

if not cloud:
    print('cloudflared не найден. Установи: brew install cloudflared')
    sys.exit(1)

print('Запускаю локальный веб-сервер на http://127.0.0.1:8080 ...')
web = subprocess.Popen([sys.executable, str(ROOT / 'web_server.py')], env=env)
time.sleep(1.5)

print('Запускаю Cloudflare Quick Tunnel ...')
tun = subprocess.Popen(
    [cloud, 'tunnel', '--url', 'http://127.0.0.1:8080'],
    stdout=subprocess.PIPE,
    stderr=subprocess.STDOUT,
    text=True,
    bufsize=1,
    env=env,
)

url = None
try:
    for line in tun.stdout:
        print('[tunnel]', line, end='')
        m = re.search(
            r'https://[A-Za-z0-9]+(?:-[A-Za-z0-9]+)+\.trycloudflare\.com',
            line,
        )
        if m:
            candidate = m.group(0)
            if 'api.trycloudflare.com' not in candidate:
                url = candidate
                break

    if not url:
        print('\n❌ Не удалось получить HTTPS URL от Cloudflare.')
        tun.terminate()
        web.terminate()
        sys.exit(1)

    env['WEBAPP_URL'] = url

    print('\n==============================')
    print('MINI APP URL:', url)
    print('Бот запускается...')
    print('Не закрывай это окно.')
    print('==============================\n')

    bot = subprocess.Popen([sys.executable, str(ROOT / 'main.py')], env=env)
    bot.wait()

finally:
    for p in (tun, web):
        try:
            p.terminate()
        except Exception:
            pass