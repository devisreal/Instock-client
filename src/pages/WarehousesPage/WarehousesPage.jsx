import "./WarehousesPage.scss";
import WarehouseList from "../../components/WarehouseList/WarehouseList";
import Modal from "../../components/Modal/Modal";
import { useState } from "react";

export default function WarehousesPage() {
  const [deleteStatus, setDeleteStatus] = useState(false);
  return (
    <>
      <WarehouseList setDeleteStatus={setDeleteStatus} />
      {deleteStatus && (
        <Modal deleteStatus={deleteStatus} setDeleteStatus={setDeleteStatus} />
      )}
    </>
  );
}
