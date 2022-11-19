import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import router from "./routes";


const app = express();
app.use(bodyParser.json());
const port:Number = 3000;
app.listen(port, () => {
  console.log(`server are connected on port---> http://localhost:${port}`);
});

app.use("/", router);


mongoose
  .connect(
    "mongodb+srv://jemish0581:Shivay99@cluster0.5ijjgyt.mongodb.net/products?retryWrites=true&w=majority")
  .then(() => {
    console.warn("Database connected successfully...");
  });