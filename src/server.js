import express from "express"
import { config } from "dotenv"

config()

const port = process.env.PORT || 3000

const app = express()

app.use(express.json())

app.get("/", (req, res) => {
    return res.status(200).send({ message: "Hello, World!"})
})

app.post("/2tds1", (req, res) => {
    return res.status(200).send({ message: "Hello, 2TDS1 - só os Devs!"})
})

app.listen(port, () => {
    console.log(`💕 Server started on http://localhost:${port}`)
})