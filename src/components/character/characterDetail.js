import React from "react";
import { useParams } from "react-router";
import Layout from "../layout";
import {
  useGetCharacterQuery,
  useAddFavoriteCharacterMutation,
  useRemoveFavoriteCharacterMutation,
} from "../../generated/graphql";

const CharacterDetail = () => {
  const { id } = useParams();
  const { loading, error, data } = useGetCharacterQuery({
    variables: {
      characterWhere: { id: Number(id) },
    },
  });
  const [addFavoriteCharacter] = useAddFavoriteCharacterMutation();
  const [removeFavoriteCharacter] = useRemoveFavoriteCharacterMutation();

  if (loading) return <p>Loading...</p>;
  if (error) return `${error}`;
  return (
    <Layout>
      <div key={data.character.id}>
        <div>
          <figure>
            <img src={data.character.image} alt={data.character.name} />
          </figure>
          <h1>{data.character.name}</h1>
          <div>
            <button
              onClick={() => {
                addFavoriteCharacter({
                  variables: {
                    addFavoriteCharacterCharacterId: parseInt(
                      data.character.id,
                    ),
                  },
                });
              }}
            >
              like
            </button>
            <button
              onClick={() => {
                removeFavoriteCharacter({
                  variables: {
                    removeFavoriteCharacterCharacterId: parseInt(
                      data.character.id,
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

export default CharacterDetail;
