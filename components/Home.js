import { useState } from "react";
import ArmorDisplay from "./ArmorDisplay.js";
import WeaponDisplay from "./WeaponDisplay.js";

export default Home = () => {
  const [currentView, setCurrentView] = useState("armor");
  const view = {
    weapons: <WeaponDisplay />,
    armor: <ArmorDisplay />,
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
      <div className="inventory">
        <div>
          <button>Weapon</button>
          <button>Armor</button>
        </div>
        {view[currentView]}
      </div>
    </>
  );
};
