import React from "react";
import { Link } from "react-router-dom";
import Layout from "../layout";
import { useGetCharactersQuery } from "../../generated/graphql";

const Character = () => {
  const { loading, error, data } = useGetCharactersQuery();

  if (loading) return <p>Loading...</p>;
  if (error) return error;

  return (
    <Layout>
      <div style={{ overflowY: "scroll", height: "90vh" }}>
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
