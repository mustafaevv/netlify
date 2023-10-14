import express from "express";
import bodyParser from "body-parser";
import ServerlessHttp from "serverless-http";

const port = 7777;
const app = express();
app.use(bodyParser.json());

const data = [
  {
    name: "Max",
    age: 22,
  },
  {
    name: "Min",
    age: 21,
  },
  {
    name: "John",
    age: 23,
  },
];

app.get("/getAll", (req, res) => {
  res.json(data);
});

app.post("/addNewUser", (req, res) => {
  data.push(req.body)
  res.send("Successfully added new user")
})

export const handler = ServerlessHttp(app)