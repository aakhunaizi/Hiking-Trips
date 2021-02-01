import { RangeBarStyled } from "../styles";

const RangeBar = ({ range, setRange, min, max, lengthUnit }) => {
  const whichUnit = () => {
    if (lengthUnit === true) return "MILES";
    else return "KM";
  };

  return (
    <div>
      <p>{`Length in ${whichUnit()}: ${range}`}</p>
      <RangeBarStyled
        id="typeinp"
        type="range"
        min={min}
        max={max}
        value={range}
        onChange={(event) => {
          setRange(event.target.value);
        }}
        step="1"
      />
    </div>
  );
};

export default RangeBar;
