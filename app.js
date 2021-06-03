"use strict";

const TelegramBot = require("node-telegram-bot-api");
const fs = require("fs");

const token = fs.readFileSync("bot-token.txt", "utf-8");
const bot = new TelegramBot(token, { polling: true });


bot.on("callback_query", async (pressedButton) => {
  console.log(pressedButton.game_short_name);

  bot.answerCallbackQuery(pressedButton.id, {
    url: "https://www.google.it"
  });
});

console.log("\n\nBot started");