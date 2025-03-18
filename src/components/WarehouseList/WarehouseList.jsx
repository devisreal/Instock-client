import "./WarehouseList.scss";

export default function WarehouseList() {
  return (
    <section className="warehouse-list">
      <header className="warehouse-list__header">
        <h1 className="warehouse-list__title">Warehouses</h1>
        <div className="warehouse-list__cta-wrapper">
          <input
            className="warehouse-list__search-bar"
            type="search"
            name="searchbar"
            placeholder="Search..."
          />
          <button className="warehouse-list__button">
            + Add New Warehouse
          </button>
        </div>
      </header>
    </section>
  );
}
