import "./WarehouseList.scss";
import sortImg from "../../assets/icons/sort-24px.svg";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Warehouse from "../Warehouse/Warehouse";

export default function WarehouseList() {
  const [warehouses, setWarehouse] = useState(null);

  const fetchWarehouses = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/warehouses`
      );
      setWarehouse(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchWarehouses();
  }, []);

  if (!warehouses) {
    return <p className="loading">Loading...</p>;
  }

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
            <Link className="warehouse-list__link" to="/warehouses/add">
              + Add New Warehouse{" "}
            </Link>
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
          <li className="warehouse-list__table-heading warehouse-list__table-heading--wide">
            CONTACT INFORMATION{" "}
            <img className="warehouse-list__sort-icon" src={sortImg} alt="" />
          </li>
          <li className="warehouse-list__table-heading">
            ACTIONS{" "}
            <img className="warehouse-list__sort-icon" src={sortImg} alt="" />
          </li>
        </ul>
      </div>
      {warehouses.map((warehouse) => {
        return <Warehouse key={warehouse.id} warehouse={warehouse} />;
      })}
    </section>
  );
}
