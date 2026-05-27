export default Acimage = () => {
  const coords = [
    [100, 0],
    [176, 35],
  ];
  return (
    <svg>
      {coords.map((point) => (
        <p>{point[0]}!!!</p>
      ))}
    </svg>
  );
};
/*
<circle
        r="100"
        fill="red"
        cx="50%"
        cy="50%"
        stroke="none"
        strokeWidth="0"
      />
      <circle
        r="80"
        cx="50%"
        cy="50%"
        stroke="darkred"
        strokeWidth="4"
        fill="none"
      />
      <circle
        r="60"
        cx="50%"
        cy="50%"
        stroke="darkred"
        strokeWidth="4"
        fill="none"
      />
      <circle
        r="40"
        cx="50%"
        cy="50%"
        stroke="darkred"
        strokeWidth="4"
        fill="none"
      />
      <polygon
        points="100,10 155,50 120,128 53,181 24,55"
        fill="none"
        stroke="black"
        stroke-width="4"
        stroke-linejoin="round"
      />
      <g stroke="black" stroke-width="2">
        <line x1="100" y1="100" x2="100" y2="0" />
        <line x1="100" y1="100" x2="176" y2="35" />
        <line x1="100" y1="100" x2="147" y2="181" />
        <line x1="100" y1="100" x2="53" y2="181" />
        <line x1="100" y1="100" x2="24" y2="55" />
      </g>
      */
