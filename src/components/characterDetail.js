import React from "react";
import { useParams } from "react-router";
import { gql, useQuery } from "@apollo/client";

const CHARACTER = gql`
  query GetCharacter($id: ID!) {
    character(id: $id) {
      id
      name
      image
    }
  }
`;

const Character = () => {
  const { id } = useParams();

  const { loading, error, data } = useQuery(CHARACTER, {
    variables: { id: id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :( </p>;

  return (
    <div key={data.character.id}>
      <figure>
        <img src={data.character.image} alt={data.character.name} />
      </figure>
      <h1>{data.character.name}</h1>
    </div>
  );
};

export default Character;
