import React from "react";
import { Link } from "react-router-dom";
import Layout from "../layout";
import { useGetLocationsQuery } from "../../generated/graphql";

const Location = () => {
  const { loading, error, data } = useGetLocationsQuery();
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
