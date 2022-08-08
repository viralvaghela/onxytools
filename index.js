const { Telegraf, Markup } = require("telegraf");
const nmap = require("node-nmap");
const whs = require("./utility/whois");
const ping = require("./utility/ping");
const util = require("./utility/util");
const wallpaper = require("./utility/wallpaper");
const userrecon = require("./utility/user_recon");
const jokes = require("./utility/jokes");
const meme = require("./utility/meme");
const quote = require("./utility/quote");
const instarecon = require("./utility/insta_recon");
const qrcode = require("./utility/qr_code");
const whatsapp = require("./utility/whatsapp");
const bot = new Telegraf(util.token);



bot.start((ctx) => {
  ctx.reply("Onxytools is a telegram bot which will help us to perform daily life task and save our time.So basically it a collection of so many tools at one place,it covers all categories such as education,cyber security,fun and entertainment.\n\n\nThis bot can do recon on your website using tools such as whois,subdomain finder,dir search,ping to check host is alive or not. If you are feeling bored this bot will send you funny memes and jokes. If you are feeling demotivated bot will send you positive motivational quotes and will inspire you to do more work. If you are a student, you will get resources to learn programming and new technologies .it also contains tools such as QR code generator so you can create QR code of any string. You can also download wallpaper based on the query you send for example,if you send “cat” it will send you cute beautiful images of cat so you can download it and set on your mobile/desktop wallpaper.");
})



bot.on("text", (ctx) => {
  //if chat id is 5342405979 then dont execute any command

  console.log("Username : " + ctx.message.from.username);
  console.log("Name : " + ctx.message.from.first_name);
  console.log("Last Name : " + ctx.message.from.last_name);
  console.log("ID : " + ctx.message.from.id);
  console.log("Language : " + ctx.message.from.language_code);
  console.log("Chat ID : " + ctx.message.chat.id);
  console.log("Chat Type : " + ctx.message.chat.type);
  console.log("Chat Title : " + ctx.message.chat.title);
  console.log("Chat Username : " + ctx.message.chat.username);
  console.log("Message is : " + ctx.message.text);
  console.log("==================================");

  ctx.replyWithChatAction("typing");
  const message = ctx.message.text;

  //if message start with whois then ignore whois and send the message to whois function
  if (message.startsWith("whois") || message.startsWith("Whois")) {
    whs.whos(message.substring(6), ctx);
    ctx.reply("Checking Whois");
  }

  // NMap
  if (message.startsWith("nmap") || message.startsWith("Nmap")) {
    nmap.nmapLocation = "nmap";
    nmap.nmapOptions = "-sS -sV -O -oX -";
    let res = new nmap.QuickScan(message.substring(5));
    ctx.reply(res);
  }

  // Ping
  if (message.startsWith("ping") || message.startsWith("Ping")) {
    ping.ping_host(message.substring(5), ctx);
    ctx.reply("Checking Ping");
  }

  // wallpaper search
  if (message.startsWith("wallpaper") || message.startsWith("Wallpaper")) {
    ctx.reply("Searching for wallpaper");
    ctx.replyWithChatAction("upload_photo");
    wallpaper.send_wallpaper(ctx, message.substring(10));
  }

  //user recon
  if (message.startsWith("userrecon") || message.startsWith("Userrecon")) {
    ctx.reply("Searching for user");
    ctx.replyWithChatAction("typing");
    userrecon.user_recon(ctx, message.substring(10));
  }
  //jokes
  if (message.startsWith("joke") || message.startsWith("Joke")) {
    // ctx.reply("Checking Joke");
    ctx.replyWithChatAction("typing");
    jokes.send_joke(ctx, message.substring(5));
  }

  //meme
  if (message.startsWith("meme") || message.startsWith("Meme")) {
    ctx.reply("Sending you Meme 😁");
    ctx.replyWithChatAction("upload_photo");
    meme.sendmeme(ctx, message.substring(5));
  }

  //quote
  if (message.startsWith("quote") || message.startsWith("Quote")) {
    ctx.reply("Hi " + ctx.from.first_name + ", \n Here is a Quote ✨ for you.");
    ctx.replyWithChatAction("upload_photo");
    quote.send_quote(ctx, message.substring(5));
  }

  //instarecon
  if (message.startsWith("instarecon") || message.startsWith("Instarecon")) {
    ctx.reply("Searching for Instagram User");
    ctx.replyWithChatAction("typing");
    instarecon.instarecon(ctx, message.substring(11));
  }

  //qrcode 
  if (message.startsWith("qrcode") || message.startsWith("Qrcode")) {
    ctx.reply("Generating QR Code");
    ctx.replyWithChatAction("upload_photo");
    qrcode.send_qrcode(ctx, message.substring(7));
  }

  //whatsapp
  if (message.startsWith("whatsapp") || message.startsWith("Whatsapp") ||message.startsWith("WhatsApp")   ) {
    ctx.reply("Sending you Whatsapp Link");
    // ctx.replyWithChatAction("upload_photo");
    // console.log(message.substring(9));
    whatsapp.send_message(ctx, message.substring(9));
  }

});

bot.on("callback_query", (ctx) => {
  // Explicit usage
  ctx.telegram.answerCbQuery(ctx.callbackQuery.id);

  // Using context shortcut
  ctx.answerCbQuery();
});

bot.on("audio", () => {
  console.log("audio received ");
});

bot.on("photo", (ctx) => {
  //store photo as photo.jpg
  ctx.replyWithPhoto({
    source: "photo.jpg",
  });
});

bot.on("inline_query", (ctx) => {
  const result = [];
  // Explicit usage
  ctx.telegram.answerInlineQuery(ctx.inlineQuery.id, result);

  // Using context shortcut
  ctx.answerInlineQuery(result);
});

bot.launch();

process.once("SIGINT", () => bot.stop("SIGINT"));
