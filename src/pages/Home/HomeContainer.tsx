import React from "react";
import { Navbar } from "../../components";
import HomeView from "./HomeView";

export const HomeContainer = () => {
  return (
    <>
      <Navbar />
      <HomeView title="test" />
    </>
  );
};
