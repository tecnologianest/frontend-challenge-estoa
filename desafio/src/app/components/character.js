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

  useEffect(() => {
    async function getMovies() {
      const response = await fetch("https://swapi.dev/api/films/");
      const data = await response.json();
      setMovies(data.results);
    }

    getMovies();
  }, []);

  const sortedMovies = movies?.sort((a, b) =>
    a.episode_id > b.episode_id ? 1 : -1
  );

  return (
    <>
      <Card className="py-4 bg-slate-800/30 rounded-xl shadow-xl">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <p className="text-tiny uppercase font-bold">{props.name}</p>
          <small className="text-default-500">
            Birth Year: {props.birth_year}
          </small>
          {props.species.length > 0 && (
            <small className="text-default-500">Species: Droid</small>
          )}
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <Image
            alt={props.name}
            className="object-cover rounded-xl"
            src={`${props.name}.jpg`}
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
                      {props.films[0].substr(28, 1) === "1" && (
                        <li>{sortedMovies[0]?.title}</li>
                      )}
                      {props.films[1]?.substr(28, 1) === "2" && (
                        <li>{sortedMovies[1]?.title}</li>
                      )}
                      {props.films[2]?.substr(28, 1) === "3" && (
                        <li>{sortedMovies[2]?.title}</li>
                      )}
                      {props.films[3]?.substr(28, 1) === "4" && (
                        <li>{sortedMovies[3]?.title}</li>
                      )}
                      {props.films[4]?.substr(28, 1) === "5" && (
                        <li>{sortedMovies[4]?.title}</li>
                      )}
                      {props.films[5]?.substr(28, 1) === "6" && (
                        <li>{sortedMovies[5]?.title}</li>
                      )}
                    </ul>
                    {props.species.length > 0 && <li>Species: Droid</li>}
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
