const Bars = ({  bgClr, completed }) => {
  const barStyles = {
    height: "100%",
    width: `${completed}%`,
    backgroundColor: bgClr,
    borderRadius: "inherit",
    transition:"width 1s"
  };

  return (
    <div className="container">
      <div className="bar" style={barStyles}>
        <div className="filler">{completed}%</div>
      </div>
    </div>
  );
};

export default Bars;
