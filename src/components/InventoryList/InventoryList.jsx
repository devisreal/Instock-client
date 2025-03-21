import "./InventoryList.scss";
import sortImg from "../../assets/icons/sort-24px.svg";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Inventory from "../Inventory/Inventory";

export default function InventoryList({
  setSelectedInventory,
  setIsModalOpen,
}) {
  const [inventories, setInventories] = useState(null);

  const fetchInventories = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/inventories`
      );
      setInventories(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchInventories();
  }, []);

  if (!inventories) {
    return <p className="loading">Loading...</p>;
  }

  return (
    <section className="inventory-list">
      <header className="inventory-list__header">
        <h1 className="inventory-list__title">Inventory</h1>
        <div className="inventory-list__cta-wrapper">
          <input
            className="inventory-list__search-bar"
            type="search"
            name="searchbar"
            placeholder="Search..."
          />
          <button className="inventory-list__button">
            <Link className="inventory-list__link" to="/inventories/add">
              + Add New Item{" "}
            </Link>
          </button>
        </div>
      </header>
      <div className="inventory-list__table-headings">
        <ul className="inventory-list__table-headings-list">
          <li className="inventory-list__table-heading inventory-list__table-heading--wide">
            INVENTORY ITEM
            <img className="inventory-list__sort-icon" src={sortImg} alt="" />
          </li>
          <li className="inventory-list__table-heading">
            CATEGORY
            <img className="inventory-list__sort-icon" src={sortImg} alt="" />
          </li>
          <li className="inventory-list__table-heading inventory-list__table-heading--wide">
            STATUS
            <img className="inventory-list__sort-icon" src={sortImg} alt="" />
          </li>
          <li className="inventory-list__table-heading ">
            QTY{" "}
            <img className="inventory-list__sort-icon" src={sortImg} alt="" />
          </li>
          <li className="inventory-list__table-heading">
            WAREHOUSE{" "}
            <img className="inventory-list__sort-icon" src={sortImg} alt="" />
          </li>
          <li className="inventory-list__table-heading inventory-list__table-heading--wide">
            ACTIONS
          </li>
        </ul>
      </div>

      {inventories.map((inventory) => {
        return (
          <Inventory
            setSelectedInventory={setSelectedInventory}
            key={inventory.id}
            inventory={inventory}
            setIsModalOpen={setIsModalOpen}
          />
        );
      })}
    </section>
  );
}
