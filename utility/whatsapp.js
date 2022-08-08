const send_message = async (ctx, query) => {
    var number = query.substring(0, query.indexOf(" "));
    var message = query.substring(14, query.length);
    var url="https://wa.me/"+number+"?text="+message;
    ctx.reply(url);
};
module.exports = { send_message };
