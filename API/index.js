const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const port = 3000;

let atividadesDB = [];

try {
  const dadosIniciais = fs.readFileSync('dadosAtividades.json', 'utf8');
  atividadesDB = JSON.parse(dadosIniciais);
} catch (err) {
  console.error("Erro ao carregar dados iniciais:", err);
  atividadesDB = {};
}

app.put('/atividades/:ticketId', (req, res) => {
  const ticketId = req.params.ticketId;
  const atividade = req.body;

  if (atividade.ticketId.toString() !== ticketId) {
    return res.status(400).send('Ticket ID não corresponde.');
  }

  // Encontrar índice da atividade existente
  const index = atividadesDB.findIndex(a => a.ticketId.toString() === ticketId);

  if (index !== -1) {
    // Atualiza a atividade existente
    atividadesDB[index] = atividade;
  } else {
    // Adiciona uma nova atividade
    atividadesDB.push(atividade);
  }

  console.log(atividadesDB);
  // Salvar as alterações no arquivo (opcional)
  // fs.writeFileSync('dadosAtividades.json', JSON.stringify(atividadesDB, null, 2), 'utf8');

  res.status(200).send(`Atividade com Ticket ID ${ticketId} atualizada com sucesso.`);
});


app.get('/atividades', (req, res) => {
  console.log(atividadesDB);
  res.status(200).json(atividadesDB);
});

app.listen(port, () => {
  console.log(`API rodando em http://localhost:${port}`);
});
