import "./AddWarehousePage.scss";
import { Link } from "react-router-dom";
import backImage from "../../assets/icons/arrow_back-24px.svg";
import AddWarehouseForm from "../../components/AddWarehouseForm/AddWarehouseForm";

export default function AddWarehousePage() {
  return (
    <section className="add-warehouse">
      <header className="add-warehouse__header">
        <h1 className="add-warehouse__header-title">
          <Link className="back__link" to={"/"}>
            <img src={backImage} alt="back to homepage" />
          </Link>
          Add New Warehouse
        </h1>
      </header>

      <AddWarehouseForm />
      
    </section>
  );
}
