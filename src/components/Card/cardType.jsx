import { Card, Button } from "react-bootstrap";
import { getUrlId } from "utils/getUrlId";

export const cardTypes = {
   films: ({ props: { url, title, episode_id, director, release_date }, knowMoreClick }) => (
      <Card className="mt-4 cardCustom shadow">
         <Card.Img variant="top" src={`https://starwars-visualguide.com/assets/img/films/${getUrlId(url)}.jpg`} />
         <Card.Body>
            <Card.Title className="cart-title">{title}</Card.Title>
            <Card.Text>Episode id: {episode_id || ""}</Card.Text>
            <Card.Text>Director: {director}</Card.Text>
            <Card.Text>Date Created: {release_date}</Card.Text>
         </Card.Body>
         <Card.Footer>
            <Button variant="primary" onClick={() => knowMoreClick(getUrlId(url))}>
               View More
            </Button>
         </Card.Footer>
      </Card>
   ),
   people: ({ props: { url, name, birth_year }, speciesNames, knowMoreClick }) => (
      <Card className="mt-4 cardCustom shadow">
         <Card.Img variant="top" src={`https://starwars-visualguide.com/assets/img/characters/${getUrlId(url)}.jpg`} />
         <Card.Body>
            <Card.Title className="cart-title">{name}</Card.Title>
            <Card.Text>Especie: {speciesNames.join(", ") || ""}</Card.Text>
            <Card.Text>Ano de Nasc: {birth_year}</Card.Text>
         </Card.Body>
         <Card.Footer>
            <Button variant="primary" onClick={() => knowMoreClick(getUrlId(url))}>
               View More
            </Button>
         </Card.Footer>
      </Card>
   ),
   planets: ({ props: { name, url, rotation_period, climate }, knowMoreClick }) => (
      <Card className="mt-4 cardCustom shadow">
         <Card.Img variant="top" src={`https://starwars-visualguide.com/assets/img/planets/${getUrlId(url)}.jpg`} />
         <Card.Body>
            <Card.Title className="cart-title">{name}</Card.Title>
            <Card.Text>Totation Period: {rotation_period}</Card.Text>
            <Card.Text>Climate: {climate}</Card.Text>
         </Card.Body>
         <Card.Footer>
            <Button variant="primary" onClick={() => knowMoreClick(getUrlId(url))}>
               View More
            </Button>
         </Card.Footer>
      </Card>
   ),
   species: ({ props: { url, name, eye_colors, language }, knowMoreClick }) => (
      <Card className="mt-4 cardCustom shadow">
         <Card.Img variant="top" src={`https://starwars-visualguide.com/assets/img/species/${getUrlId(url)}.jpg`} />
         <Card.Body>
            <Card.Title className="cart-title">{name}</Card.Title>
            <Card.Text>Eye Colors: {eye_colors}</Card.Text>
            <Card.Text>Language: {language}</Card.Text>
         </Card.Body>
         <Card.Footer>
            <Button variant="primary" onClick={() => knowMoreClick(getUrlId(url))}>
               View More
            </Button>
         </Card.Footer>
      </Card>
   ),
   starships: ({ props: { name, url, model, manufacturer }, knowMoreClick }) => (
      <Card className="mt-4 cardCustom shadow">
         <Card.Img variant="top" src={`https://starwars-visualguide.com/assets/img/starships/${getUrlId(url)}.jpg`} />
         <Card.Body>
            <Card.Title className="cart-title">{name}</Card.Title>
            <Card.Text>Model: {model}</Card.Text>
            <Card.Text>Manufacturer: {manufacturer}</Card.Text>
         </Card.Body>
         <Card.Footer>
            <Button variant="primary" onClick={() => knowMoreClick(getUrlId(url))}>
               View More
            </Button>
         </Card.Footer>
      </Card>
   ),
   vehicles: ({ props: { name, url, model, manufacturer }, knowMoreClick }) => (
      <Card className="mt-4 cardCustom shadow">
         <Card.Img variant="top" src={`https://starwars-visualguide.com/assets/img/vehicles/${getUrlId(url)}.jpg`} />
         <Card.Body>
            <Card.Title className="cart-title">{name}</Card.Title>
            <Card.Text>Model: {model}</Card.Text>
            <Card.Text>Manufacturer: {manufacturer}</Card.Text>
         </Card.Body>
         <Card.Footer>
            <Button variant="primary" onClick={() => knowMoreClick(getUrlId(url))}>
               View More
            </Button>
         </Card.Footer>
      </Card>
   ),
};
