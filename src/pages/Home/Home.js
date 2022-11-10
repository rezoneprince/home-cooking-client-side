import React, { useContext } from "react";
import Slider from "../../components/Home/Slider/Slider";
import State from "../../components/Home/State/State";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Home = () => {
  const { setTitle } = useContext(AuthContext);

  setTitle("Home");

  return (
    <div className="flex flex-col gap-20">
      <Slider />
      <State />
    </div>
  );
};

export default Home;
