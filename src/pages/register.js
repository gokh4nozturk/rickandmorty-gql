import React, { useState } from "react";
import { gql, useMutation } from "@apollo/client";
import Layout from "../components/layout";
import { useHistory } from "react-router";
import { Button, MyForm, MyLabel, TextBox, Wrapper } from "./styles";

const REGISTER = gql`
  mutation Register($registerUsername: String!, $registerPassword: String!) {
    register(username: $registerUsername, password: $registerPassword) {
      token
    }
  }
`;

const Register = () => {
  const [register, { loading, error, data }] = useMutation(REGISTER);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { push } = useHistory();

  if (loading) return <p>Loading...</p>;

  if (error) return `${error}`;

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!username || !password) {
      console.log("Fill field.");
    }
    try {
      const response = await register({
        variables: {
          registerUsername: username,
          registerPassword: password,
        },
      });
      if (response.data.token) {
        push("/login");
      }
    } catch {
      console.log("Try again!");
    }
  };
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
          <Button type="submit">Register</Button>
        </MyForm>
      </Wrapper>
    </Layout>
  );
};

export default Register;
