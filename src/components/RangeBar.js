import { RangeBarStyled } from "../styles";

const RangeBar = ({ range, setRange }) => {
  return (
    <div>
      <p>{range}</p>
      <RangeBarStyled
        id="typeinp"
        type="range"
        min="0"
        max="100"
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
