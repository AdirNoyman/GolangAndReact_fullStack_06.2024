import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    let moviesList = [
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

    setMovies(moviesList);
  }, []);

  return (
    <div>
      <h2>Movies</h2>
      <hr />
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Movie</th>
            <th>Release Date</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => {
            return (
              <tr key={movie.id}>
                <td>
                  <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
                </td>
                <td>{movie.releaseDate}</td>
                <td>{movie.mpaa_rating}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Movies;
