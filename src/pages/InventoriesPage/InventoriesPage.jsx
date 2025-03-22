import { useState } from "react";
import InventoryList from "../../components/InventoryList/InventoryList";
import "./InventoriesPage.scss";
import Modal from "../../components/Modal/Modal";

export default function InventoriesPage({ isModalOpen, setIsModalOpen }) {
  const [selectedInventory, setSelectedInventory] = useState(null);

  return (
    <>
      <InventoryList
        setSelectedInventory={setSelectedInventory}
        setIsModalOpen={setIsModalOpen}
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
