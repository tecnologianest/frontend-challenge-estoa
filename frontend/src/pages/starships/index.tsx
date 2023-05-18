import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Container } from "@/styles/starships";
import axios from "axios";
import { useEffect, useState } from "react";

import { StarWarsStarship } from "@/types/starships";

import { containerVariants, childVariants } from '@/utils/animation'
import {motion} from "framer-motion"

export default function Starships(){

    const [starships, setStarShips] = useState<StarWarsStarship[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);

    useEffect(() => {
        const fetchstarships = async () => {
            try {
                const response = await axios.get(`http://localhost:3333/starships?page=${currentPage}`); 
                setStarShips(response.data);
            } catch (error) {
                console.error("Erro ao buscar personagens:", error);
            }
        };
        

        fetchstarships();
    }, [currentPage]); 

    return(
        <>
        <Header />
            <Container 
            initial="initial"
            animate="animate"
            exit="exit"
            variants={containerVariants}
            >
                <motion.table variants={childVariants} >
                <motion.thead variants={childVariants} >
                    <motion.tr variants={childVariants} >
                    <motion.th variants={childVariants} >Name</motion.th>
                    <motion.th variants={childVariants} >Model</motion.th>
                    <motion.th variants={childVariants} >Length</motion.th>
                    <motion.th variants={childVariants} >Passengenrs</motion.th>
                    <motion.th variants={childVariants} >Consumables</motion.th>
                    </motion.tr>
                </motion.thead>
                <motion.tbody variants={childVariants} >
                    {starships.map(starship => (
                    <motion.tr  variants={childVariants} key={starship.name}>
                        <motion.td variants={childVariants} >{starship.name}</motion.td>
                        <motion.td variants={childVariants} >{starship.model}</motion.td>
                        <motion.td variants={childVariants} >{starship.length}</motion.td>
                        <motion.td variants={childVariants} >{starship.passengers}</motion.td>
                        <motion.td variants={childVariants} >{starship.consumables}</motion.td>
                    </motion.tr>
                    ))}
                </motion.tbody>
                </motion.table>
                
                <div>
                    <button disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}>Previous</button>
                    <button onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
                </div>
            </Container>
            <Footer />
        </>
    )
}