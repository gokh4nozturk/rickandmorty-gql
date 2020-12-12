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

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!username || !password) {
      console.log("Doldur sunlari");
    }
    try {
      const loginResponse = await login({
        variables: {
          loginUsername: username,
          loginPassword: password,
        },
      });
      if (loginResponse.data?.token) {
        setAccessToken(data.login.token);
        push("/profile");
      }
    } catch {
      console.log("sifre felan yanlis");
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <Layout>
      <form onSubmit={onSubmit}>
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
