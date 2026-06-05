export default Room = (width = 5, length = 5, height = 3) => {
  const style = {
    viewport: {
      border: "3px solid darkgreen",
      backgroundColor: "gray",
      width: "600px",
      height: "400px",
      perspective: "1200px",
      perspectiveOrigin: "50% 30%",
      overflow: "hidden",
    },
    room: {
      position: "relative",
      width: "100%",
      height: "100%",
      transformStyle: "preserve-3d",
      transition: "transform 0.1s ease-out",
    },
    face: {
      position: "absolute",
      backgroundColor: "blue",
      width: "600px",
      height: "800px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backfaceVisibility: "visible",
    },
    floor: {
      backgroundColor: "lightBlue",
      position: "absolute",
      height: "300px",
      width: "200px",
      transform: "translateZ(900px)",
      transform: "rotateX(80deg)",
    },
    backWall: {
      backgroundColor: "red",
      position: "absolute",
      width: "200px",
      height: "200px",
      transform: "translateZ(00px)",
      border: "2px solid #ccc",
    },
  };
  return (
    <div style={style.viewport}>
      <div style={style.room}>
        <div>
          <div style={style.backWall}>Y</div>
          <div style={style.floor}>X</div>
        </div>
      </div>
    </div>
  );
};
