// import { Link } from "react-router-dom"; // this link is for basic navigation
import { NavLink } from "react-router-dom"; // has an extra feature for if you want to add active class on the active navigation link

import classes from "./MainHeader.module.css";

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <ul>
        <li>
          <NavLink activeClassName={classes.active} to={"/welcome"}>
            Welcome
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName={classes.active} to={"/products"}>
            Products
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default MainHeader;
