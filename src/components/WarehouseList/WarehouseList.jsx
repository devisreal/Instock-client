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
      <div className="warehouse-list__field-names">
        <ul className="warehouse-list__field-names-list">
          <div className="warehouse-list__field-names-wrapper">
            <li className="warehouse-list__field-name">
              WAREHOUSE
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li className="warehouse-list__field-name">
              ADDRESS <p>Lorem ipsum dolor sit amet.</p>
            </li>
          </div>
          <div className="warehouse-list__field-names-wrapper">
            <li className="warehouse-list__field-name">
              CONTACT NAME <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li className="warehouse-list__field-name">
              CONTACT INFORMATION <p>Lorem ipsum dolor sit amet.</p>
            </li>
          </div>
          <li className="warehouse-list__field-name">ACTIONS</li>
        </ul>
      </div>
    </section>
  );
}
