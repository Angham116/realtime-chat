require('dotenv').config();  // import "dotenv/config"; ES6

const express = require("express");
const cors = require("cors");
const Pusher = require("pusher");

const app = express();

app.use(cors({
  origin: ["http://localhost:3000i"]
}));

const PORT = process.env.PORT || 5000;

app.use(express.json());

const pusher = new Pusher({
  appId: process.env.PUSHUR_APPID,
  key: process.env.PUSHER_KEY,
  secret: process.env.PUSHER_SECRET,
  cluster: "ap2",
  useTLS: true
});

app.listen(PORT, () => {
  pusher.trigger("my-channel", "my-event", {
    message: "hello world"
  });
  console.log(`App is running now on ${PORT}`)
});

