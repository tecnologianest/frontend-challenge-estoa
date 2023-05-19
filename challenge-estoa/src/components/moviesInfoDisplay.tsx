import axios from "axios";
import { useEffect, useState } from "react";

type Movie = {
  name: string;
  opening_crawl: string;
  producer: string;
  release_date: string;
  title: string;
  director: string;
  created: string;
  episode_id: number;
  edited: string;
};

export default function Movies({ movieId }: { movieId: string }) {
  const [movie, setMovie] = useState<Movie>();

  useEffect(() => {
    const fetchMovie = async () => {
      await axios.get(`https://swapi.dev/api/films/${movieId}/`).then((res) => {
        setMovie(res.data);
      });
    };

    fetchMovie();
  }, [movieId]);

  return (
    <div>
      {movie ? (
        <div className="my-4">
          <p>
            <strong>Title:</strong> {movie.title}
          </p>
          <p>
            <strong>Director:</strong> {movie.director}
          </p>
          <p>
            <strong>Producer:</strong> {movie.producer}
          </p>
          <p>
            <strong>Created:</strong> {movie.created}
          </p>
          <p>
            <strong>Edited:</strong> {movie.edited}
          </p>
        </div>
      ) : (
        <p>No movie info!</p>
      )}
    </div>
  );
}
