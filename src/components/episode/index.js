import React from "react";
import { Link } from "react-router-dom";
import Layout from "../layout";
import { useGetEpisodesQuery } from "../../generated/graphql";

const Episode = () => {
  const { loading, error, data } = useGetEpisodesQuery();

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
