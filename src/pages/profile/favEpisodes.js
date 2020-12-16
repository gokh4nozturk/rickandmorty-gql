import React from "react";
import {
  useAddFavoriteEpisodeMutation,
  useRemoveFavoriteEpisodeMutation,
} from "../../generated/graphql";

const FavoriteEpisodes = ({ episode }) => {
  const [addFavoriteEpisode] = useAddFavoriteEpisodeMutation();
  const [removeFavoriteEpisode] = useRemoveFavoriteEpisodeMutation();

  return (
    <div>
      <ul key={episode.id}>
        <li>{episode.name}</li>
      </ul>
      <div>
        <button
          onClick={() => {
            addFavoriteEpisode({
              variables: {
                addFavoriteEpisodeEpisodeId: parseInt(episode.id),
              },
            });
          }}
        >
          like
        </button>
        <button
          onClick={() => {
            removeFavoriteEpisode({
              variables: {
                removeFavoriteEpisodeEpisodeId: parseInt(episode.id),
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

export default FavoriteEpisodes;
