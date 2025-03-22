import "./InventoryList.scss";

import axios from "axios";
import { useEffect, useState } from "react";

import Inventory from "../Inventory/Inventory";
import ListHeader from "../ListHeader/ListHeader";
import TableHeadings from "../TableHeadings/TableHeadings";

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
      <ListHeader warehousesPage={false} />
      <TableHeadings warehousesPage={false} />

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
