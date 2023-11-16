import { Express } from "express";
import tarefa from "./models/tarefa";
import { getTarefas, createTarefa, getTarefaById, updateTarefa, deleteTarefa } from "./appController";

const app = Express();
app.use(express.json());

const tarefas = [];

app.get("/tarefas", getTarefas);

app.post("/tarefas", updateTarefa);

app.get("/tarefas/:id", getTarefaById);

app.put("/tarefas/:id", updateTarefa);

app.delete("/tarefas/:id", deleteTarefa);