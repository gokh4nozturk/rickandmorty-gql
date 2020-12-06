import React from "react";
import { gql, useQuery } from "@apollo/client";
import { Link } from "react-router-dom";

const CHARACTERS = gql`
  query GetCharacters {
    characters {
      id
      name
    }
  }
`;

const Character = () => {
  const { loading, error, data } = useQuery(CHARACTERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      {data.characters.map(({ id, name }) => (
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
