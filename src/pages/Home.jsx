import React, { useState, useEffect } from 'react';
import { Suspense } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { PopularMovies } from './Home.styled';

const Home = () => {
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YzIyNjUxNjE2N2YyMWVkNWNhZjU1YWZhZWIzMjRhNyIsInN1YiI6IjY0YzE1NzMyMmYxYmUwMDE0ZWY1ZTAzNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XkXav8VFDN__J747SZUUPnB34jW0XTsc1lvFxEQPxIA',
    },
  };

  const location = useLocation();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/trending/movie/day?page=${page}`,
      options
    )
      .then(response => response.json())
      .then(data => {
        setMovies(prevMovies =>
          page === 1 ? [...data.results] : [...prevMovies, ...data.results]
        );
      })
      .catch(err => console.error(err));
  }, [page, options]);

  const loadMoreImages = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <main>
      <PopularMovies>Popular movies right now</PopularMovies>
      <ul>
        {movies.map(movie => {
          return (
            <Link
              to={`/movies/${movie.id}`}
              key={movie.id}
              state={{ from: location }}
            >
              <li>{movie.name ? movie.name : movie.title}</li>
            </Link>
          );
        })}
      </ul>
      <button type="button" onClick={loadMoreImages}>
        Load More
      </button>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default Home;
