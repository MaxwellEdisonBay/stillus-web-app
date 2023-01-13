import React from "react";
import { useNavigate } from "react-router-dom";

type HomeViewProps = {
  title: string;
};

const HomeView = (props: HomeViewProps) => {
  const history = useNavigate();
  // return <div style={{fontFamily: "NeutraMedium"}}>Home</div>;
  return (
    <>
    <div style={{"fontSize":"60px"}} className="font-body font-black">Started</div>;
    <div style={{"fontSize":"60px"}} className="">Started</div>;
    </>
  )

};

export default HomeView;
