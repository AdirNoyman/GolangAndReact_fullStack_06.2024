import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Movie = () => {
  const [movie, setMovie] = useState({});
  let { id } = useParams();
  console.log('id: ' + id);

  let movies = [
    {
      id: 1,
      title: 'Highlander',
      releaseDate: '07-03-1986',
      runtime: 116,
      mpaa_rating: 'R',
      description: 'lorem ipsum dolor sit amet, consectetur',
    },
    {
      id: 2,
      title: 'Koko Loko 1',
      releaseDate: '07-05-1991',
      runtime: 90,
      mpaa_rating: 'PG-13',
      description: 'lorem ipsum dolor sit amet, consectetur',
    },
    {
      id: 3,
      title: 'Koko Loko 2',
      releaseDate: '10-03-2001',
      runtime: 100,
      mpaa_rating: 'R',
      description: 'lorem ipsum dolor sit amet, consectetur',
    },
    {
      id: 4,
      title: 'Go Go Go',
      releaseDate: '06-05-1987',
      runtime: 105,
      mpaa_rating: 'PG-13',
      description: 'lorem ipsum dolor sit amet, consectetur',
    },
  ];

  useEffect(() => {
    let selectedMovie = movies.find((m) => m.id === Number(id));

    if (selectedMovie) {
      setMovie(selectedMovie);
    } else {
      alert('Movie was not found 🤷‍♂️');
    }
  }, [id]);

  return (
    <div>
      <h2>Movie: {movie.title}</h2>
      <small>
        <em>
          {movie.releaseDate}, {movie.runtime} minutes, Rated{' '}
          {movie.mpaa_rating}{' '}
        </em>
      </small>
      <hr />
      <p>{movie.description}</p>
    </div>
  );
};

export default Movie;
