import React from "react";
import { gql, useMutation } from "@apollo/client";

const LIKE_LOCATION = gql`
  mutation AddFavoriteLocationMutation($addFavoriteLocationLocationId: Int!) {
    addFavoriteLocation(locationId: $addFavoriteLocationLocationId) {
      id
    }
  }
`;

const DISLIKE_LOCATION = gql`
  mutation RemoveFavoriteLocationMutation(
    $removeFavoriteLocationLocationId: Int!
  ) {
    removeFavoriteLocation(locationId: $removeFavoriteLocationLocationId) {
      id
    }
  }
`;

const FavoriteLocations = ({ location }) => {
  const [addFavoriteLocation] = useMutation(LIKE_LOCATION);
  const [removeFavoriteLocation] = useMutation(DISLIKE_LOCATION);
  return (
    <div>
      <ul key={location.id}>
        <li>{location.name}</li>
      </ul>
      <div>
        <button
          onClick={() => {
            addFavoriteLocation({
              variables: {
                addFavoriteLocationLocationId: parseInt(location.id),
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
                removeFavoriteLocationLocationId: parseInt(location.id),
              },
            });
          }}
        >
          dislike
        </button>
      </div>
    </div>
  );
};

export default FavoriteLocations;
