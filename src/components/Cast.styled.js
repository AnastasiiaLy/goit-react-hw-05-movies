import styled from 'styled-components';

export const CastSection = styled.section`
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 20px;
  align-items: stretch;
`;
export const CastContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.3);
`;
export const CastInfo = styled.ul`
  list-style: none;
`;
export const CastName = styled.li``;
export const CastCharacter = styled.li``;

export const CastInfoContainer = styled.div`
  padding: 0 20px 20px;
`;
export const CastImage = styled.img`
  display: block;
  margin: 5px auto;
`;
