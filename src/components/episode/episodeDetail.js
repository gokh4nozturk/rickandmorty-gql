import React from "react";
import { useParams } from "react-router";
import Layout from "../layout";
import {
  useGetEpisodeQuery,
  useAddFavoriteEpisodeMutation,
  useRemoveFavoriteEpisodeMutation,
} from "../../generated/graphql";

const EpisodeDetail = () => {
  const { id } = useParams();
  const { loading, error, data } = useGetEpisodeQuery({
    variables: {
      episodeWhere: { id: Number(id) },
    },
  });
  const [addFavoriteEpisode] = useAddFavoriteEpisodeMutation();
  const [removeFavoriteEpisode] = useRemoveFavoriteEpisodeMutation();

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
