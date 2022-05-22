const express = require("express");
const app = express();
const cors = require("cors");
const routes = require("./routes/router");
const options = {
  allowedHeaders: ["Origin", "Content-Type", "Accept", "Authorization"],
  origin: "*",
  methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
};

const mongoose = require("mongoose");
const port = process.env.PORT || "8080";

app.use(express.json({ limit: "10mb" }));
app.use(
  express.urlencoded({ limit: "10mb", extended: true, parameterLimit: 50000 })
);
app.use(cors(options));

app.use("/shopify/api", routes);

mongoose
  .connect("mongodb+srv://root:5454@twittercluster.bbjs9.mongodb.net/shopify", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to database..... ");
  })
  .catch((err) => {
    console.log("Error connecting to database " + err);
  });

app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});
