const fetch = require("node-fetch");
const util = require("./util");
const send_wallpaper = async (ctx, query) => {
  const url = util.pixeles_base_url + query;

  ctx.replyWithChatAction("upload_photo");
  await fetch(url + "&per_page=" + 5, {
    headers: {
      Authorization: util.pixels_api_key ,
    },
  })
    .then((res) => res.json())
    .then((res) => {
      for (var index in res.photos) {
        var images = res.photos[index].src.large;
        ctx.reply(images);
      }
    });

  // ctx.replyWithPhoto({
  //     url: util.pixeles_base_url + url
  // });
};
module.exports = { send_wallpaper };
