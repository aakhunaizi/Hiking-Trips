import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

export const Title = styled.h1`
  text-align: center;
`;

export const Description = styled.h4`
  text-align: center;
`;

export const HomeImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
`;

export const Logo = styled(Link)`
  padding: auto;
  img {
    width: 75px;
  }
`;

export const NavItem = styled(NavLink)`
  color: black;
  &.active {
    color: orange;
    font-weight: bold;
  }
`;

export const ListWrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
`;

export const TripWrapper = styled.div`
  margin: 20px;
  float: left;

  img {
    height: 200px;
  }

  p {
    text-align: center;
  }
`;

export const DetailWrapper = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80%;

  img {
    width: 40%;
    float: center;
  }

  p {
    vertical-align: middle;
  }
`;

export const SearchBarStyled = styled.input`
  padding: 0.5rem;
  margin: 1rem auto;
  display: block;
  width: 40%;
`;

export const RangeBarStyled = styled.input`
  padding: 0.5rem;
  margin: 1rem auto;
  margin-top: -20px;
  display: block;
  width: 500px;
`;

export const Buttons = styled.div`
  display: inline-flex;
  margin-bottom: 20px;

  button {
    margin-right: 20px;
  }
`;
