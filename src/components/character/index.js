import React from "react";
import { Link } from "react-router-dom";
import Layout from "../layout";
import { useGetCharactersQuery } from "../../generated/graphql";

import { Card, PartOne, PartTwo, Wrapper } from "./styles/charStyle";

const Character = () => {
  const { loading, error, data } = useGetCharactersQuery();

  if (loading) return <p>Loading...</p>;
  if (error) return error;

  return (
    <Layout>
      <Wrapper>
        {data.characters.map(({ id, name, image, status, species }) => (
          <Link className="char-link" to={`/character/${id}`}>
            <Card key={id}>
              <PartOne>
                <img src={image} alt={name} />
              </PartOne>
              <PartTwo>
                <h5>{name}</h5>
                <p>{status}</p>
                <p>{species}</p>
              </PartTwo>
            </Card>
          </Link>
        ))}
      </Wrapper>
    </Layout>
  );
};

export default Character;
