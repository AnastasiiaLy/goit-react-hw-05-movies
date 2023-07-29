import React, { useState, useEffect, useRef } from 'react';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import {
  MoviePoster,
  MovieDesc,
  FilmInfo,
  Reviews,
  Container,
  Cast,
  CastLink,
  ReviewsLink,
  BackPageLink,
  MovieTitle,
  MovieInfoContainer,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from || '/movies');

  const [movieData, setMovieData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YzIyNjUxNjE2N2YyMWVkNWNhZjU1YWZhZWIzMjRhNyIsInN1YiI6IjY0YzE1NzMyMmYxYmUwMDE0ZWY1ZTAzNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XkXav8VFDN__J747SZUUPnB34jW0XTsc1lvFxEQPxIA',
      },
    };
    fetch(`https://api.themoviedb.org/3/movie/${movieId}`, options)
      .then(response => {
        if (!response.ok) {
          throw new Error('Something went wrong while fetching movie data.');
        }
        return response.json();
      })
      .then(data => {
        setMovieData(data);
        setError(null);
      })
      .catch(err => {
        setError(err.message);
      });
  }, [movieId]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <main>
      {movieData && (
        <Container>
          <BackPageLink to={backLinkLocationRef.current}>
            Back To The Previous Page
          </BackPageLink>
          <MovieTitle>{movieData.title}</MovieTitle>

          <MovieInfoContainer>
            {movieData.poster_path && (
              <MoviePoster
                src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`}
                alt={movieData.title}
                width={250}
              />
            )}
            <MovieDesc>{movieData.overview}</MovieDesc>
          </MovieInfoContainer>
          <FilmInfo>
            <Cast>
              <CastLink to="cast">Cast</CastLink>
            </Cast>
            <Reviews>
              <ReviewsLink to="reviews">Reviews</ReviewsLink>
            </Reviews>
          </FilmInfo>
          <Outlet />
        </Container>
      )}
    </main>
  );
};

export default MovieDetails;
