import { Link } from "react-router-dom";
import "./ListHeader.scss";

export default function ListHeader(page) {
  const { warehousesPage } = page;

  return (
    <header className="list-header">
      {warehousesPage ? (
        <h1 className="list-header__title">Warehouses</h1>
      ) : (
        <h1 className="list-header__title">Inventory</h1>
      )}

      <div className="list-header__cta-wrapper">
        <input
          className="list-header__search-bar"
          type="search"
          name="searchbar"
          placeholder="Search..."
        />
        {warehousesPage ? (
          <button className="list-header__button">
            <Link className="list-header__link" to="/inventories/add">
              + Add New Warehouse{" "}
            </Link>
          </button>
        ) : (
          <button className="list-header__button">
            <Link className="list-header__link" to="/inventories/add">
              + Add New Item{" "}
            </Link>
          </button>
        )}
      </div>
    </header>
  );
}
