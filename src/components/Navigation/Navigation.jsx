import "./Navigation.scss";
import Logo from "../../assets/logo/InStock-Logo.svg";

export default function Navigation() {
	return (
		<section className="nav">
			<img src={Logo} className="nav__logo" />
			<ul className="nav__container">
				<li className="nav__title">Warehouses</li>
				<li className="nav__title">Inventory</li>
			</ul>
		</section>
	);
}
