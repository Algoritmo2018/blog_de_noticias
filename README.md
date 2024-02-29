Projecto feito com Bootstrap 5 + Laravel 10 com docker


Para por o projecto a rodar basta

1-Criar o arquivo env.
cp .env.example .env


2-Atualize as variáveis de ambiente do arquivo .env
APP_NAME=Laravel
APP_ENV=local
APP_KEY=base64:M2DgHsX088xLXpj6Eu5cIB2o8WxQ+XQ6gb+enkL5M/8=
APP_DEBUG=true
APP_URL=http://localhost:1215

LOG_CHANNEL=stack
LOG_DEPRECATIONS_CHANNEL=null
LOG_LEVEL=debug

DB_CONNECTION=mysql
DB_HOST=db
DB_PORT=3306
DB_DATABASE=blog_noticias
DB_USERNAME=root
DB_PASSWORD=root

BROADCAST_DRIVER=log
CACHE_DRIVER=file
FILESYSTEM_DISK=local
QUEUE_CONNECTION=sync
SESSION_DRIVER=file
SESSION_LIFETIME=120

MEMCACHED_HOST=127.0.0.1

REDIS_HOST=127.0.0.1
REDIS_PASSWORD=null
REDIS_PORT=6379

MAIL_MAILER=smtp
MAIL_HOST=sandbox.smtp.mailtrap.io
MAIL_PORT=2525
MAIL_USERNAME=c3062d977fa7e2
MAIL_PASSWORD=fa1db4a32f1052
MAIL_FROM_ADDRESS="blognoticias@gmail.com"
MAIL_FROM_NAME="Blog De Noticias"

AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_DEFAULT_REGION=us-east-1
AWS_BUCKET=
AWS_USE_PATH_STYLE_ENDPOINT=false

PUSHER_APP_ID=
PUSHER_APP_KEY=
PUSHER_APP_SECRET=
PUSHER_HOST=
PUSHER_PORT=443
PUSHER_SCHEME=https
PUSHER_APP_CLUSTER=mt1

VITE_PUSHER_APP_KEY="${PUSHER_APP_KEY}"
VITE_PUSHER_HOST="${PUSHER_HOST}"
VITE_PUSHER_PORT="${PUSHER_PORT}"
VITE_PUSHER_SCHEME="${PUSHER_SCHEME}"
VITE_PUSHER_APP_CLUSTER="${PUSHER_APP_CLUSTER}"


3- Subir o projecto com os containers
docker-compose up -d

4- Instalar as dependências do projeto
composer install

Gerar o Key do projecto

php artisan key:generate
