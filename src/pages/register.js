import React, { useState } from "react";
import { gql, useMutation } from "@apollo/client";
import Layout from "../components/layout/layout";
import { useHistory } from "react-router";

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
            const response = await register({
              variables: {
                registerUsername: username,
                registerPassword: password,
              },
            });
            console.log(response);
          } else {
            console.log("düzgün iş yap");
          }
          setUsername("");
          setPassword("");
          push("/login");
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
        <button type="submit">Register</button>
      </form>
    </Layout>
  );
};

export default Register;
