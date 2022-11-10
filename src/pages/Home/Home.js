import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Home = () => {
  const { setTitle } = useContext(AuthContext);

  setTitle("Home");

  return <div></div>;
};

export default Home;
