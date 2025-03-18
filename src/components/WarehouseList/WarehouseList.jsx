import "./WarehouseList.scss";

export default function WarehouseList() {
  return (
    <section className="warehouse-list">
      <header className="warehouse-list__header">
        <h1 className="warehouse-list__title">Warehouses</h1>
        <div className="warehouse-list__cta-wrapper">
          <input type="search" name="searchbar" />
          <button>+ Add New Warehouse</button>
        </div>
      </header>
    </section>
  );
}
