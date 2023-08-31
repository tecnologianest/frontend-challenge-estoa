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
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      <Card className="py-4 bg-slate-800/30 rounded-xl shadow-xl flex flex-col justify-between">
        <div>
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="text-lg uppercase font-bold">{name}</p>
            <small className="text-default-500">Birth Year: {birth_year}</small>
            <div className="mt-2">
              <h5 className="font-semibold text-lg">Species:</h5>
              <div className="flex flex-col space-y-1">
                {species?.length > 0 ? (
                  species.map((speciesData, i) => (
                    <div
                      className="rounded bg-slate-600 px-2 py-1"
                      key={`species-${i}`}
                    >
                      {speciesData.name}
                    </div>
                  ))
                ) : (
                  <div className="rounded bg-slate-600 px-2 py-1">Human</div>
                )}
              </div>
            </div>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <Image
              alt={name}
              className="object-cover rounded-xl h-40 w-full"
              src={
                "https://c4.wallpaperflare.com/wallpaper/670/495/775/star-wars-artwork-the-mandalorian-baby-yoda-hd-wallpaper-preview.jpg"
              }
            />
          </CardBody>
        </div>
        <Button onPress={onOpen} className="mt-2">
          More info
        </Button>
      </Card>

      <Modal
        className="bg-slate-900 rounded-xl"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        {/* Overlay */}

        <div className="overlay" onClick={() => setIsModalOpen(false)} />

        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-center text-slate-400">
                {name}
              </ModalHeader>
              <ModalBody>
                <img
                  className="rounded-xl h-40 w-full object-cover mx-auto"
                  src={
                    "https://c4.wallpaperflare.com/wallpaper/906/807/619/the-mandalorian-baby-yoda-hd-wallpaper-preview.jpg"
                  }
                />
                <div className="mt-4">
                  <ul className="space-y-2 text-sm">
                    <li>
                      <span className="font-semibold">Birth Year:</span>{" "}
                      {birth_year}
                    </li>
                    <li>
                      <span className="font-semibold">Eye Color:</span>{" "}
                      {eye_color}
                    </li>
                    <li>
                      <span className="font-semibold">Gender:</span> {gender}
                    </li>
                    <li>
                      <span className="font-semibold">Hair Color:</span>{" "}
                      {hair_color}
                    </li>
                    <li>
                      <span className="font-semibold">Height:</span> {height}
                    </li>
                    <li>
                      <span className="font-semibold">Mass:</span> {mass}
                    </li>
                    <li>
                      <span className="font-semibold">Skin Color:</span>{" "}
                      {skin_color}
                    </li>
                    <li>
                      <span className="font-semibold">Homeworld:</span>{" "}
                      {homeworld}
                    </li>
                    <li className="mt-2">
                      <span className="font-semibold">Movies:</span>
                      <ul className="list-disc list-inside space-y-1">
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
                    </li>
                    {species?.length > 0 && (
                      <li className="mt-2">
                        <span className="font-semibold">Species:</span>{" "}
                        {species.map((speciesData, i) => (
                          <div
                            className="rounded bg-slate-600 px-2 py-1"
                            key={`species-${i}`}
                          >
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
