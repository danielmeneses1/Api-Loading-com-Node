import tarefa from "./models/tarefa";

export const getTarefas =(req, res) => {
  res.json(tarefas);
}

export const createTarefa = (req, res) => {
  const tarefa = new Tarefa(req.body);  
  try {
    tarefa.save();
    res.status(201).json(tarefa);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

export const getTarefaById = (req, res) => {
  const id = req.params.id;
  const tarefa = tarefas.find((tarefa) => tarefa.id === id);
  if (tarefa) {
    res.json(tarefa);
  } else {
    res.status(404).json({ message: "Tarefa não encontrada." });
  }
}

export const updateTarefa = (req, res) => {
  const id = req.params.id;
  const tarefa = tarefas.find((tarefa) => tarefa.id === id);
  if (tarefa) {
    tarefa.titulo = req.body.titulo;
    tarefa.descricao = req.body.descricao;
    tarefa.dataCriacao = req.body.dataCriacao;
    tarefa.andamento = req.body.andamento;
    res.json(tarefa);
  } else {
    res.status(404).json({ message: "Tarefa não encontrada." });
  }
}

export const deleteTarefa = (req, res) => {
  const id = req.params.id;
  const index = tarefas.findIndex((tarefa) => tarefa.id === id);
  if (index === -1) {
    res.status(404).json({ message: "Tarefa não encontrada." });
  } else {
    tarefas.splice(index, 1);
    res.status(204).end();
  }
}