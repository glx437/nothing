// bot.js
const TelegramBot = require('node-telegram-bot-api');

// ضع هنا التوكن الخاص بالبوت
const token = process.env.TELEGRAM_BOT_TOKEN;
const bot = new TelegramBot(token, { polling: true });

// مثال على رسالة ترحيب
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, `مرحبا ${msg.from.first_name}!`);
});
