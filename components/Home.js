import { useState } from "react";
import WeaponDisplay from "./WeaponDisplay.js";

export default Home = () => {
  const [currentView, setCurrentView] = useState("weapons");
  const view = {
    weapons: <WeaponDisplay />,
  };
  return (
    <>
      <div className="head">
        ao
        <div className="navbar">Home</div>
      </div>
      <div className="main">
        <div className="board">board</div>
        <div className="side">side</div>
      </div>
      {view[currentView]}
    </>
  );
};
