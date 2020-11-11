"use strict";

var TOKEN = '1326171946:AAH1e1zDd_2woZ7w6rBGsrh8OsP5zqZOniY';

var TelegramBot = require('node-telegram-bot-api');

var request = require('request');

var options = {
  polling: true
};
var bot = new TelegramBot(TOKEN, options);
var imageId = null;
bot.onText(/.*/, function (msg) {
  bot.sendMessage(msg.chat.id, 'Please send a picture on the accident.');
});
bot.on('message', function (msg) {
  console.log(msg);

  if (msg.photo) {
    imageId = msg.photo[1].file_id;
    var opts = {
      "parse_mode": "Markdown",
      "reply_markup": {
        "one_time_keyboard": true,
        "resize_keyboard": true,
        "keyboard": [[{
          text: "SEND LOCATION",
          request_location: true
        }]]
      }
    };
    bot.sendMessage(msg.chat.id, 'Please let us know about your location too.', opts);
  }
});
bot.on('message', function (msg) {
  if (msg.location) {
    bot.sendMessage(msg.chat.id, 'Thank you for reporting.');
    bot.getFileLink(imageId).then(function (imageLink) {
      var data = {
        imageLink: imageLink,
        location: msg.location
      };
      request('http://localhost:9000/accident?info=' + JSON.stringify(data), function (err, res, body) {
        console.log(body);
      });
    });
  }
}); // Handle callback queries

bot.on('callback_query', function onCallbackQuery(callbackQuery) {
  var action = callbackQuery.data;
  var msg = callbackQuery.message;
  var opts = {
    chat_id: msg.chat.id,
    message_id: msg.message_id
  };
  var text;

  if (action === 'edit') {
    text = 'Edited Text';
  }

  bot.editMessageText(text, opts);
});