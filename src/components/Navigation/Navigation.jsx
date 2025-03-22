import "./Navigation.scss";
import Logo from "../../assets/logo/InStock-Logo.svg";
import { NavLink, Link } from "react-router-dom";

export default function Navigation() {
  return (
    <section className="nav">
      <Link to="/">
        <img src={Logo} alt="InStock Logo" className="nav__logo" />
      </Link>
      <div className="nav__container">
        <NavLink to="/warehouses" className="nav__title">
          Warehouses
        </NavLink>
        <NavLink to="/inventories" className="nav__title">
          Inventory
        </NavLink>
      </div>
    </section>
  );
}
