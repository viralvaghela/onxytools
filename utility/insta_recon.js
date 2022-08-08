const fetch = require("node-fetch");
//create list of random user agents
const user_agents = [
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.149 Safari/537.36",
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.149 Safari/537.36",
];
const instarecon = async (ctx, username) => {
  const url = "https://instagram.com/" + username + "/?__a=1";
  console.log(url);

  fetch(url, {
    method: "GET",
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36",
    },
  })
    .then((res) => res.json())
    .then((json) => {
      //reply all data in new line
      ctx.reply(
        "Username : " +
          json.graphql.user.username +
          "\n\n" +
          "Full Name : " +
          json.graphql.user.full_name +
          "\n\n" +
          "Profile Picture : " +
          json.graphql.user.profile_pic_url_hd +
          "\n\n" +
          "Bio : " +
          json.graphql.user.biography +
          "\n\n" +
          "Followers : " +
          json.graphql.user.edge_followed_by.count +
          "\n\n" +
          "Following : " +
          json.graphql.user.edge_follow.count +
          "\n\n" +
          "Posts : " +
          json.graphql.user.edge_owner_to_timeline_media.count +
          "\n\n"
        //   "Verified : " +
        //   json.graphql.user.is_verified
      );
  
    })
    .catch((err) => console.error("error:" + err));

  ctx.reply(url);
};
module.exports = { instarecon };
