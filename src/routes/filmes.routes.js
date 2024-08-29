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

app.get("/filmes", (req, res) => {
    return res.status(200).send(filmesmarcantes);
});