import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Container } from "@/styles/planets";
import axios from "axios";
import { useEffect, useState } from "react";

import { StarWarsPlanet } from "@/types/planets";

import { containerVariants, childVariants } from '@/utils/animation'
import {motion} from "framer-motion"


export default function Planets(){
    const [planets, setPlanets] = useState<StarWarsPlanet[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1); 

    useEffect(() => {
        const fetchplanets = async () => {
            try {
                const response = await axios.get(`http://localhost:3333/planets?page=${currentPage}`);
                setPlanets(response.data);
            } catch (error) {
                console.error("Erro ao buscar personagens:", error);
            }
        };
        

        fetchplanets();
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
                <h2>Planets</h2>
                <div className="container-table">
                    <motion.table variants={childVariants} >
                    <motion.thead variants={childVariants} >
                        <motion.tr variants={childVariants} >
                        <motion.th variants={childVariants} >Name</motion.th>
                        <motion.th variants={childVariants} >Diameter</motion.th>
                        <motion.th variants={childVariants} >Population</motion.th>
                        <motion.th variants={childVariants} >Terrain</motion.th>
                        <motion.th variants={childVariants} >Gravity</motion.th>
                        </motion.tr>
                    </motion.thead>
                    <motion.tbody variants={childVariants} >
                        {planets.map(planet => (
                        <motion.tr  variants={childVariants} key={planet.name}>
                            <motion.td variants={childVariants} >{planet.name}</motion.td>
                            <motion.td variants={childVariants} >{planet.diameter}</motion.td>
                            <motion.td variants={childVariants} >{planet.population}</motion.td>
                            <motion.td variants={childVariants} >{planet.terrain}</motion.td>
                            <motion.td variants={childVariants} >{planet.gravity}</motion.td>
                        </motion.tr>
                        ))}
                    </motion.tbody>
                    </motion.table>
                </div>
                
                <div>
                <button disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}>Previous</button>
                <button onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
                </div>
            </Container>
            <Footer />
        </>
    )
}