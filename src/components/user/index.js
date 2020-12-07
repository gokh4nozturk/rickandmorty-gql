import React, { useState } from "react";
import { gql, useMutation } from "@apollo/client";

const REGISTER = gql`
  mutation Register($registerUsername: String!, $registerPassword: String!) {
    register(username: $registerUsername, password: $registerPassword) {
      token
    }
  }
`;
const LOGIN = gql`
  mutation Login($loginUsername: String!, $loginPassword: String!) {
    login(username: $loginUsername, password: $loginPassword) {
      token
    }
  }
`;

const User = () => {
  const [register] = useMutation(REGISTER);
  const [login, { loading, error, data }] = useMutation(LOGIN);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [accessToken, setAccessToken] = useState("");

  if (loading) return <p>Loading...</p>;
  if (data) {
    setAccessToken(data);
  }
  if (error) return `${error}`;

  console.log(accessToken);

  return (
    <div>
      <div>
        <input
          placeholder="Severus Snipe"
          onChange={(e) => {
            setUsername(e.currentTarget.value);
          }}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.currentTarget.value);
          }}
        />
      </div>
      <div>
        <button
          onClick={() => {
            if (username !== "" && password !== "") {
              login({
                variables: {
                  loginUsername: username,
                  loginPassword: password,
                },
              });
            } else {
              console.log("düzgün iş yap");
            }
            setUsername("");
            setPassword("");
          }}
        >
          Login
        </button>
        <button
          onClick={() => {
            if (username !== "" && password !== "") {
              register({
                variables: {
                  registerUsername: username,
                  registerPassword: password,
                },
              });
            } else {
              console.log("düzgün iş yap");
            }
            setUsername("");
            setPassword("");
          }}
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default User;
