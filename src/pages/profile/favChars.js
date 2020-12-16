import React from "react";
import { gql, useMutation } from "@apollo/client";
import {
  useAddFavoriteCharacterMutation,
  useRemoveFavoriteCharacterMutation,
} from "../../generated/graphql";

const FavoriteCharacters = ({ character }) => {
  const [addFavoriteCharacter] = useAddFavoriteCharacterMutation();
  const [removeFavoriteCharacter] = useRemoveFavoriteCharacterMutation();
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
