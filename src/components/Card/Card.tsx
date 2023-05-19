import { useNavigate } from 'react-router-dom';
import { CharacterProps } from '../../types';

export function Card({
  id,
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
}: CharacterProps) {
  const navigate = useNavigate();

  function handleClick() {
    navigate('/character/' + id);
  }

  return (
    <div onClick={handleClick}>
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
      </ul>
    </div>
  );
}
