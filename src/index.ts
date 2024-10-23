import "dotenv/config";
import express from "express";
import { WebSocketServer } from "ws";

const app = express();
const port = process.env.PORT ?? 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ msg: "hi" });
});

app.post("/", (req, res) => {
  console.log(req.body, req.headers);
  console.log("received!!");
  res.status(200);
});

export const server = app.listen(port, () => {
  console.log(`Listening on ${port}`);
});

const wss = new WebSocketServer({ server });

wss.on("connection", (ws, req) => {
  console.log(ws);
  ws.send("Connected");
});
