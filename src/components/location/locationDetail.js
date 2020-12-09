import { gql, useMutation, useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "react-router";
import Layout from "../layout";

const LOCATION = gql`
  query GetLocation($locationWhere: LocationWhereUniqueInput!) {
    location(where: $locationWhere) {
      id
      name
    }
  }
`;

const LIKE_LOCATION = gql`
  mutation AddFavoriteLocationMutation($addFavoriteLocationLocationId: Int!) {
    addFavoriteLocation(locationId: $addFavoriteLocationLocationId) {
      id
    }
  }
`;

const UNLIKE_LOCATION = gql`
  mutation RemoveFavoriteLocationMutation(
    $removeFavoriteLocationLocationId: Int!
  ) {
    removeFavoriteLocation(locationId: $removeFavoriteLocationLocationId) {
      id
    }
  }
`;

const LocationDetail = () => {
  const { id } = useParams();
  const { error, loading, data } = useQuery(LOCATION, {
    variables: { locationWhere: { id: Number(id) } },
  });
  const [addFavoriteLocation] = useMutation(LIKE_LOCATION);
  const [removeFavoriteLocation] = useMutation(UNLIKE_LOCATION);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return error;
  }

  return (
    <Layout>
      <div key={data.location.id}>
        <div>
          <p>{data.location.name}</p>
          <div>
            <button
              onClick={() => {
                addFavoriteLocation({
                  variables: {
                    addFavoriteLocationLocationId: parseInt(data.location.id),
                  },
                });
              }}
            >
              like
            </button>
            <button
              onClick={() => {
                removeFavoriteLocation({
                  variables: {
                    removeFavoriteLocationLocationId: parseInt(
                      data.location.id,
                    ),
                  },
                });
              }}
            >
              unlike
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LocationDetail;
