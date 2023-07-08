const connectToMongo = require("./db");
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const app = express();

connectToMongo();

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    // origin: "http://localhost:3000",
    origin: "https://chat-gpt-2982b.web.app"
  })
);

app.use("/api/rule", require("./routes/rule.js"));
app.use("/api/mail", require("./routes/mailer.js"));

app.get("/", (req, res) => {
  res.json("Tested ok!");
});

app.listen(4000);
