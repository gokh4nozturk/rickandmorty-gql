import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/layout";

const Home = () => {
  return (
    <Layout>
      <Link to="/characters">Characters</Link>
      <Link to="/episodes">Episodes</Link>
      <Link to="/locations">Locations</Link>
    </Layout>
  );
};

export default Home;
