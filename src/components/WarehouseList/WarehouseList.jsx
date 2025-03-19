import "./WarehouseList.scss";
import sortImg from "../../assets/icons/sort-24px.svg";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";

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
      <div className="warehouse-list__table-headings">
        <ul className="warehouse-list__table-headings-list">
          <li className="warehouse-list__table-heading">
            WAREHOUSE
            <img className="warehouse-list__sort-icon" src={sortImg} alt="" />
          </li>
          <li className="warehouse-list__table-heading">
            ADDRESS
            <img className="warehouse-list__sort-icon" src={sortImg} alt="" />
          </li>
          <li className="warehouse-list__table-heading">
            CONTACT NAME
            <img className="warehouse-list__sort-icon" src={sortImg} alt="" />
          </li>
          <li className="warehouse-list__table-heading">
            CONTACT INFORMATION{" "}
            <img className="warehouse-list__sort-icon" src={sortImg} alt="" />
          </li>
          <li className="warehouse-list__table-heading">
            ACTIONS{" "}
            <img className="warehouse-list__sort-icon" src={sortImg} alt="" />
          </li>
        </ul>
      </div>
      <ul className="warehouse-list__info-container">
        <div className="warehouse-list__info-col">
          <li className="warehouse-list__info-item">
            <p className="warehouse-list__info-subheading">WAREHOUSE</p>
            <p className="warehouse-list__info">Lorem ipsum dolor sit amet.</p>
          </li>
          <li className="warehouse-list__info-item">
            <p className="warehouse-list__info-subheading">ADDRESS</p>
            <p className="warehouse-list__info">Lorem ipsum dolor sit amet.</p>
          </li>
        </div>
        <div className="warehouse-list__info-col">
          <li className="warehouse-list__info-item">
            <p className="warehouse-list__info-subheading">CONTACT NAME</p>
            <p className="warehouse-list__info">Lorem ipsum dolor sit amet.</p>
          </li>
          <li className="warehouse-list__info-item">
            <p className="warehouse-list__info-subheading">CONTACT INFO</p>
            <p className="warehouse-list__info">Lorem ipsum dolor sit amet.</p>
          </li>
        </div>
      </ul>
      <div className="warehouse-list__icons-wrapper">
        <img
          className="warehouse-list__icon"
          src={deleteIcon}
          alt="Bin warehouse icon"
        />
        <img
          className="warehouse-list__icon"
          src={editIcon}
          alt="Edit warehouse icon"
        />
      </div>
    </section>
  );
}
