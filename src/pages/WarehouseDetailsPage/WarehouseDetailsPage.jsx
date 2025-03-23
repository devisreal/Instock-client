import WarehouseDetails from "../../components/WarehouseDetails/WarehouseDetails";
import "./WarehouseDetailsPage.scss";
import Modal from "../../components/Modal/Modal";
import { useState } from "react";

export default function WarehouseDetailsPage({ isModalOpen, setIsModalOpen }) {
  const [selectedInventory, setSelectedInventory] = useState(null);

  return (
    <>
      <WarehouseDetails
        setIsModalOpen={setIsModalOpen}
        setSelectedInventory={setSelectedInventory}
      />
      {isModalOpen && (
        <Modal
          selectedItem={selectedInventory}
          setIsModalOpen={setIsModalOpen}
          inventoriesPage={true}
        />
      )}
    </>
  );
}
