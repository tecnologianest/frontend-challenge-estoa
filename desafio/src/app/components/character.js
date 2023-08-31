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

export default function Character({
  name,
  birth_year,
  eye_color,
  gender,
  hair_color,
  height,
  mass,
  skin_color,
  homeworld,
  species: speciesURLs,
  films: filmURLs,
}) {
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
    const fetchSpecies = async () => {
      const fetchedSpecies = await Promise.all(
        speciesURLs.map(async (speciesURL) => {
          const response = await fetch(speciesURL);
          const data = await response.json();
          return data;
        })
      );
      setSpecies(fetchedSpecies);
    };

    fetchSpecies();
  }, [speciesURLs]);

  return (
    <>
      <Card className="py-4 bg-slate-800/30 rounded-xl shadow-xl">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <p className="text-tiny uppercase font-bold">{name}</p>
          <small className="text-default-500">Birth Year: {birth_year}</small>
          {species?.length > 0 && (
            <>
              <h5 className="font-semibold">Species:</h5>
              <div className="flex flex-col">
                {species.map((speciesData, i) => (
                  <div className="rounded" key={`species-${i}`}>
                    {speciesData.name}
                  </div>
                ))}
              </div>
            </>
          )}
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <Image
            alt={name}
            className="object-cover rounded-xl"
            src="https://c4.wallpaperflare.com/wallpaper/670/495/775/star-wars-artwork-the-mandalorian-baby-yoda-hd-wallpaper-preview.jpg"
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
                {name}
              </ModalHeader>
              <ModalBody>
                <img
                  className="rounded-xl"
                  src={
                    "https://c4.wallpaperflare.com/wallpaper/906/807/619/the-mandalorian-baby-yoda-hd-wallpaper-preview.jpg"
                  }
                />
                <div className="flex">
                  <ul className="space-y-1 text-transform: capitalize text-xs">
                    <li className="font-light">
                      <span className="font-bold">Birth Year:</span>{" "}
                      {birth_year}
                    </li>
                    <li>
                      <span className="font-bold">Eye Color:</span> {eye_color}
                    </li>
                    <li>
                      <span className="font-bold">Gender:</span> {gender}
                    </li>
                    <li>
                      <span className="font-bold">Hair Color:</span>{" "}
                      {hair_color}
                    </li>
                    <li>
                      <span className="font-bold">Height:</span> {height}
                    </li>
                    <li>
                      <span className="font-bold">Mass:</span> {mass}
                    </li>
                    <li>
                      <span className="font-bold">Skin Color:</span>{" "}
                      {skin_color}
                    </li>
                    <li>
                      <span className="font-bold">Homeworld:</span> {homeworld}
                    </li>
                    <ul>
                      <span className="font-bold">Movies:</span>
                      {filmURLs.map((filmURL, index) => {
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

                    {species?.length > 0 && (
                      <li>
                        Species:{" "}
                        {species.map((speciesData, i) => (
                          <div className="rounded" key={`species-${i}`}>
                            {speciesData.name}
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
