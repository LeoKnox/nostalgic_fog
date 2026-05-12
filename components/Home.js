import { useState } from "react";
import ArmorDisplay from "./ArmorDisplay.js";
import WeaponDisplay from "./WeaponDisplay.js";

export default Home = () => {
  const [currentView, setCurrentView] = useState(null);
  const [characterPosition, setCharacterPosition] = useState({ x: 1, y: 1 });
  const view = {
    weapons: <WeaponDisplay closeOverlay={setCurrentView} />,
    armor: <ArmorDisplay closeOverlay={setCurrentView} />,
  };

  const keyBoardUse = () => {
    temp = { ...characterPosition, y: characterPosition.y + 1 };
    setCharacterPosition(temp);
    if (event.key === "ArrowLeft") {
      temp = { ...characterPosition, y: y + 1 };
      setCharacterPosition(temp);
    } else if (event.key === "ArrowRight") {
      onRight();
    }
  };
  return (
    <>
      <div className="head">
        ao
        <div className="navbar">Home</div>
      </div>
      <div className="main">
        <div className="board">
          <p>board</p>
          <p>
            X:{characterPosition.x} Y:{characterPosition.y}
          </p>
        </div>
        {view[currentView]}
      </div>
      <div className="inventory">
        <div className="inventoryNav">
          <button onClick={() => setCurrentView("weapons")}>Weapon</button>
          <button onClick={() => setCurrentView("armor")}>Armor</button>
          <button onClick={() => keyBoardUse()}>move</button>
        </div>
      </div>
    </>
  );
};
