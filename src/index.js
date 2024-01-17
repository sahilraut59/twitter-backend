const express = require("express");

const connect = require("./config/database");
const TweetRepository = require("./repository/tweet-repository");

const app = express();

app.listen(3000, async () => {
  console.log("Server started on port 3000");

  await connect();

  console.log("Connnected to DB");
  const tweetRepo = new TweetRepository();

  const tweets = await tweetRepo.getAll(0, 4);
  console.log(tweets[0].contentWithEmail);
});
