import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Container, Row, Card, Image, ListGroup, Spinner, CardGroup } from "react-bootstrap";
import { getUserById, getHomeworldName, getFilm, getVehicles, getStarships, getSpecieName } from "services/api";
import { getUrlId } from "utils/getUrlId";
import "./knowMore.css";

export const KnowMore = () => {
   const navigate = useNavigate();
   const { id, type = "people" } = useParams();
   const [data, setData] = useState([]);
   const [movies, setMovies] = useState([]);
   const [vehicles, setVehicles] = useState([]);
   const [starships, setStarships] = useState([]);
   const [loading, setloading] = useState(false);

   useEffect(() => {
      if (!id) {
         navigate("/");
      }
   }, [id, navigate]);

   useEffect(() => {
      async function getData() {
         setloading(true);
         try {
            const result = await getUserById(id);
            const { name } = await getHomeworldName(result.homeworld);
            const speciesNamesArray = await Promise.all(
               result.species.map(async (specie) => {
                  const specieName = await getSpecieName(specie);
                  return specieName.name || "";
               })
            );
            result.species = speciesNamesArray;
            result.homeworld = name;
            await getMovies(result);
            await getVehiclesData(result);
            await getStarshipsData(result);
            setData(result);
         } catch (error) {
            console.error(error);
            setloading(false);
         }
      }
      getData();
   }, [id]);

   async function getMovies(data) {
      data.films.forEach(async (film) => {
         const result = await getFilm(film);
         setMovies((prevState) => {
            if (prevState.some((movie) => movie.title === result.title)) return prevState;
            return [...prevState, result];
         });
      });
   }

   async function getVehiclesData(data) {
      data.vehicles.forEach(async (vehicle) => {
         const result = await getVehicles(vehicle);
         setVehicles((prevState) => {
            if (prevState.some((vehicle) => vehicle.name === result.name)) return prevState;
            return [...prevState, result];
         });
      });
   }

   async function getStarshipsData(data) {
      data.starships.forEach(async (starship) => {
         const result = await getStarships(starship);
         setStarships((prevState) => {
            if (prevState.some((starship) => starship.name === result.name)) return prevState;
            return [...prevState, result];
         });
      });
      setloading(false);
   }
   return loading ? (
      <Row className="justify-content-center align-items-center h-100">
         <Spinner animation="border" role="status" className="loading" />
      </Row>
   ) : (
      <Container className="mt-5 mb-5">
         <Link className="btn btn-outline-primary m-2" to={"/"}>
            Voltar
         </Link>
         <Row className="justify-content-center align-items-center image-background">
            <Card className="card flex-row card-size p-0 shadow">
               <Card.Img variant="left" className="card-img-sm-left image-size" src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} />
               <Card.Body className="mx-2">
                  <Card.Title>{data.name}</Card.Title>
                  <Card.Text>Ano de Nascimento: {data.birth_year}</Card.Text>
                  <Card.Text>Especie: {data.species?.toString()}</Card.Text>
                  <Card.Text>Altura: {data.height}cm</Card.Text>
                  <Card.Text>Peso: {data.mass}Kg</Card.Text>
                  <Card.Text>Genero: {data.gender}</Card.Text>
                  <Card.Text>Cor do Cabelo: {data.hair_color}</Card.Text>
                  <Card.Text>Cor da Pele: {data.skin_color}</Card.Text>
                  <Card.Text>Planeta Natal: {data.homeworld}</Card.Text>
               </Card.Body>
            </Card>
         </Row>
         <Row className="g-2 gap-2 mt-4">
            <CardGroup className="gap-3">
               <Card className="p-0 shadow" style={{ minWidth: "22rem" }}>
                  <Card.Header>Filmes</Card.Header>
                  <Card.Body>
                     <ListGroup horizontal className="flex-wrap">
                        {movies &&
                           movies.map((movie) => {
                              return (
                                 <ListGroup.Item>
                                    <Image
                                       src={`https://starwars-visualguide.com/assets/img/films/${getUrlId(movie.url)}.jpg`}
                                       roundedCircle
                                       className="image-list-size"
                                    />
                                    <p>{movie.title}</p>
                                 </ListGroup.Item>
                              );
                           })}
                     </ListGroup>
                  </Card.Body>
               </Card>
               <Card className="p-0 shadow" style={{ minWidth: "22rem" }}>
                  <Card.Header>Veiculos</Card.Header>
                  <Card.Body>
                     <ListGroup horizontal className="flex-wrap">
                        {vehicles &&
                           vehicles.map((vehicle) => {
                              return (
                                 <ListGroup.Item>
                                    <Image
                                       src={`https://starwars-visualguide.com/assets/img/vehicles/${getUrlId(vehicle.url)}.jpg`}
                                       roundedCircle
                                       className="image-list-size"
                                    />
                                    <p>{vehicle.name}</p>
                                 </ListGroup.Item>
                              );
                           })}
                     </ListGroup>
                  </Card.Body>
               </Card>
               <Card className="p-0 shadow" style={{ minWidth: "22rem" }}>
                  <Card.Header>naves estelares</Card.Header>
                  <Card.Body>
                     <ListGroup horizontal className="flex-wrap">
                        {starships &&
                           starships.map((starship) => {
                              return (
                                 <ListGroup.Item>
                                    <Image
                                       src={`https://starwars-visualguide.com/assets/img/starships/${getUrlId(starship.url)}.jpg`}
                                       roundedCircle
                                       className="image-list-size"
                                    />
                                    <p>{starship.name}</p>
                                 </ListGroup.Item>
                              );
                           })}
                     </ListGroup>
                  </Card.Body>
               </Card>
            </CardGroup>
         </Row>
         <Row></Row>
      </Container>
   );
};
