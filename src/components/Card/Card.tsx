import { useState } from 'react';
import { Modal } from '..';
import { CharacterResultProps } from '../../context/CharactersContext.types';

export function Card({
  name,
  species,
  birth_year,
  eye_color,
  gender,
  hair_color,
  height,
  mass,
  skin_color,
  homeworld,
  films,
}: CharacterResultProps) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  return (
    <div>
      <ul>
        <li>name: {name}</li>
        {species.length > 0 && (
          <details open>
            <summary>Species</summary>
            <ul>
              {species.map((specie) => (
                <li key={name + '-' + specie}>{specie}</li>
              ))}
            </ul>
          </details>
        )}
        <li>birth year: {birth_year}</li>
        <button onClick={openModal}>see more</button>
      </ul>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ul>
          <li>name: {name}</li>
          <li>birth year: {birth_year}</li>
          <li>eye color: {eye_color}</li>
          <li>gender: {gender}</li>
          <li>hair_color: {hair_color}</li>
          <li>height: {height}</li>
          <li>mass: {mass}</li>
          <li>skin_color: {skin_color}</li>
          <li>homeworld: {homeworld}</li>
          <details open>
            <summary>films:</summary>
            <ul>
              {films.map((film) => (
                <li>{film}</li>
              ))}
            </ul>
          </details>
          <li>species: {species}</li>
        </ul>
      </Modal>
    </div>
  );
}
