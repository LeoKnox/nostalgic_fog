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
      height: "400px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backfaceVisibility: "visible",
    },
    floor: {
      backgroundColor: "white",
      position: "absolute",
      height: "300px",
      width: "300px",
      height: "400px",
      transform: "rotateX(-40deg), translateZ(-400px)",
    },
    backWall: {
      backgroundColor: "red",
      position: "absolute",
      color: "#333",
      width: "600px",
      height: "400px",
      transform: "translateZ(-300px)",
      border: "2px solid #ccc",
    },
  };
  return (
    <div style={style.viewport}>
      <div style={style.room}>
        <div style={style.face}>
          <div style={style.floor}>X</div>
        </div>
      </div>
    </div>
  );
};
