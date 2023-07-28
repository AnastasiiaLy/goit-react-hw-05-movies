import SearchBox from '../components/SearchBar';
import { useSearchParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import MovieList from '../components/MovieList';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('name') ?? '';

  const updateQueryString = name => {
    const nextParams = name !== '' ? { ...searchParams, name } : {};
    setSearchParams(nextParams);
  };

  useEffect(() => {
    const fetchMovies = () => {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YzIyNjUxNjE2N2YyMWVkNWNhZjU1YWZhZWIzMjRhNyIsInN1YiI6IjY0YzE1NzMyMmYxYmUwMDE0ZWY1ZTAzNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XkXav8VFDN__J747SZUUPnB34jW0XTsc1lvFxEQPxIA',
        },
      };
      fetch(
        `https://api.themoviedb.org/3/search/movie?query=${movieName}`,
        options
      )
        .then(response => response.json())
        .then(data => {
          setMovies(data.results);
        })
        .catch(err => console.error(err));
    };

    fetchMovies();
  }, [movieName]);

  return (
    <main>
      <SearchBox onSubmit={updateQueryString} />
      <MovieList movies={movies} />
    </main>
  );
};

export default Movies;
