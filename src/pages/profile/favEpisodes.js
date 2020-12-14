import React from "react";
import { gql, useMutation } from "@apollo/client";

const LIKE_EPISODE = gql`
  mutation AddFavoriteEpisodeMutation($addFavoriteEpisodeEpisodeId: Int!) {
    addFavoriteEpisode(episodeId: $addFavoriteEpisodeEpisodeId) {
      id
    }
  }
`;

const DISLIKE_EPISODE = gql`
  mutation RemoveFavoriteEpisodeMutation(
    $removeFavoriteEpisodeEpisodeId: Int!
  ) {
    removeFavoriteEpisode(episodeId: $removeFavoriteEpisodeEpisodeId) {
      id
    }
  }
`;

const FavoriteEpisodes = ({ episode }) => {
  const [addFavoriteEpisode] = useMutation(LIKE_EPISODE);
  const [removeFavoriteEpisode] = useMutation(DISLIKE_EPISODE);
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
