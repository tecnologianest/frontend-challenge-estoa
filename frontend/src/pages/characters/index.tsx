import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import { Container } from "@/styles/characters"
import axios from "axios"
import { useEffect, useState } from "react"

import { StarWarsCharacter } from "@/types/characters"

import { containerVariants, childVariants } from '@/utils/animation'
import {motion} from "framer-motion"
import { ModalComponent } from "@/components/Modal"


export default function Characters() {
  const [characters, setCharacters] = useState<StarWarsCharacter[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1); 
  const [modal, setModal] = useState(false)
  const [details, setDetails] = useState({} as StarWarsCharacter)

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await axios.get(`http://localhost:3333/characters?page=${currentPage}`);
        setCharacters(response.data);
      } catch (error) {
        console.error("Erro ao buscar personagens:", error);
      }
    };

    fetchCharacters();
  }, [currentPage]);

  function handleOpenModal(character: any){
    setModal(true)
    setDetails(character)
  }
  
  function handleCloseModal(){
    setModal(false)
  }

  return (
    <>
      <Header />
      <Container 
      initial="initial"
      animate="animate"
      exit="exit"
      variants={containerVariants}
      >
        <h2>Characters</h2>
        <div className="container-table">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Gender</th>
                <th>Height</th>
                <th>Skin Color</th>
                <th>Eye Color</th>
              </tr>
            </thead>
            <motion.tbody variants={childVariants}>
              {characters.map(character => (
                <motion.tr variants={childVariants} key={character.name} onClick={() => handleOpenModal(character)}>
                  <motion.td className="more" variants={childVariants}>{character.name}</motion.td>
                  <motion.td variants={childVariants}>{character.gender}</motion.td>
                  <motion.td variants={childVariants}>{character.height}</motion.td>
                  <motion.td variants={childVariants}>{character.skin_color}</motion.td>
                  <motion.td variants={childVariants}>{character.eye_color}</motion.td>
                </motion.tr>
              ))}
            </motion.tbody>
          </table>
        </div>
        
        <div>
          <button disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}>Previous</button>
          <button onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
        </div>

        <ModalComponent isOpen={modal} onRequestClose={handleCloseModal} details={details}/>

      </Container>
      <Footer />
    </>
  )
}
