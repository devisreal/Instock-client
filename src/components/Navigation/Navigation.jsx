import "./Navigation.scss";
import Logo from "../../assets/logo/InStock-Logo.svg";
import { Link, useLocation, NavLink } from "react-router-dom";

export default function Navigation() {
  const location = useLocation();
  return (
    <section className="nav">
      <img src={Logo} className="nav__logo" />
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
