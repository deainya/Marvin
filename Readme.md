# Marvin Bot App

## General info
Marvin is a sad Telegram Bot App ;)
Marvin is built mainly to serve Innovation Club issues... I guess...
Telegram Bot App is hosted at AWS, source is kept at github. The Atom environment is used for coding.

## Stack info
Telegram Bot API App is built using MEAN stack (mainly Node)
* MongoDB
* Express
* Angular
* Node

## PuTTY instructions for AWS host
* `cd apps/Marvin` go to web app folder at AWS
* `sudo git pull origin master` pull from master branch
* `npm install` to resolve dependencies
* `node /opt/bitnami/nodejs/bin/node /opt/bitnami/nodejs/bin/forever stop htdocs/app.js` stop app started forever
* `node /opt/bitnami/nodejs/bin/node /opt/bitnami/nodejs/bin/forever start htdocs/app.js` run app forever
* `node htdocs/app.js` run app manualy
* `CTRL+C` halt app manualy
