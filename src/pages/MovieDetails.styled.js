import { Link } from 'react-router-dom';
import styled from 'styled-components';
export const MovieTitle = styled.h1`
  letter-spacing: 1px;
  margin-left: 15px;
`;
export const MoviePoster = styled.img`
  margin-right: 15px;
`;
export const MovieDesc = styled.p`
  letter-spacing: 1px;
`;

export const FilmInfo = styled.ul`
  margin-top: 50px;
  list-style: none;
  display: flex;
  flex-direction: row;
  margin-botton: 50px;
`;

export const Cast = styled.li``;
export const Reviews = styled.li``;
export const Container = styled.div``;
export const CastLink = styled(Link)`
  margin-right: 15px;

  text-decoration: none;
  font-size: 20px;
  font-weight: 200;
  letter-spacing: 1px;
  padding: 13px 50px 13px;
  outline: 0;
  border: 1px solid black;
  cursor: pointer;
  position: relative;
  background-color: rgba(0, 0, 0, 0);
  &:: after {
    content: '';
    background-color: #dcbaff;
    width: 100%;
    z-index: -1;
    position: absolute;
    height: 100%;
    top: 7px;
    left: 7px;
  }
`;

export const ReviewsLink = styled(Link)`
  text-decoration: none;
  font-size: 20px;
  font-weight: 200;
  letter-spacing: 1px;
  padding: 13px 50px 13px;
  outline: 0;
  border: 1px solid black;
  cursor: pointer;
  position: relative;
  background-color: rgba(0, 0, 0, 0);

  &:: after {
    content: '';
    background-color: #dcbaff;
    width: 100%;
    z-index: -1;
    position: absolute;
    height: 100%;
    top: 7px;
    left: 7px;
  }
`;
export const BackPageLink = styled(Link)`
  text-decoration: none;
`;

export const MovieInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
  border: 1px solid black;
  max-width: 80%;
  margin-left: 15px;
`;
