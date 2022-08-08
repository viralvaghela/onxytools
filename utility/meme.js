const fetch = require("node-fetch");

const sendmeme = async (ctx, query) => {
  const url = "https://programming-memes-images.p.rapidapi.com/v1/memes";

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "721a6118d6mshcfa249e66f0885ep1436fcjsnf6d7f02a57a8",
      "X-RapidAPI-Host": "programming-memes-images.p.rapidapi.com",
    },
  };

  fetch(url, options)
    .then((res) => res.json())
    .then((json) => ctx.reply(json[0].image  ))
    .catch((err) => console.error("error:" + err));
};
module.exports = { sendmeme };
