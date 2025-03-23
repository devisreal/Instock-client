import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import back from "../../assets/icons/arrow_back-24px.svg";
import sortImg from "../../assets/icons/sort-24px.svg";
import EditSvg from "../EditSvg/EditSvg";
import Inventory from "../Inventory/Inventory";

import "../WarehouseDetails/WarehouseDetails.scss";

export default function WarehouseDetails({
  setSelectedInventory,
  setIsModalOpen,
}) {
  const [warehouse, setWarehouse] = useState(null);
  const [inventories, setInventories] = useState(null);
  const { id } = useParams();
  const [error, setError] = useState(false);

  const fetchWarehouse = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/warehouses/${id}`
      );
      setWarehouse(data);
    } catch (error) {
      setError(true);
    }
  };

  const fetchWarehouseInventories = async (warehouseId) => {
    try {
      const { data } = await axios.get(
        `${
          import.meta.env.VITE_BACKEND_URL
        }/warehouses/${warehouseId}/inventories`
      );
      setInventories(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchWarehouse();
    fetchWarehouseInventories(id);
  }, [id]);

  if (!warehouse) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <section className="warehouse">
        <header className="warehouse__header">
          <h2 className="warehouse__header-title">
            <Link className="back__link" to={"/"}>
              <img src={back} alt="back to homepage" />
            </Link>
            {warehouse.city}
          </h2>

          <button className="warehouse__button">
            <Link
              className="warehouse__button-link"
              to={`/warehouses/${warehouse.id}/edit`}
            >
              <EditSvg color={"white"} />
              Edit
            </Link>
          </button>
        </header>

        <div className="warehouse__details">
          <div className="warehouse__address">
            <p className="address__title">Warehouse Address:</p>
            <p className="address">
              {warehouse.address},{""} {""}
              {warehouse.city},{""} {""}
              {warehouse.country}{" "}
            </p>
          </div>
          <section className="contact">
            <div className="name__details">
              <p className="name__title">Contact Name:</p>
              <p className="name">
                {warehouse.contact_name} <br />
                {warehouse.contact_position}
              </p>
            </div>
            <div className="contact__details">
              <p className="contact__title">Contact Information:</p>
              <p className="contact__info">
                {warehouse.contact_phone} <br />
                {warehouse.contact_email}
              </p>
            </div>
          </section>
        </div>

        {!inventories ? (
          <p className="loading">Loading...</p>
        ) : (
          <>
            <div className="inventory-list__table-headings">
              <ul className="inventory-list__table-headings-list">
                <li className="inventory-list__table-heading">
                  INVENTORY ITEM
                  <img
                    className="inventory-list__sort-icon"
                    src={sortImg}
                    alt=""
                  />
                </li>
                <li className="inventory-list__table-heading">
                  CATEGORY
                  <img
                    className="inventory-list__sort-icon"
                    src={sortImg}
                    alt=""
                  />
                </li>
                <li className="inventory-list__table-heading">
                  STATUS
                  <img
                    className="inventory-list__sort-icon"
                    src={sortImg}
                    alt=""
                  />
                </li>
                <li className="inventory-list__table-heading ">
                  QTY{" "}
                  <img
                    className="inventory-list__sort-icon"
                    src={sortImg}
                    alt=""
                  />
                </li>
                <li className="inventory-list__table-heading">ACTIONS</li>
              </ul>
            </div>

            {inventories.map((inventory) => {
              return (
                <Inventory
                  setSelectedInventory={setSelectedInventory}
                  key={inventory.id}
                  inventory={inventory}
                  warehouseColumn={false}
                  setIsModalOpen={setIsModalOpen}
                />
              );
            })}
          </>
        )}
      </section>
    </>
  );
}
