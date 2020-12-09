import React from "react";
import { useParams } from "react-router";
import { gql, useMutation, useQuery } from "@apollo/client";
import Layout from "../layout";

const EPISODE = gql`
  query GetEpisode($episodeWhere: EpisodeWhereUniqueInput!) {
    episode(where: $episodeWhere) {
      id
      name
    }
  }
`;

const LIKE_EPISODE = gql`
  mutation AddFavoriteEpisodeMutation($addFavoriteEpisodeEpisodeId: Int!) {
    addFavoriteEpisode(episodeId: $addFavoriteEpisodeEpisodeId) {
      id
    }
  }
`;

const UNLIKE_EPISODE = gql`
  mutation RemoveFavoriteEpisodeMutation(
    $removeFavoriteEpisodeEpisodeId: Int!
  ) {
    removeFavoriteEpisode(episodeId: $removeFavoriteEpisodeEpisodeId) {
      id
    }
  }
`;

const EpisodeDetail = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(EPISODE, {
    variables: {
      episodeWhere: { id: Number(id) },
    },
  });
  const [addFavoriteEpisode] = useMutation(LIKE_EPISODE);
  const [removeFavoriteEpisode] = useMutation(UNLIKE_EPISODE);

  if (loading) return <p>Loading...</p>;
  if (error) return `${error}`;
  return (
    <Layout>
      <div key={data.episode.id}>
        <div>
          <h1>{data.episode.name}</h1>
          <div>
            <button
              onClick={() => {
                addFavoriteEpisode({
                  variables: {
                    addFavoriteEpisodeEpisodeId: parseInt(data.episode.id),
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
                    removeFavoriteEpisodeEpisodeId: parseInt(data.episode.id),
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

export default EpisodeDetail;
