import "./WarehouseList.scss";
import sortImg from "../../assets/icons/sort-24px.svg";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Warehouse from "../Warehouse/Warehouse";
import ListHeader from "../ListHeader/ListHeader";
import TableHeadings from "../TableHeadings/TableHeadings";

export default function WarehouseList({
  setSelectedWarehouse,
  setIsModalOpen,
}) {
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
      <ListHeader warehousesPage={true} />
      <TableHeadings warehousesPage={true} />

      {warehouses.map((warehouse) => {
        return (
          <Warehouse
            setSelectedWarehouse={setSelectedWarehouse}
            key={warehouse.id}
            warehouse={warehouse}
            setIsModalOpen={setIsModalOpen}
          />
        );
      })}
    </section>
  );
}
