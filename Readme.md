# Marvin Bot App

## General info
Marvin is a sad Telegram Bot App ;)
Marvin is built mainly to serve... I guess...
Telegram Bot App is hosted at AWS, source is kept at github. Cloud9 environment is used for coding.

## Stack info
Telegram Bot API App is built using MEAN stack (mainly Node)
* MongoDB
* Express
* Angular
* Node

## Структура папок проекта
* `conf` настройки web-сервера
* `htdocs` папка приложения

## Описание команд
### Работа с локальным git-репозиторием и github.com
* `git init` создание локального git-репозитория в папке
* `git conf user.email "[Email]"` настройка пользователя, от имени которого выполняется commit в локальном git-репозитории
* `git add [Файл]` добавление новых файлоа для фиксация изменений в локальный git-репозиторий 
* `git commit -a -m "[Комментарий]"` фиксация изменений в локальный git-репозиторий (для последующей отправки в github)
* `git push origin master` отправить последние обновления в github
* `git pull origin master` получить последние обновления с github

### Скрипт установки и запуска приложения на web-сервере
* `./start_app.sh` Для запуска приложения бота на постоянной основе. Пулит данные (git pull) с github, устанавливает модули node (npm install) и запускает приложение
* `./stop_app.sh` Для останова приложения, запущенного на постоянной основе. Может потребоваться для отладки работы приложения, см. команды ниже
* * `chmod 700 [shell script].sh` Пререквизитная команда, её нужно выполнить для запуска [shell script]

### Команды запуска и останова приложения NodeJS
* `node htdocs/app.js` ручной запуск приложения на сервере
* `CTRL+C` ручной останов приложения на сервере (только для приложения, запущенного вручную)
* `node /opt/bitnami/nodejs/bin/forever stop htdocs/app.js` останов приложения на сервере, запущенного на постоянной основе
* `node /opt/bitnami/nodejs/bin/forever start htdocs/app.js` запуск приложения на сервере на постоянной основе
