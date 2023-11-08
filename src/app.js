import { Express } from "express";
import tarefa from "./models/tarefa";

const app = Express();
app.use(express.json());