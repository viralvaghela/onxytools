const instagram_downloader = async (ctx, username) => {
  ctx.reply("Checking user...");
  ctx.replyWithChatAction("typing");
  ctx.reply("User Found on ");
  var url = "https://instagram.com/" + username + "_/?__a=1/" + username;
  var response = await fetch(url, {
    method: "HEAD",
  });
  if (response.status == 200) {
    ctx.replyWithChatAction("typing");
    ctx.reply(url + "\n");
    valid = valid + url + "\n";
  }
};
module.exports = { instagram_downloader };
