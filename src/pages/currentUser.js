import { gql, useQuery } from "@apollo/client";

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
      <div>
        <p>{data.currentUser.username}</p>

        <h3>Favorite Characters</h3>
        {data.currentUser.favoriteCharacters.map((item) => {
          return (
            <div key={item.id}>
              <figure>
                <img src={item.image} alt={item.name} />
              </figure>
              <p>{item.name}</p>
            </div>
          );
        })}

        <h3>Favorite Episodes</h3>
        {data.currentUser.favoriteEpisodes.map((item) => {
          return (
            <div key={item.id}>
              <p>{item.name}</p>
            </div>
          );
        })}

        <h3>Favorite Locations</h3>
        {data.currentUser.favoriteLocations.map((item) => {
          return (
            <div key={item.id}>
              <p>{item.name}</p>
            </div>
          );
        })}
      </div>
    );
  }
};

export default Profile;
