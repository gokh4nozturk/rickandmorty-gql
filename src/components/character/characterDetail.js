import React from "react";
import { useParams } from "react-router";
import { gql, useMutation, useQuery } from "@apollo/client";
import Layout from "../layout";

const CHARACTER = gql`
  query GetCharacter($characterWhere: CharacterWhereUniqueInput!) {
    character(where: $characterWhere) {
      id
      name
      image
    }
  }
`;

const LIKE_CHARACTER = gql`
  mutation AddFavoriteCharacterMutation(
    $addFavoriteCharacterCharacterId: Int!
  ) {
    addFavoriteCharacter(characterId: $addFavoriteCharacterCharacterId) {
      id
    }
  }
`;

const UNLIKE_CHARACTER = gql`
  mutation RemoveFavoriteCharacterMutation(
    $removeFavoriteCharacterCharacterId: Int!
  ) {
    removeFavoriteCharacter(characterId: $removeFavoriteCharacterCharacterId) {
      id
    }
  }
`;

const CharacterDetail = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(CHARACTER, {
    variables: {
      characterWhere: { id: Number(id) },
    },
  });
  const [addFavoriteCharacter] = useMutation(LIKE_CHARACTER);
  const [removeFavoriteCharacter] = useMutation(UNLIKE_CHARACTER);

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
