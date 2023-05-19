import Router from "express"
import { Request, Response } from "express"
import axios from "axios"

const charactersRouter = Router()

const swapi = process.env.SWAPI_URL

charactersRouter.get('/characters', async (req: Request, res: Response) => {
    try {
        const page = parseInt(req.query.page as string) || 1; 
        const response = await axios.get(`${swapi}/people`, {
            params: {
                page
            }
        });
        const characters = response.data.results.sort((a: any, b: any) => {
            return a.name.localeCompare(b.name)
        });
        res.json(characters);
    } catch (error) {
        res.status(500).json({error: "Failed to fetch characters from SWAPI"})
    }
})


export default charactersRouter

