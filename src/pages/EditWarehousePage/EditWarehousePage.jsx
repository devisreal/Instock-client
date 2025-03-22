import { Link, useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import backImage from "../../assets/icons/arrow_back-24px.svg";
import AddWarehouseForm from "../../components/AddWarehouseForm/AddWarehouseForm";
import "./EditWarehousePage.scss";

export default function EditWarehousePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [warehouse, setWarehouse] = useState(null);

  const fetchWarehouse = async (params) => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/warehouses/${id}`
      );
      setWarehouse(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchWarehouse();
  }, [id]);

  if (!warehouse) return <p>Loading warehouse details...</p>;

  return (
    <section className="edit-warehouse">
      <header className="edit-warehouse__header">
        <h1 className="edit-warehouse__header-title">
          <Link className="back__link" to="/warehouses">
            <img src={backImage} alt="Back to warehouses" />
          </Link>
          Edit Warehouse
        </h1>
      </header>

      <AddWarehouseForm warehouseData={warehouse} isEditing={true} />
    </section>
  );
}
