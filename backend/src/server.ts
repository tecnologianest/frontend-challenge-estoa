import dotenv from "dotenv"
dotenv.config()//necessario declarar o config antes de carregar nosso servido.

import express from "express"
import cors from "cors"

//routes
import charactersRouter from "../src/routes/characters"

const app = express()

const port = 3333
app.use(cors())
app.use(express.json())

app.use('/', charactersRouter)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})