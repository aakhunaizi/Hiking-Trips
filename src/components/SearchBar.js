const SearchBar = (props) => {
  return (
    <input
      onChange={(event) => {
        props.setQuery(event.target.value);
      }}
      placeholder="Search for your next adventure!"
    ></input>
  );
};

export default SearchBar;
