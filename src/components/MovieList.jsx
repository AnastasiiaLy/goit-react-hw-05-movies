import { Link, useLocation } from 'react-router-dom';
import defaultImage from './images/defaultImage.jpg';

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <div>
      {movies.map(movie => (
        <div key={movie.id}>
          <Link to={`${movie.id}`} state={{ from: location }}>
            {movie.poster_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                width={250}
              />
            ) : (
              <img src={defaultImage} alt={movie.title} width={250} />
            )}
            <p>{movie.title}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
