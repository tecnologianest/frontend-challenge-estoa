import { Container, Row, Card, Image, ListGroup, CardGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getUrlId } from "utils/getUrlId";

export const dataTypes = {
   films: ({
      data: { movieData: { title, release_date, director, episode_id, producer, opening_crawl } = [], characters, planets, starships, vehicles, species },
      id,
   }) => (
      <Container className="mt-5 mb-5">
         <Link className="btn btn-outline-primary m-2" to={"/"}>
            Voltar
         </Link>
         <Row className="justify-content-center align-items-center image-background">
            <Card className="card flex-row card-size p-0 shadow">
               <Card.Img variant="left" className="card-img-sm-left image-size" src={`https://starwars-visualguide.com/assets/img/films/${id}.jpg`} />
               <Card.Body className="mx-2">
                  <Card.Title>{title}</Card.Title>
                  <Card.Text>Date Created: {release_date}</Card.Text>
                  <Card.Text>Director: {director}</Card.Text>
                  <Card.Text>Producer(s): {producer}</Card.Text>
                  <Card.Text>Episode id: {episode_id}cm</Card.Text>
                  <Card.Text>Opening Crawl: {opening_crawl}</Card.Text>
               </Card.Body>
            </Card>
         </Row>
         <Row className="g-2 gap-2 mt-4">
            <CardGroup className="gap-3">
               <Card className="p-0 shadow" style={{ minWidth: "22rem" }}>
                  <Card.Header>Related Characters</Card.Header>
                  <Card.Body>
                     <ListGroup horizontal className="flex-wrap">
                        {characters?.length > 0 ? (
                           characters.map((character) => {
                              return (
                                 <ListGroup.Item>
                                    <Image
                                       src={`https://starwars-visualguide.com/assets/img/characters/${character.id}.jpg`}
                                       roundedCircle
                                       className="image-list-size"
                                    />
                                    <p>{character.name}</p>
                                 </ListGroup.Item>
                              );
                           })
                        ) : (
                           <p>There are no related items for this category</p>
                        )}
                     </ListGroup>
                  </Card.Body>
               </Card>
               <Card className="p-0 shadow" style={{ minWidth: "22rem" }}>
                  <Card.Header>Related Vehicles</Card.Header>
                  <Card.Body>
                     <ListGroup horizontal className="flex-wrap">
                        {vehicles?.length > 0 ? (
                           vehicles.map((vehicle) => {
                              return (
                                 <ListGroup.Item>
                                    <Image
                                       src={`https://starwars-visualguide.com/assets/img/vehicles/${vehicle.id}.jpg`}
                                       roundedCircle
                                       className="image-list-size"
                                    />
                                    <p>{vehicle.name}</p>
                                 </ListGroup.Item>
                              );
                           })
                        ) : (
                           <p>There are no related items for this category</p>
                        )}
                     </ListGroup>
                  </Card.Body>
               </Card>
               <Card className="p-0 shadow" style={{ minWidth: "22rem" }}>
                  <Card.Header>Related Starships</Card.Header>
                  <Card.Body>
                     <ListGroup horizontal className="flex-wrap">
                        {starships?.length > 0 ? (
                           starships.map((starship) => {
                              return (
                                 <ListGroup.Item>
                                    <Image
                                       src={`https://starwars-visualguide.com/assets/img/starships/${starship.id}.jpg`}
                                       roundedCircle
                                       className="image-list-size"
                                    />
                                    <p>{starship.name}</p>
                                 </ListGroup.Item>
                              );
                           })
                        ) : (
                           <p>There are no related items for this category</p>
                        )}
                     </ListGroup>
                  </Card.Body>
               </Card>
               <Card className="p-0 shadow" style={{ minWidth: "22rem" }}>
                  <Card.Header>Related Species</Card.Header>
                  <Card.Body>
                     <ListGroup horizontal className="flex-wrap">
                        {species?.length > 0 ? (
                           species.map((specie) => {
                              return (
                                 <ListGroup.Item>
                                    <Image
                                       src={`https://starwars-visualguide.com/assets/img/species/${specie.id}.jpg`}
                                       roundedCircle
                                       className="image-list-size"
                                    />
                                    <p>{specie.name}</p>
                                 </ListGroup.Item>
                              );
                           })
                        ) : (
                           <p>There are no related items for this category</p>
                        )}
                     </ListGroup>
                  </Card.Body>
               </Card>
               <Card className="p-0 shadow" style={{ minWidth: "22rem" }}>
                  <Card.Header>Related Species</Card.Header>
                  <Card.Body>
                     <ListGroup horizontal className="flex-wrap">
                        {planets?.length > 0 ? (
                           planets.map((planet) => {
                              return (
                                 <ListGroup.Item>
                                    <Image
                                       src={`https://starwars-visualguide.com/assets/img/planets/${planet.id}.jpg`}
                                       roundedCircle
                                       className="image-list-size"
                                    />
                                    <p>{planet.name}</p>
                                 </ListGroup.Item>
                              );
                           })
                        ) : (
                           <p>There are no related items for this category</p>
                        )}
                     </ListGroup>
                  </Card.Body>
               </Card>
            </CardGroup>
         </Row>
      </Container>
   ),
   people: ({
      data: { peopleData: { name, birth_year, height, mass, gender, hair_color, skin_color, homeworld } = [], starships, vehicles, species, films },
      id,
   }) => (
      <Container className="mt-5 mb-5">
         <Link className="btn btn-outline-primary m-2" to={"/"}>
            Voltar
         </Link>
         <Row className="justify-content-center align-items-center image-background">
            <Card className="card flex-row card-size p-0 shadow">
               <Card.Img variant="left" className="card-img-sm-left image-size" src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} />
               <Card.Body className="mx-2">
                  <Card.Title>{name}</Card.Title>
                  <Card.Text>Birth Year: {birth_year}</Card.Text>
                  <Card.Text>Species: {species?.toString()}</Card.Text>
                  <Card.Text>Height: {height}cm</Card.Text>
                  <Card.Text>Mass: {mass}Kg</Card.Text>
                  <Card.Text>Gender: {gender}</Card.Text>
                  <Card.Text>Hair Color: {hair_color}</Card.Text>
                  <Card.Text>Skin Color: {skin_color}</Card.Text>
                  <Card.Text>Homeworld: {homeworld}</Card.Text>
               </Card.Body>
            </Card>
         </Row>
         <Row className="g-2 gap-2 mt-4">
            <CardGroup className="gap-3">
               <Card className="p-0 shadow" style={{ minWidth: "22rem" }}>
                  <Card.Header>Related Films</Card.Header>
                  <Card.Body>
                     <ListGroup horizontal className="flex-wrap">
                        {films?.length > 0 ? (
                           films.map((movie) => {
                              return (
                                 <ListGroup.Item>
                                    <Image
                                       src={`https://starwars-visualguide.com/assets/img/films/${movie.id}.jpg`}
                                       roundedCircle
                                       className="image-list-size"
                                    />
                                    <p>{movie.name}</p>
                                 </ListGroup.Item>
                              );
                           })
                        ) : (
                           <p>There are no related items for this category</p>
                        )}
                     </ListGroup>
                  </Card.Body>
               </Card>
               <Card className="p-0 shadow" style={{ minWidth: "22rem" }}>
                  <Card.Header>Related Vehicles</Card.Header>
                  <Card.Body>
                     <ListGroup horizontal className="flex-wrap">
                        {vehicles?.length > 0 ? (
                           vehicles.map((vehicle) => {
                              return (
                                 <ListGroup.Item>
                                    <Image
                                       src={`https://starwars-visualguide.com/assets/img/vehicles/${vehicle.id}.jpg`}
                                       roundedCircle
                                       className="image-list-size"
                                    />
                                    <p>{vehicle.name}</p>
                                 </ListGroup.Item>
                              );
                           })
                        ) : (
                           <p>There are no related items for this category</p>
                        )}
                     </ListGroup>
                  </Card.Body>
               </Card>
               <Card className="p-0 shadow" style={{ minWidth: "22rem" }}>
                  <Card.Header>Related Starships</Card.Header>
                  <Card.Body>
                     <ListGroup horizontal className="flex-wrap">
                        {starships?.length > 0 ? (
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
                           })
                        ) : (
                           <p>There are no related items for this category</p>
                        )}
                     </ListGroup>
                  </Card.Body>
               </Card>
            </CardGroup>
         </Row>
      </Container>
   ),
   planets: ({ data: { planetData: { name, rotation_period, orbital_period, diameter, climate, gravity, terrain } = [], characters, films }, id }) => (
      <Container className="mt-5 mb-5">
         <Link className="btn btn-outline-primary m-2" to={"/"}>
            Voltar
         </Link>
         <Row className="justify-content-center align-items-center image-background">
            <Card className="card flex-row card-size p-0 shadow">
               <Card.Img variant="left" className="card-img-sm-left image-size" src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} />
               <Card.Body className="mx-2">
                  <Card.Title>{name}</Card.Title>
                  <Card.Text>Rotation Period: {rotation_period}</Card.Text>
                  <Card.Text>Orbital Period: {orbital_period}</Card.Text>
                  <Card.Text>Diameter: {diameter}</Card.Text>
                  <Card.Text>Climate: {climate}</Card.Text>
                  <Card.Text>Gravity: {gravity}</Card.Text>
                  <Card.Text>Terrain: {terrain}</Card.Text>
               </Card.Body>
            </Card>
         </Row>
         <Row className="g-2 gap-2 mt-4">
            <CardGroup className="gap-3">
               <Card className="p-0 shadow" style={{ minWidth: "22rem" }}>
                  <Card.Header>Related Characters</Card.Header>
                  <Card.Body>
                     <ListGroup horizontal className="flex-wrap">
                        {characters?.length > 0 ? (
                           characters.map((character) => {
                              return (
                                 <ListGroup.Item>
                                    <Image
                                       src={`https://starwars-visualguide.com/assets/img/characters/${character.id}.jpg`}
                                       roundedCircle
                                       className="image-list-size"
                                    />
                                    <p>{character.name}</p>
                                 </ListGroup.Item>
                              );
                           })
                        ) : (
                           <p>There are no related items for this category</p>
                        )}
                     </ListGroup>
                  </Card.Body>
               </Card>
               <Card className="p-0 shadow" style={{ minWidth: "22rem" }}>
                  <Card.Header>Related Films</Card.Header>
                  <Card.Body>
                     <ListGroup horizontal className="flex-wrap">
                        {films?.length > 0 ? (
                           films.map((film) => {
                              return (
                                 <ListGroup.Item>
                                    <Image src={`https://starwars-visualguide.com/assets/img/films/${film.id}.jpg`} roundedCircle className="image-list-size" />
                                    <p>{film.name}</p>
                                 </ListGroup.Item>
                              );
                           })
                        ) : (
                           <p>There are no related items for this category</p>
                        )}
                     </ListGroup>
                  </Card.Body>
               </Card>
            </CardGroup>
         </Row>
      </Container>
   ),
   species: ({
      data: {
         speciesData: { name, classification, designation, average_height, skin_colors, hair_colors, eye_colors, average_lifespan } = [],
         characters,
         films,
         homeWorld: { name: homeworld } = [],
      },
      id,
   }) => (
      <Container className="mt-5 mb-5">
         <Link className="btn btn-outline-primary m-2" to={"/"}>
            Voltar
         </Link>
         <Row className="justify-content-center align-items-center image-background">
            <Card className="card flex-row card-size p-0 shadow">
               <Card.Img variant="left" className="card-img-sm-left image-size" src={`https://starwars-visualguide.com/assets/img/species/${id}.jpg`} />
               <Card.Body className="mx-2">
                  <Card.Title>{name}</Card.Title>
                  <Card.Text>Classification: {classification}</Card.Text>
                  <Card.Text>Designation: {designation}</Card.Text>
                  <Card.Text>Average Height: {average_height}cm</Card.Text>
                  <Card.Text>Skin Colors: {skin_colors}</Card.Text>
                  <Card.Text>Hair Colors: {hair_colors}</Card.Text>
                  <Card.Text>Yye Colors: {eye_colors}</Card.Text>
                  <Card.Text>Average Lifespan: {average_lifespan}</Card.Text>
                  <Card.Text>homeworld: {homeworld}</Card.Text>
               </Card.Body>
            </Card>
         </Row>
         <Row className="g-2 gap-2 mt-4">
            <CardGroup className="gap-3">
               <Card className="p-0 shadow" style={{ minWidth: "22rem" }}>
                  <Card.Header>Related Films</Card.Header>
                  <Card.Body>
                     <ListGroup horizontal className="flex-wrap">
                        {films?.length > 0 ? (
                           films.map((movie) => {
                              return (
                                 <ListGroup.Item>
                                    <Image
                                       src={`https://starwars-visualguide.com/assets/img/films/${movie.id}.jpg`}
                                       roundedCircle
                                       className="image-list-size"
                                    />
                                    <p>{movie.name}</p>
                                 </ListGroup.Item>
                              );
                           })
                        ) : (
                           <p>There are no related items for this category</p>
                        )}
                     </ListGroup>
                  </Card.Body>
               </Card>
               <Card className="p-0 shadow" style={{ minWidth: "22rem" }}>
                  <Card.Header>Related Characters</Card.Header>
                  <Card.Body>
                     <ListGroup horizontal className="flex-wrap">
                        {characters?.length > 0 ? (
                           characters.map((character) => {
                              return (
                                 <ListGroup.Item>
                                    <Image
                                       src={`https://starwars-visualguide.com/assets/img/characters/${character.id}.jpg`}
                                       roundedCircle
                                       className="image-list-size"
                                    />
                                    <p>{character.name}</p>
                                 </ListGroup.Item>
                              );
                           })
                        ) : (
                           <p>There are no related items for this category</p>
                        )}
                     </ListGroup>
                  </Card.Body>
               </Card>
            </CardGroup>
         </Row>
      </Container>
   ),
   starships: ({ data: { starshipsData: { name, model, manufacturer, max_atmosphering_speed, cost_in_credits, passengers } = [], films }, id }) => (
      <Container className="mt-5 mb-5">
         <Link className="btn btn-outline-primary m-2" to={"/"}>
            Voltar
         </Link>
         <Row className="justify-content-center align-items-center image-background">
            <Card className="card flex-row card-size p-0 shadow">
               <Card.Img variant="left" className="card-img-sm-left image-size" src={`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`} />
               <Card.Body className="mx-2">
                  <Card.Title>{name}</Card.Title>
                  <Card.Text>Model: {model}</Card.Text>
                  <Card.Text>Manufacturer: {manufacturer}</Card.Text>
                  <Card.Text>Cost In Credits: {cost_in_credits}</Card.Text>
                  <Card.Text>Max Atmosphering Speed: {max_atmosphering_speed} mi/h</Card.Text>
                  <Card.Text>Passengers: {passengers}</Card.Text>
               </Card.Body>
            </Card>
         </Row>
         <Row className="g-2 gap-2 mt-4">
            <CardGroup className="gap-3">
               <Card className="p-0 shadow" style={{ minWidth: "22rem" }}>
                  <Card.Header>Related Films</Card.Header>
                  <Card.Body>
                     <ListGroup horizontal className="flex-wrap">
                        {films?.length > 0 ? (
                           films.map((film) => {
                              return (
                                 <ListGroup.Item>
                                    <Image src={`https://starwars-visualguide.com/assets/img/films/${film.id}.jpg`} roundedCircle className="image-list-size" />
                                    <p>{film.name}</p>
                                 </ListGroup.Item>
                              );
                           })
                        ) : (
                           <p>There are no related items for this category</p>
                        )}
                     </ListGroup>
                  </Card.Body>
               </Card>
            </CardGroup>
         </Row>
      </Container>
   ),
   vehicles: ({ data: { vehiclesData: { name, model, manufacturer, cost_in_credits, max_atmosphering_speed, passengers } = [], characters, films }, id }) => (
      <Container className="mt-5 mb-5">
         <Link className="btn btn-outline-primary m-2" to={"/"}>
            Voltar
         </Link>
         <Row className="justify-content-center align-items-center image-background">
            <Card className="card flex-row card-size p-0 shadow">
               <Card.Img variant="left" className="card-img-sm-left image-size" src={`https://starwars-visualguide.com/assets/img/vehicles/${id}.jpg`} />
               <Card.Body className="mx-2">
                  <Card.Title>{name}</Card.Title>
                  <Card.Text>Model: {model}</Card.Text>
                  <Card.Text>Manufacturer: {manufacturer}</Card.Text>
                  <Card.Text>Cost In Credits: {cost_in_credits}</Card.Text>
                  <Card.Text>Max Atmosphering Speed: {max_atmosphering_speed} mi/h</Card.Text>
                  <Card.Text>Passengers: {passengers}</Card.Text>
               </Card.Body>
            </Card>
         </Row>
         <Row className="g-2 gap-2 mt-4">
            <CardGroup className="gap-3">
               <Card className="p-0 shadow" style={{ minWidth: "22rem" }}>
                  <Card.Header>Related Films</Card.Header>
                  <Card.Body>
                     <ListGroup horizontal className="flex-wrap">
                        {films?.length > 0 ? (
                           films.map((movie) => {
                              return (
                                 <ListGroup.Item>
                                    <Image
                                       src={`https://starwars-visualguide.com/assets/img/films/${movie.id}.jpg`}
                                       roundedCircle
                                       className="image-list-size"
                                    />
                                    <p>{movie.name}</p>
                                 </ListGroup.Item>
                              );
                           })
                        ) : (
                           <p>There are no related items for this category</p>
                        )}
                     </ListGroup>
                  </Card.Body>
               </Card>
               <Card className="p-0 shadow" style={{ minWidth: "22rem" }}>
                  <Card.Header>Related Pilots</Card.Header>
                  <Card.Body>
                     <ListGroup horizontal className="flex-wrap">
                        {characters?.length > 0 ? (
                           characters.map((character) => {
                              return (
                                 <ListGroup.Item>
                                    <Image
                                       src={`https://starwars-visualguide.com/assets/img/characters/${character.id}.jpg`}
                                       roundedCircle
                                       className="image-list-size"
                                    />
                                    <p>{character.name}</p>
                                 </ListGroup.Item>
                              );
                           })
                        ) : (
                           <p>There are no related items for this category</p>
                        )}
                     </ListGroup>
                  </Card.Body>
               </Card>
            </CardGroup>
         </Row>
      </Container>
   ),
};
