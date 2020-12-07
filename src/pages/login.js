import React, { useState } from "react";
import { gql, useMutation } from "@apollo/client";
import Layout from "../components/layout/layout";
import { useHistory } from "react-router";

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
  const [accessToken, setAccessToken] = useState("");
  const { push } = useHistory();

  if (loading) return <p>Loading...</p>;
  if (data) {
    setAccessToken(data);
  }
  if (error) return `${error}`;

  console.log(accessToken);

  return (
    <Layout>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          if (username !== "" && password !== "") {
            const response = await login({
              variables: {
                loginUsername: username,
                loginPassword: password,
              },
            });
            console.log(response);
          } else {
            console.log("düzgün iş yap");
          }
          setUsername("");
          setPassword("");
          push("/");
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
