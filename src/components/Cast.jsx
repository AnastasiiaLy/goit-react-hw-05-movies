import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import defaultImage from './images/defaultImage.jpg';

import {
  CastSection,
  CastContainer,
  CastInfo,
  CastName,
  CastCharacter,
  CastInfoContainer,
  CastImage,
} from './Cast.styled';

export const Cast = () => {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState([]);

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YzIyNjUxNjE2N2YyMWVkNWNhZjU1YWZhZWIzMjRhNyIsInN1YiI6IjY0YzE1NzMyMmYxYmUwMDE0ZWY1ZTAzNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XkXav8VFDN__J747SZUUPnB34jW0XTsc1lvFxEQPxIA',
      },
    };

    fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits`, options)
      .then(response => {
        if (!response.ok) {
          throw new Error(
            'Something went wrong while fetching movie cast data.'
          );
        }
        return response.json();
      })
      .then(data => {
        setMovieCast(data.cast);
      })
      .catch(err => {
        console.error(err);
      });
  }, [movieId]);

  return (
    <CastSection>
      {movieCast.map(cast => (
        <CastContainer key={cast.cast_id}>
          {cast.profile_path ? (
            <CastImage
              src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
              alt={cast.original_name}
              width={200}
            />
          ) : (
            <img
              src={defaultImage}
              alt={cast.original_name}
              width={200}
              height={300}
            />
          )}
          <CastInfoContainer>
            <CastInfo>
              <CastName>Name: {cast.original_name}</CastName>
              <CastCharacter>Character: {cast.character}</CastCharacter>
            </CastInfo>
          </CastInfoContainer>
        </CastContainer>
      ))}
    </CastSection>
  );
};

export default Cast;
