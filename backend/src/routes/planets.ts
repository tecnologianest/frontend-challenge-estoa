import dotenv from "dotenv"
dotenv.config()//necessario declarar o config antes de carregar nosso servido.

import Router from "express"
import { Request, Response } from "express"
import axios from "axios"

const planetsRouter = Router()

const swapi = process.env.SWAPI_URL

planetsRouter.get('/planets', async (req: Request, res: Response) => {
    try {
        const page = req.query.page || 1; // Página padrão é 1, caso não seja fornecido o parâmetro
        const response = await axios.get(`${swapi}/planets/?page=${page}`);
        const planets = response.data.results.sort((a: any, b: any) => {
            // Ordena por diâmetro em ordem decrescente
            return parseInt(b.diameter) - parseInt(a.diameter)
        });
        res.json(planets);
    } catch (error) {
        res.status(500).json({error: "Failed to fetch planets from SWAPI"});
    }
});


export default planetsRouter

