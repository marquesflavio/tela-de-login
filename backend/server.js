const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

// Mock database
const users = [
    { email: 'teste@teste.com', password: '123456' },
];

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
        res.status(200).send({ message: 'Login efetuado com sucesso!' });
    } else {
        res.status(401).send({ message: 'Login falhou!' });
    }
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
