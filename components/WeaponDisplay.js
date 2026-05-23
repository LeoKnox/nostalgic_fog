export default WeaponDisplay = ({ closeOverlay }) => {
  return (
    <div onClick={() => closeOverlay(null)} className="overlay_display">
      <label>Weapon Display</label>
    </div>
  );
};
