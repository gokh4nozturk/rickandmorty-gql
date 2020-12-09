import { gql, useQuery } from "@apollo/client";
import React from "react";
import { Link } from "react-router-dom";
import Layout from "../layout";

const LOCATIONS = gql`
  query GetLocations {
    locations {
      id
      name
    }
  }
`;

const Location = () => {
  const { loading, error, data } = useQuery(LOCATIONS);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return error;
  }

  return (
    <Layout>
      <div>
        {data.locations.map((location) => {
          return (
            <Link to={`/location/${location.id}`}>
              <p>{location.name}</p>
            </Link>
          );
        })}
      </div>
    </Layout>
  );
};

export default Location;
