import React from "react";
import { useParams } from "react-router";
import Layout from "../layout";
import {
  useGetLocationQuery,
  useAddFavoriteLocationMutation,
  useRemoveFavoriteLocationMutation,
} from "../../generated/graphql";

const LocationDetail = () => {
  const { id } = useParams();
  const { error, loading, data } = useGetLocationQuery({
    variables: { locationWhere: { id: Number(id) } },
  });
  const [addFavoriteLocation] = useAddFavoriteLocationMutation();
  const [removeFavoriteLocation] = useRemoveFavoriteLocationMutation();

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
