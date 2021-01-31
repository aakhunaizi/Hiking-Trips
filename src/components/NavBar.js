import { Link } from "react-router-dom";
import { Logo, NavItem } from "../styles";

const NavBar = (props) => {
  return (
    <nav className="navbar navbar-expand">
      <h4 className="navbar-brand">
        <Logo to="/">
          <img
            src="https://www.onlinelogomaker.com/blog/wp-content/uploads/2017/07/hiking-logo-design.jpg"
            alt="Hiking Trips"
          ></img>
        </Logo>
      </h4>
      <div className="navbar-nav ml-auto">
        <NavItem
          exact
          to="/"
          className="nav-item"
          style={{ padding: "0.25em 1em" }}
        >
          Home
        </NavItem>

        <NavItem
          to="/trips"
          className="nav-item"
          style={{ padding: "0.25em 1em" }}
        >
          Trips
        </NavItem>
      </div>
    </nav>
  );
};

export default NavBar;
