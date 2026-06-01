export default Room = (width = 5, length = 5, height = 3) => {
  const style = {
    viewport: {
      border: "3px solid darkgreen",
      backgroundColor: "gray",
      width: "500px",
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
  };
  return <div style={style.viewport}>Y</div>;
};
