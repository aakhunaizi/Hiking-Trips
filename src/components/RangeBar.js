const RangeBar = ({ range, setRange }) => {
  return (
    <div>
      <input
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
      <p>{range}</p>
    </div>
  );
};

export default RangeBar;
