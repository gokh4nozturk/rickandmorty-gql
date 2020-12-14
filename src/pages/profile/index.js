import React from "react";
import { gql, useQuery } from "@apollo/client";
import Layout from "../../components/layout";
import FavoriteCharacters from "./favChars";
import FavoriteEpisodes from "./favEpisodes";
import FavoriteLocations from "./favLocations";

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

const Profile = () => {
  const { error, loading, data } = useQuery(PROFILE_QUERY, {
    fetchPolicy: "network-only",
  });

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
              {data.currentUser.favoriteCharacters.map((character) => {
                return <FavoriteCharacters character={character} />;
              })}
            </div>
          </div>
          <div>
            <h3>Favorite Episodes</h3>
            <div>
              {data.currentUser.favoriteEpisodes.map((episode) => {
                return <FavoriteEpisodes episode={episode} />;
              })}
            </div>
          </div>

          <div>
            <h3>Favorite Locations</h3>
            <div>
              {data.currentUser.favoriteLocations.map((location) => {
                return <FavoriteLocations location={location} />;
              })}
            </div>
          </div>
        </div>
      </Layout>
    );
  }
};

export default Profile;
