import React, { useState } from "react";
import { gql, useMutation } from "@apollo/client";
import Layout from "../components/layout";
import { useHistory } from "react-router";
import { setAccessToken } from "../accessToken";
import { Button, MyForm, MyLabel, TextBox, Wrapper } from "./styles";

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
      console.log("Fill field.");
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
        console.log("yey");
      }
    } catch {
      console.log("Try again!");
    }
  };

  if (loading) return <p>Loading...</p>;

  if (error) return `${error}`;

  return (
    <Layout>
      <Wrapper>
        <MyForm onSubmit={onSubmit}>
          <MyLabel htmlFor="username">Username</MyLabel>
          <TextBox
            id="username"
            type="text"
            placeholder="severus_snipe"
            onChange={(e) => {
              setUsername(e.currentTarget.value);
            }}
          />
          <MyLabel htmlFor="password">Password</MyLabel>
          <TextBox
            id="password"
            type="password"
            placeholder="password"
            onChange={(e) => {
              setPassword(e.currentTarget.value);
            }}
          />

          <Button type="submit">Login</Button>
        </MyForm>
      </Wrapper>
    </Layout>
  );
};

export default Login;
