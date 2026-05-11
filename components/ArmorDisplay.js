export default ArmorDisplay = () => ({ closeOverlay }) => {
  return (
    <div className="overlay_display">
      <button onClick={() => closeOverlay(null)}>Close</button>
      <label>Armor Display</label>
    </div>
  );
};
