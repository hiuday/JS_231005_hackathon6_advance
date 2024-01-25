import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser, { urlencoded } from "body-parser";
import createTable from "./models/index. model";
import Router from "./routes/index";
dotenv.config();
const server = express();
const PORT = process.env.PORT;
server.use(urlencoded());
server.use(cors());
server.use(bodyParser.json());
createTable();
Router(server);
server.listen(PORT, () => console.log(`http://localhost:${PORT}`));
