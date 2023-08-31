"use client";

import { useState, useEffect } from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

export default function Character(props) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [movies, setMovies] = useState([]);
  const [species, setSpecies] = useState([]);

  useEffect(() => {
    async function getMovies() {
      const response = await fetch("https://swapi.dev/api/films/");
      const data = await response.json();
      setMovies(data.results);
    }

    getMovies();
  }, []);

  useEffect(() => {
    for (let item of props.species) {
      setSpecies([]);
      fetch(item).then((res) => {
        res.json().then((data) => {
          setSpecies([...species, data]);
        });
      });
    }
  }, []);

  return (
    <>
      <Card className="py-4 bg-slate-800/30 rounded-xl shadow-xl">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <p className="text-tiny uppercase font-bold">{props.name}</p>
          <small className="text-default-500">
            Birth Year: {props.birth_year}
          </small>
          {props.species?.length > 0 && (
            <>
              <h5 className="font-semibold">Species:</h5>
              <div className="flex flex-col">
                {species.map((species, i) => (
                  <div className="rounded" key={`species-${i}`}>
                    {species.name}
                  </div>
                ))}
              </div>
            </>
          )}
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <Image
            alt={props.name}
            className="object-cover rounded-xl"
            src="https://placehold.co/400"
            width={270}
          />
        </CardBody>
        <Button onPress={onOpen}>More info</Button>
      </Card>
      <Modal
        className="bg-slate-900 rounded-xl"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-center text-slate-400">
                {props.name}
              </ModalHeader>
              <ModalBody>
                <img className="rounded-xl" src={`${props.name}.jpg`} />
                <div className="flex">
                  <ul className="space-y-1 text-transform: capitalize text-xs">
                    <li className="font-light">
                      <span className="font-bold">Birth Year:</span>{" "}
                      {props.birth_year}
                    </li>
                    <li>
                      <span className="font-bold">Eye Color:</span>{" "}
                      {props.eye_color}
                    </li>
                    <li>
                      <span className="font-bold">Gender:</span> {props.gender}
                    </li>
                    <li>
                      <span className="font-bold">Hair Color:</span>{" "}
                      {props.hair_color}
                    </li>
                    <li>
                      <span className="font-bold">Height:</span> {props.height}
                    </li>
                    <li>
                      <span className="font-bold">Mass:</span> {props.mass}
                    </li>
                    <li>
                      <span className="font-bold">Skin Color:</span>{" "}
                      {props.skin_color}
                    </li>
                    <li>
                      <span className="font-bold">Homeworld:</span>{" "}
                      {props.homeworld}
                    </li>
                    <ul>
                      <span className="font-bold">Movies:</span>
                      {props.films.map((filmURL, index) => {
                        const episodeNumber = filmURL.substr(28, 1);
                        const matchingMovie = movies.find(
                          (movie) =>
                            movie.episode_id === parseInt(episodeNumber)
                        );

                        return (
                          matchingMovie && (
                            <li key={index}>{matchingMovie.title}</li>
                          )
                        );
                      })}
                    </ul>

                    {props.species?.length > 0 && (
                      <li>
                        Species:{" "}
                        {species.map((species, i) => (
                          <div className="rounded" key={`species-${i}`}>
                            {species.name}
                          </div>
                        ))}
                      </li>
                    )}
                  </ul>
                </div>
              </ModalBody>
              <ModalFooter></ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
