var QRCode = require("qrcode");

const send_qrcode = async (ctx, query) => {
  QRCode.toFile(
    "./qrcode.png",
    query,
    {
      color: {
        dark: "#000",
        light: "#FFF",
      },
    },
    function (err) {
      if (err) throw err;
      ctx.replyWithPhoto({ source: "./qrcode.png" });
    }
  );
};
module.exports = { send_qrcode };
