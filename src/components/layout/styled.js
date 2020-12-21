import styled from "styled-components";

export const Navigation = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  height: 100px;
  align-items: center;

  .nav-links {
    text-decoration: none;
    color: #6246ea;
    font-size: 18px;
    font-weight: 500;
    &:hover {
      color: #ef4565;
    }
  }

  .home-link {
    grid-column: 1/2;
    display: inline-flex;
    justify-content: flex-start;
  }

  .data-links {
    grid-column: 2/3;
    display: inline-flex;
    justify-content: center;
  }

  .user-links {
    grid-column: 3/4;
    display: inline-flex;
    justify-content: flex-end;
  }
`;

export const Wrapper = styled.div`
  margin: 0 5%;
  a {
    padding: 0 5px;
  }
  main {
    width: 100%;
  }
`;
