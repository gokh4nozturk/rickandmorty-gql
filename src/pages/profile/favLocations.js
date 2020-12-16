import React from "react";
import {
  useAddFavoriteLocationMutation,
  useRemoveFavoriteLocationMutation,
} from "../../generated/graphql";

const FavoriteLocations = ({ location }) => {
  const [addFavoriteLocation] = useAddFavoriteLocationMutation();
  const [removeFavoriteLocation] = useRemoveFavoriteLocationMutation();
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
