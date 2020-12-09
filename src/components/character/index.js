import React from "react";
import { gql, useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import Layout from "../layout";

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
  if (error) return error;

  return (
    <Layout>
      <div>
        {data.characters.map(({ id, name }) => (
          <div key={id}>
            <Link to={`/character/${id}`}>
              <p>{name}</p>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Character;
