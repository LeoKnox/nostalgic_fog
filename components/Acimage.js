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
        <line x1="100" y1="100" x2="100" y2="5" />
        <line x1="100" y1="100" x2="85" y2={(144 * Math.PI) / 180} />
        <line x1="100" y1="100" x2="80" y2="70" />
        <line x1="100" y1="100" x2="20" y2="70" />
        <line x1="100" y1="100" x2="15" y2="30" />
      </g>
    </svg>
  );
};
