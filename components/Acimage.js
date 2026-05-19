export default Acimage = () => {
  return (
    <svg>
      <circle
        r="100"
        fill="red"
        cx="50%"
        cy="50%"
        stroke="none"
        strokeWidth="0"
      />
      <g stroke="black" stroke-width="2">
        <line x1="50" y1="50" x2="50" y2="10" />
        <line x1="50" y1="50" x2="85" y2="30" />
        <line x1="50" y1="50" x2="80" y2="70" />
        <line x1="50" y1="50" x2="20" y2="70" />
        <line x1="50" y1="50" x2="15" y2="30" />
      </g>
    </svg>
  );
};
