import dotenv from "dotenv";
dotenv.config();

import Router from "express";
import { Request, Response } from "express";
import axios from "axios";

const filmsRouter = Router();

const swapi = process.env.SWAPI_URL;

filmsRouter.get("/films", async (req: Request, res: Response) => {
  try {
    const response = await axios.get(`${swapi}/films`);
    let films = response.data.results;

    const { search } = req.query; 

    if (search) {
      // Se houver um termo de busca
      const searchQuery = search.toString().toLowerCase();
      films = films.filter((film: any) => {
        // Filtra os filmes pelo nome, ignorando maiúsculas e minúsculas
        return film.title.toLowerCase().includes(searchQuery);
      });
    }

    // Ordena os filmes por data de lançamento
    films.sort((a: any, b: any) => {
      const dateA = new Date(a.release_date);
      const dateB = new Date(b.release_date);
      return dateA.getTime() - dateB.getTime();
    });

    res.json(films);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch films from SWAPI" });
  }
});

export default filmsRouter;
