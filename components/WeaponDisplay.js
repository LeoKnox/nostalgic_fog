export default WeaponDisplay = (closeOverlay) => {
  return (
    <div className="overlay_display">
      <button onClick={() => closeOverlay(null)}>Close</button>
      <label>Weapon Display</label>
    </div>
  );
};
