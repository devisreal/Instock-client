import "./Navigation.scss";
import Logo from "../../assets/logo/InStock-Logo.svg";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <section className="nav">
      <img src={Logo} className="nav__logo" />
      <div className="nav__container">
        <Link to="/warehouses" className="nav__title">
          Warehouses
        </Link>
        <Link to="/inventories" className="nav__title">
          Inventory
        </Link>
      </div>
    </section>
  );
}
