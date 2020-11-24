import React from "react";
import { gql, useQuery } from "@apollo/client";
import { Link } from "react-router-dom";

const CHARACTERS = gql`
  query GetCharacters($page: Int!) {
    characters(page: $page) {
      results {
        id
        name
      }
    }
  }
`;

const Character = ({ page }) => {
  const { loading, error, data } = useQuery(CHARACTERS, {
    variables: { page: page },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      {data.characters.results.map(({ id, name }) => (
        <div key={id}>
          <Link to={`/character/${id}`}>
            <p>{name}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Character;
