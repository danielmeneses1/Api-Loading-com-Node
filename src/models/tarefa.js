
const mongoose = require('mongoose');

const tarefaSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  titulo: { type: String, required: true },
  descricao: { type: String, required: true },
  dataCriacao: { type: Date, default: Date.now },
  andamento: { type: String, enum: ['pendente', 'em andamento', 'concluida'], default: 'pendente' }
});

module.exports = mongoose.model('Tarefa', tarefaSchema);

/*
{
  "titulo": "Minha Nova Tarefa",
  "descricao": "Esta é uma descrição da minha tarefa",
  "dataCriacao": "2023-11-08T12:00:00", // Substitua pela data e hora desejadas
  "andamento": "pendente"
}
 */