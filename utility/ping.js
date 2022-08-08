var ping = require('ping');

const ping_host = async (host, ctx) => {
  ping.sys.probe(host, function (isAlive, error) {
    if (isAlive) {
      ctx.reply(`${host} is alive`);
    } else {
      ctx.reply(`${host} is dead`);
    }
  });
}
module.exports = { ping_host };