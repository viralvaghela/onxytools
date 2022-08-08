var whois = require("whois");
const whos = async (domain, ctx) => {
  whois.lookup(domain, function (err, data) {
    ctx.reply(data);
  });
};
module.exports = { whos };
