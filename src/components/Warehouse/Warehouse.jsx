import "./Warehouse.scss";
import { Link } from "react-router-dom";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import chevronRight from "../../assets/icons/chevron_right-24px.svg";

export default function Warehouse({ warehouse, setDeleteStatus }) {
  const handleDeleteBtn = () => {
    setDeleteStatus(true);
  };

  return (
    <div className="warehouse-main">
      <ul className="warehouse-main__info-container">
        <div className="warehouse-main__info-col">
          <li className="warehouse-main__info-item">
            <p className="warehouse-main__info-subheading">WAREHOUSE</p>
            <Link
              className="warehouse-main__link-wrapper"
              to={`/warehouses/${warehouse.id}`}
            >
              <p className="warehouse-main__info warehouse-main__link">
                {warehouse.warehouse_name}
              </p>
              <img src={chevronRight} alt="Chevron" />
            </Link>
          </li>
          <li className="warehouse-main__info-item">
            <p className="warehouse-main__info-subheading">ADDRESS</p>
            <p className="warehouse-main__info warehouse-main__info--block">
              {warehouse.address},{" "}
            </p>
            <p className="warehouse-main__info">{warehouse.city}, </p>
            <p className="warehouse-main__info">{warehouse.country}</p>
          </li>
        </div>
        <div className="warehouse-main__info-col">
          <li className="warehouse-main__info-item">
            <p className="warehouse-main__info-subheading">CONTACT NAME</p>
            <p className="warehouse-main__info">{warehouse.contact_name}</p>
          </li>
          <li className="warehouse-main__info-item">
            <p className="warehouse-main__info-subheading">CONTACT INFO</p>
            <div className="warehouse-main__info">
              {warehouse.contact_phone}
            </div>
            <div className="warehouse-main__info">
              {warehouse.contact_email}
            </div>
          </li>
        </div>
      </ul>
      <div className="warehouse-main__icons-wrapper">
        <img
          className="warehouse-main__icon"
          src={deleteIcon}
          alt="Bin warehouse icon"
          onClick={handleDeleteBtn}
        />
        <img
          className="warehouse-main__icon"
          src={editIcon}
          alt="Edit warehouse icon"
        />
      </div>
    </div>
  );
}
