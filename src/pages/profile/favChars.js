import React from "react";
import { gql, useMutation } from "@apollo/client";

const LIKE_CHARACTER = gql`
  mutation AddFavoriteCharacterMutation(
    $addFavoriteCharacterCharacterId: Int!
  ) {
    addFavoriteCharacter(characterId: $addFavoriteCharacterCharacterId) {
      id
      name
      image
    }
  }
`;

const DISLIKE_CHARACTER = gql`
  mutation RemoveFavoriteCharacterMutation(
    $removeFavoriteCharacterCharacterId: Int!
  ) {
    removeFavoriteCharacter(characterId: $removeFavoriteCharacterCharacterId) {
      id
    }
  }
`;

const FavoriteCharacters = ({ character }) => {
  const [addFavoriteCharacter] = useMutation(LIKE_CHARACTER);
  const [removeFavoriteCharacter] = useMutation(DISLIKE_CHARACTER);
  return (
    <div key={character.id}>
      <figure>
        <img src={character.image} alt={character.name} />
      </figure>
      <p>{character.name}</p>
      <div>
        <button
          onClick={() => {
            addFavoriteCharacter({
              variables: {
                addFavoriteCharacterCharacterId: parseInt(character.id),
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
                removeFavoriteCharacterCharacterId: parseInt(character.id),
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

export default FavoriteCharacters;
