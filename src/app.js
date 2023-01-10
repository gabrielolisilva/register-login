require("dotenv").config();

const bodyParser = require("body-parser");

const session = require("express-session");

const express = require("express");
const app = express();

const notFoundMiddleware = require("./middleware/not-found");

const connectDB = require("./db/connect");
const appRoutes = require("./routes/routes");

app.use(express.static("public"));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set("trust proxy", 1); // trust first proxy
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true },
  })
);

app.use("/", appRoutes);

app.use(notFoundMiddleware);

const port = 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`Server is running on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
