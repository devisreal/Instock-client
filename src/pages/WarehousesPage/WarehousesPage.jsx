import "./WarehousesPage.scss";
import WarehouseList from "../../components/WarehouseList/WarehouseList";
import Modal from "../../components/Modal/Modal";
import { useState } from "react";

export default function WarehousesPage({ setIsModalOpen, isModalOpen }) {
  const [selectedWarehouse, setSelectedWarehouse] = useState(null);

  return (
    <>
      <WarehouseList
        setSelectedWarehouse={setSelectedWarehouse}
        setIsModalOpen={setIsModalOpen}
      />
      {isModalOpen && (
        <Modal
          selectedWarehouse={selectedWarehouse}
          setIsModalOpen={setIsModalOpen}
        />
      )}
    </>
  );
}
