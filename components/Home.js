import { useState, useEffect } from "react";
import ArmorDisplay from "./ArmorDisplay.js";
import WeaponDisplay from "./WeaponDisplay.js";

export default Home = () => {
  const [currentView, setCurrentView] = useState(null);
  const [characterPosition, setCharacterPosition] = useState({ x: 1, y: 1 });
  const [currentCharacter, setCurrentCharacter] = useState({
    currhp: 38,
    maxhp: 50,
  });
  const [currentRoom, setCurrentRoom] = useState({
    id: 1,
    width: 5,
    length: 5,
    connectedRooms: [2, 3],
  });
  const view = {
    weapons: <WeaponDisplay closeOverlay={setCurrentView} />,
    armor: <ArmorDisplay closeOverlay={setCurrentView} />,
  };

  const keyBoardUse = (event) => {
    //useEffect(() => {
    let temp = { ...characterPosition, y: characterPosition.y + 1 };

    setCharacterPosition(temp);
    if (event.key === "ArrowLeft") {
      let temp = { ...characterPosition, y: characterPosition.y - 1 };
      setCharacterPosition(temp);
    } else if (event.key === "ArrowRight") {
      let temp = { ...characterPosition, y: characterPosition.y + 1 };
      setCharacterPosition(temp);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
    //}, [keyBoardUse]);
  };
  window.addEventListener("keydown", keyBoardUse);
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
          <p>
            width:{currentRoom.width} length:{currentRoom.length}
          </p>
          <p>{currentRoom.connectedRooms}</p>
        </div>
        {view[currentView]}
      </div>
      <div className="inventory">
        <div className="inventoryNav">
          HP:{" "}
          <progress
            value={currentCharacter.currhp}
            max={currentCharacter.maxhp}
          ></progress>
          <div class="armorClass"></div>
          <button onClick={() => setCurrentView("weapons")}>Weapon</button>
          <button onClick={() => setCurrentView("armor")}>Armor</button>
        </div>
      </div>
    </>
  );
};
