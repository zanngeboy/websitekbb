const express =
  require("express");

const cors =
  require("cors");

const TelegramBot =
 require("node-telegram-bot-api");

const app = express();

app.use(cors());
app.use(express.json());

const token =
"8358508035:AAGGRjAo6DlPzVCmmXLx1bnQ1Wit7wM-dk0";

const bot =
 new TelegramBot(token,{
   polling:true
 });

let chatId = null;

Bot.onText(/\/start/,
(msg)=>{

  chatId = msg.chat.id;

  bot.sendMessage(
    chatId,
    "Bot 9 dadu aktif"
  );
});

app.post("/dadu",
(req,res)=>{

  const hasil =
    req.body.hasil;

  const total =
    req.body.total;

  if(chatId){

    bot.sendMessage(
      chatId,
      "Hasil: " +
      hasil.join("-") +
      "\nTotal: " + total
    );
  }

  res.send({
    success:true
  });
});

app.listen(3000,()=>{
  console.log("Server jalan");
});
