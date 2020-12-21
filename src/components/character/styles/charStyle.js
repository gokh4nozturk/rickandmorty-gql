import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));

  .char-link {
    text-decoration: none;
  }
`;

export const Card = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;
  grid-gap: 1rem;
  background-color: #d1d1e9;

  border-radius: 0.8em;
`;

export const PartOne = styled.div`
  grid-column: 1/2;
  width: 100%;

  img {
    width: 100%;
    height: 100%;
    border-radius: 0.8em 0 0 0.8em;
  }
`;
export const PartTwo = styled.div`
  grid-column: 2/3;
  width: 90%;
  color: #2b2c34;
`;
