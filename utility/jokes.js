const fetch = require("node-fetch");

const send_joke = async (ctx, query) => {
  const url = "https://jokes-by-api-ninjas.p.rapidapi.com/v1/jokes?limit=1";

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "721a6118d6mshcfa249e66f0885ep1436fcjsnf6d7f02a57a8",
      "X-RapidAPI-Host": "jokes-by-api-ninjas.p.rapidapi.com",
    },
  };

  fetch(url, options)
    .then((res) => res.json())
    .then((json) => ctx.reply(json[0]['joke'] ))
    .catch((err) => console.error("error:" + err));
};
module.exports = { send_joke };
