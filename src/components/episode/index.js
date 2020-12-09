import React from "react";
import { gql, useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import Layout from "../layout";

const EPISODES = gql`
  query GetEpisodes {
    episodes {
      id
      name
    }
  }
`;

const Episode = () => {
  const { loading, error, data } = useQuery(EPISODES);

  if (loading) return <p>Loading...</p>;
  if (error) return error;

  return (
    <Layout>
      <div>
        {data.episodes.map(({ id, name }) => (
          <div key={id}>
            <Link to={`/episode/${id}`}>
              <p>{name}</p>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Episode;
