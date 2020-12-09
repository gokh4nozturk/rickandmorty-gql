import React, { useState } from "react";
import { gql, useMutation } from "@apollo/client";
import Layout from "../components/layout";
import { useHistory } from "react-router";
import { setAccessToken } from "../accessToken";

const LOGIN = gql`
  mutation Login($loginUsername: String!, $loginPassword: String!) {
    login(username: $loginUsername, password: $loginPassword) {
      token
    }
  }
`;

const Login = () => {
  const [login, { loading, error, data }] = useMutation(LOGIN);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { push } = useHistory();

  if (loading) return <p>Loading...</p>;
  if (data) setAccessToken(data.login.token);
  if (error) return `${error}`;

  return (
    <Layout>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          if (username !== "" && password !== "") {
            await login({
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
          push("/profile");
        }}
      >
        <input
          type="text"
          placeholder="severussnipe"
          onChange={(e) => {
            setUsername(e.currentTarget.value);
          }}
        />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => {
            setPassword(e.currentTarget.value);
          }}
        />

        <button type="submit">Login</button>
      </form>
    </Layout>
  );
};

export default Login;
