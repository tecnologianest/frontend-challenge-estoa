import { CharacterCard } from "@/components/CharacterCard";
import { Loading } from "@/components/Loading";
import { api } from "@/services/api";
import { useCallback, useEffect, useState } from "react";
import { Button, Col, Container, ListGroup, Row } from "react-bootstrap";
import {
  CharacterInformation,
  charactersFromApi,
} from "./adapters/charactersFromApi";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import "./index.scss";

export const HomePage: React.FC = () => {
  const [characters, setCharacters] = useState<CharacterInformation[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [previousPage, setPreviousPage] = useState("");
  const [nextPage, setNextPage] = useState("");
  const [count, setCount] = useState(1);
  const [characterName, setCharactername] = useState("");

  useEffect(() => {
    const loadAllPeolple = async () => {
      try {
        setLoading(true);
        const { data } = await api.get("people", {
          params: {
            page,
          },
        });

        const moviesMapped = charactersFromApi(data);

        setCharacters(moviesMapped.movies);
        setCount(moviesMapped.count);
        setNextPage(moviesMapped.next);
        setPreviousPage(moviesMapped.previous);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadAllPeolple();
  }, [page]);

  const handleNextPage = () => {
    setPage((prevState) => prevState + 1);
    setCharactername("");

    window.scrollTo(0, 0);
  };

  const handlePreviousPage = () => {
    setPage((prevState) => prevState - 1);
    setCharactername("");
  };

  useEffect(() => {
    const getFilteredData = async () => {
      try {
        setLoading(true);
        const { data } = await api.get(`people/?search=${characterName}`);

        setCharacters(data.results);
        setNextPage(data.next);
        setPreviousPage(data.previous);
      } catch {
      } finally {
        setLoading(false);
      }
    };
    getFilteredData();
  }, [characterName]);

  return (
    <Container>
      <div className="header-cards">
        <input
          value={characterName}
          placeholder="Digite o nome do personagem"
          onChange={(e) => setCharactername(e.target.value)}
        />
        <div className="pagination">
          <div>
            <Button disabled={!previousPage} onClick={handlePreviousPage}>
              <MdArrowBackIosNew />
            </Button>
            <Button disabled={!nextPage} onClick={handleNextPage}>
              <MdArrowForwardIos />
            </Button>
          </div>
        </div>
      </div>

      <div className="cards-container">
        {loading ? (
          <Loading />
        ) : (
          <Row>
            {characters.map((movie, index) => (
              <Col sm={12} md={12} lg={4}>
                <CharacterCard name={movie.name} personLink={movie.url} />
              </Col>
            ))}
          </Row>
        )}
      </div>
    </Container>
  );
};
