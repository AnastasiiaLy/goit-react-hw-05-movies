import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { ReviewItem, Author, Comment, ReviewSection } from './Reviews.styled';
export const Reviews = () => {
  const { movieId } = useParams();

  const [movieReview, setMovieReview] = useState([]);

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YzIyNjUxNjE2N2YyMWVkNWNhZjU1YWZhZWIzMjRhNyIsInN1YiI6IjY0YzE1NzMyMmYxYmUwMDE0ZWY1ZTAzNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XkXav8VFDN__J747SZUUPnB34jW0XTsc1lvFxEQPxIA',
      },
    };

    fetch(`https://api.themoviedb.org/3/movie/${movieId}/reviews`, options)
      .then(response => {
        if (!response.ok) {
          throw new Error(
            'Something went wrong while fetching movie cast data.'
          );
        }
        return response.json();
      })
      .then(data => {
        setMovieReview(data.results);
      })
      .catch(err => {
        console.error(err);
      });
  }, [movieId]);
  return (
    <ReviewSection>
      {movieReview.length === 0 ? (
        <p>No review left</p>
      ) : (
        movieReview.map(review => (
          <ReviewItem key={review.id}>
            <Author>{review.author}</Author>
            <Comment>{review.content}</Comment>
          </ReviewItem>
        ))
      )}
    </ReviewSection>
  );
};

export default Reviews;
