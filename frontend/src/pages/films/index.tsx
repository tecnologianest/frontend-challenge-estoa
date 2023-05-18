import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Container } from "@/styles/films";
import axios from "axios";
import { useEffect, useState } from "react";

import { StarWarsFilm } from "@/types/types";

import { containerVariants, childVariants } from '@/utils/animation'
import {motion} from "framer-motion"

export default function Films() {
  const [films, setFilms] = useState<StarWarsFilm[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchFilms = async () => {
      try {
        const response = await axios.get(`http://localhost:3333/films`);
        setFilms(response.data);
      } catch (error) {
        console.error("Erro ao buscar personagens:", error);
      }
    };

    fetchFilms();
  }, []);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <>
      <Header />
      <Container
      initial="initial"
      animate="animate"
      exit="exit"
      variants={containerVariants}>
        <input type="text" placeholder="Search by film title" value={searchTerm} onChange={handleSearch}/>
        <motion.table variants={childVariants}>
          <motion.thead variants={childVariants}>
            <motion.tr variants={childVariants}>
              <motion.th variants={childVariants}>Title</motion.th>
              <motion.th variants={childVariants}>Director</motion.th>
              <motion.th variants={childVariants}>Producer</motion.th>
              <motion.th variants={childVariants}>Release_date</motion.th>
            </motion.tr>
          </motion.thead>
          <motion.tbody variants={childVariants}>
            {films.filter((films) => films.title.toLowerCase().includes(searchTerm.toLowerCase())).map((films) => (
                <motion.tr variants={childVariants} key={films.title}>
                  <motion.td variants={childVariants}>{films.title}</motion.td>
                  <motion.td variants={childVariants}>{films.director}</motion.td>
                  <motion.td variants={childVariants}>{films.producer}</motion.td>
                  <motion.td variants={childVariants}>{films.release_date}</motion.td>
                </motion.tr>
              ))}
          </motion.tbody>
        </motion.table>
      </Container>
      <Footer />
    </>
  );
}
