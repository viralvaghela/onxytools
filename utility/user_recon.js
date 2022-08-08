const fetch = require("node-fetch");
const social_urls = [
  "https://www.instagram.com/",
  "https://www.facebook.com/",
  "https://www.twitter.com/",
  "https://www.linkedin.com/",
  "https://www.youtube.com/",
  "https://www.pinterest.com/",
  "https://www.tumblr.com/",
  "https://www.flickr.com/",
  "https://www.quora.com/",
  "https://www.github.com/",
  "https://www.stackoverflow.com/",
  "https://www.codepen.io/",
  "https://www.dribbble.com/",
  "https://www.behance.net/",
  "https://www.deviantart.com/",
  "https://www.500px.com/",
  "https://www.digg.com/",
  "https://www.reddit.com/",
  "https://www.stumbleupon.com/",
  "https://steamcommunity.com/id/",
  "https://www.wikipedia.org/wiki/User:",
  "https://www.freelancer.com/u/",
  "https://www.dailymotion.com/",
  "https://www.etsy.com/shop/",
  "https://www.scribd.com/",
  "https://www.patreon.com/",
  "https://www.behance.net/",
  "https://www.goodreads.com/",
  "https://www.gumroad.com/",
  "https://www.instructables.com/member/",
  "https://www.codementor.io/",
  "https://www.reverbnation.com/",
  "https://www.bandcamp.com/",
  "https://www.colourlovers.com/love/",
  "https://www.ifttt.com/p/",
  "https://www.trakt.tv/users/",
  "https://www.okcupid.com/profile/",
  "https://www.trip.skyscanner.com/user/",
  "http://www.zone-h.org/archive/notifier=",
];

var valid = "";

const user_recon = async (ctx, username) => {
  ctx.reply("Checking user...");
  ctx.replyWithChatAction("typing");
  ctx.reply("User Found on ");
  for (var i = 0; i < social_urls.length; i++) {
    var url = social_urls[i] + username;
    var response = await fetch(url, {
      method: "HEAD",
    });
    if (response.status == 200) {
      ctx.replyWithChatAction("typing");
      ctx.reply(url + "\n");

      valid = valid + url + "\n";
    }
  }
  
  ctx.reply("User name:" + username + " Found on :\n" + valid);
  valid = "";
};
module.exports = { user_recon };
