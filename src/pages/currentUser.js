import { gql, useMutation, useQuery } from "@apollo/client";
import Layout from "../components/layout";

const PROFILE_QUERY = gql`
  query CurrentUserForLayout {
    currentUser {
      username
      favoriteCharacters {
        id
        name
        image
      }
      favoriteEpisodes {
        id
        name
      }
      favoriteLocations {
        id
        name
      }
    }
  }
`;

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

const UNLIKE_CHARACTER = gql`
  mutation RemoveFavoriteCharacterMutation(
    $removeFavoriteCharacterCharacterId: Int!
  ) {
    removeFavoriteCharacter(characterId: $removeFavoriteCharacterCharacterId) {
      id
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

const LIKE_LOCATION = gql`
  mutation AddFavoriteLocationMutation($addFavoriteLocationLocationId: Int!) {
    addFavoriteLocation(locationId: $addFavoriteLocationLocationId) {
      id
    }
  }
`;

const UNLIKE_LOCATION = gql`
  mutation RemoveFavoriteLocationMutation(
    $removeFavoriteLocationLocationId: Int!
  ) {
    removeFavoriteLocation(locationId: $removeFavoriteLocationLocationId) {
      id
    }
  }
`;

const Profile = () => {
  const { error, loading, data } = useQuery(PROFILE_QUERY, {
    fetchPolicy: "network-only",
  });
  const [addFavoriteCharacter] = useMutation(LIKE_CHARACTER);
  const [removeFavoriteCharacter] = useMutation(UNLIKE_CHARACTER);
  const [addFavoriteEpisode] = useMutation(LIKE_EPISODE);
  const [removeFavoriteEpisode] = useMutation(UNLIKE_EPISODE);
  const [addFavoriteLocation] = useMutation(LIKE_LOCATION);
  const [removeFavoriteLocation] = useMutation(UNLIKE_LOCATION);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) return error;

  if (data) {
    return (
      <Layout>
        <div>
          <div>
            <p>User: {data.currentUser.username}</p>

            <h3>Favorite Characters</h3>
            <div style={{ display: "flex" }}>
              {data.currentUser.favoriteCharacters.map((item) => {
                return (
                  <div key={item.id}>
                    <figure>
                      <img src={item.image} alt={item.name} />
                    </figure>
                    <p>{item.name}</p>
                    <div>
                      <button
                        onClick={() => {
                          addFavoriteCharacter({
                            variables: {
                              addFavoriteCharacterCharacterId: parseInt(
                                item.id,
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
                                item.id,
                              ),
                            },
                          });
                        }}
                      >
                        dislike
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <h3>Favorite Episodes</h3>
            <div>
              {data.currentUser.favoriteEpisodes.map((item) => {
                return (
                  <div>
                    <ul key={item.id}>
                      <li>{item.name}</li>
                    </ul>
                    <div>
                      <button
                        onClick={() => {
                          addFavoriteEpisode({
                            variables: {
                              addFavoriteEpisodeEpisodeId: parseInt(item.id),
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
                              removeFavoriteEpisodeEpisodeId: parseInt(item.id),
                            },
                          });
                        }}
                      >
                        unlike
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <h3>Favorite Locations</h3>
            <div>
              {data.currentUser.favoriteLocations.map((item) => {
                return (
                  <div>
                    <ul key={item.id}>
                      <li>{item.name}</li>
                    </ul>
                    <div>
                      <button
                        onClick={() => {
                          addFavoriteLocation({
                            variables: {
                              addFavoriteLocationLocationId: parseInt(item.id),
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
                              removeFavoriteLocationLocationId: parseInt(
                                item.id,
                              ),
                            },
                          });
                        }}
                      >
                        unlike
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Layout>
    );
  }
};

export default Profile;
