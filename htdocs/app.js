// Подключаем библиотеки и внешние скрипты
var TelegramBot = require('telegraf');
var config      = require('./config');
var marvin      = require('./marvin');

// Создаем объект приложения бота телеграмм
var app         = new TelegramBot(config.bot_token);

// Вспомогательные функции
// Возвращает случайное число между min (включая) и max (не включая)
function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

// Задаём реакцию бота на обязательные команды /start и /help
app.command('start', (ctx) => {
  console.log('start', ctx.from);
  ctx.reply(marvin.citations[0]);
});

app.command('help', (ctx) => {
  console.log('help', ctx.from);
  ctx.reply(marvin.citations[1]);
});

// Задаём реакцию бота на текстовые сообщения
app.on('text', function(ctx) {
  var txt = ctx.message.text.toLowerCase(); // Заглавные буквы свойства "text" из объекта контекста "ctx" делает маленткими
  console.log(txt); // Выводим в консоль значение переменной txt (текст сообщения пользователя)

  var today = new Date(); // Сегодняшняя дата
  var Days = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
  var Day = Days[today.getDay()]; // Сегодняшний день недели (today.getDay() возвращает значение от 0 до 6)
  // Переносим Вс. в хвост массива
  Days.splice(Days.indexOf("sunday"),1); // Удаляем элемент с названием Вс.: indexOf - индекс элемента; splice(index, cnt) удалить элементы начиная с индекса index в количестве cnt
  Days.push("sunday"); // Добавляем элемент в хвост массива

  var hi = /йо|привет|здарова|здравствуйте|hi|hey|hello/.test(txt);
  var yo = /мотивашка|мотивашку|как дела|how are you/.test(txt);

  if (hi) {
    ctx.reply( marvin.citations[2] );
  } else if (yo) {
    ctx.reply( marvin.citations[getRandom(min, max)] );
  } else {
    // Ответ бота поумолчанию
    ctx.reply( marvin.citations[3] );
  }
});

// Запускаем poll обработчик бота
app.startPolling();
