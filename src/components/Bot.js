const token = '5261493967:AAG8EOjx6lNP3PavK0I6iXudCID6LmAiq3M';
const TelegramApi = require('node-telegram-bot-api');
const bot = new TelegramApi(token, {polling: true});

bot.on('message', msg => {
    const text = msg.text;
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, `dsfdghdgfds ${text}`);
});
