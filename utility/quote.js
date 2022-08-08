const fetch = require("node-fetch");
const url = "https://api.quotable.io/random";

const send_quote = async (ctx, query) => {
  fetch(url)
    .then((res) => res.json())
    .then((json) => {
      var quote = json.content;
      var author = json.author;

      ctx.reply(quote + "\n\n ~" + author);
    })
    .catch((err) => console.error("error:" + err));
};

module.exports = { send_quote };
