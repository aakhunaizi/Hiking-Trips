import { SearchBarStyled } from "../styles";

const SearchBar = (props) => {
  return (
    <SearchBarStyled
      onChange={(event) => {
        props.setQuery(event.target.value);
      }}
      placeholder="Search for your next adventure!"
    ></SearchBarStyled>
  );
};

export default SearchBar;
