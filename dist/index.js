"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = void 0;
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const ws_1 = require("ws");
const app = (0, express_1.default)();
const port = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3000;
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.json({ msg: "hi" });
});
app.post("/", (req, res) => {
    console.log(req.body, req.headers);
    console.log("recasdlfkj");
    res.status(200);
});
exports.server = app.listen(port, () => {
    console.log(`Listening on ${port}`);
});
const wss = new ws_1.WebSocketServer({ server: exports.server });
wss.on("connection", (ws, req) => {
    console.log(ws);
    ws.send("Connected");
});
