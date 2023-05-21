import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3030;

console.log("small change");

app.listen(() => {
  console.log(`App is up and running on ${PORT}`);
});
