import dotenv from "dotenv"
dotenv.config()//necessario declarar o config antes de carregar nosso servido.

import Router from "express"
import { Request, Response } from "express"
import axios from "axios"

const starshipsRouter = Router()

const swapi = process.env.SWAPI_URL

starshipsRouter.get('/starships', async (req: Request, res: Response) => {
    try {
        const page = req.query.page || 1; // Página atual obtida da query string, padrão para 1 se não for fornecida
        const response = await axios.get(`${swapi}/starships?page=${page}`); // Adiciona a página atual na URL da chamada à API
        const starships = response.data.results.sort((a: any, b: any) => {
            return a.name.localeCompare(b.name) // Ordena por nome em ordem alfabética
        });
        res.json(starships);
    } catch (error) {
        res.status(500).json({error: "Failed to fetch starships from SWAPI"});
    }
})


export default starshipsRouter