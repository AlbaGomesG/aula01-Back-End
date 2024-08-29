import express from "express"
import { config } from "dotenv"

config()

const port = process.env.PORT || 3000

const app = express()

app.use(express.json())

const guloseimas = [
    {
        id: 1,
        nome: "Trufa",
        preco: 8.50,
    },
    {
        id: 2,
        nome: "Jujuba",
        preco: 10.50,
    },
    {
        id: 3,
        nome: "Brigadeirão",
        preco: 8,
    }
];

const filmesmarcantes = [
    {
        id: 1001,
        titulo: "Avatar: o caminho da água",
        genero: "Ficcão cientifica",
        emCartaz: false
    },
    {
        id: 1002,
        titulo: "Toy story",
        genero: "Animação",
        emCartaz: false
    },
    {
        id: 1003,
        titulo: "Meu malvado favorido 4",
        genero: "Animação",
        emCartaz: true
    }
];

app.get("/", (req, res) => {
    return res.status(200).send({ message: "Hello, World!"})
})

app.get("/doces", (req, res) => {
    return res.status(200).send(guloseimas);
});

app.post("/doces", (req, res) => {
    const {nome, preco} = req.body;

    const novoDoce = {
        id: guloseimas.length + 1,
        nome: nome,
        preco: preco
    };

    guloseimas.push(novoDoce);

    return res.status(200).send(guloseimas);
});

app.get("/filmes", (req, res) => {
    return res.status(200).send(filmesmarcantes);
});

app.post("/2tds1", (req, res) => {
    return res.status(200).send({ message: "Hello, 2TDS1 - só os Devs!"})
})

app.listen(port, () => {
    console.log(`💕 Server started on http://localhost:${port}`)
})