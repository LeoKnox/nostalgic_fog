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
      width: "600px",
      height: "400px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backfaceVisibility: "visible",
    },
    floor: {
      backgroundColor: "white",
      height: "300px",
      //transform: "translateZ(-300px)",
      transform: "rotateX(-90deg), translateZ(-400px)",
    },
    backWall: {
      backgroundColor: "red",
      color: "#333",
      height: "300px",
      transform: "translateZ(-300px)",
      border: "2px solid #ccc",
    },
  };
  return (
    <div style={style.viewport}>
      <div style={style.room}>
        <div style={style.face}>
          <div style={style.floor}>X</div>
          <div style={style.backWall}>Y</div>
        </div>
      </div>
    </div>
  );
};
