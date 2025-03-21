import "./Inventory.scss";
import { Link } from "react-router-dom";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import chevronRight from "../../assets/icons/chevron_right-24px.svg";

export default function Inventory({
  inventory,
  setIsModalOpen,
  setSelectedInventory,
}) {
  const handleDeleteBtn = () => {
    setIsModalOpen(true);
    setSelectedInventory(inventory);
  };

  return (
    <div className="inventory-main">
      <ul className="inventory-main__info-container">
        <div className="inventory-main__info-col">
          <li className="inventory-main__info-item">
            <p className="inventory-main__info-subheading">INVENTORY ITEM</p>
            <Link
              className="inventory-main__link-wrapper"
              to={`/inventories/${inventory.id}`}
            >
              <p className="inventory-main__info inventory-main__link">
                {inventory.item_name}
              </p>
              <img src={chevronRight} alt="Chevron" />
            </Link>
          </li>
          <li className="inventory-main__info-item">
            <p className="inventory-main__info-subheading">CATEGORY</p>
            <p className="inventory-main__info inventory-main__info--block">
              {inventory.category}
            </p>
          </li>
        </div>
        <div className="inventory-main__info-col">
          <li className="inventory-main__info-item">
            <p className="inventory-main__info-subheading">STATUS</p>
            <p
              className={`inventory-main__status ${
                inventory.status.toLowerCase() === "in stock"
                  ? "inventory-main__status--green"
                  : "inventory-main__status--red"
              }`}
            >
              {inventory.status.toUpperCase()}
            </p>
          </li>
          <li className="inventory-main__info-item">
            <p className="inventory-main__info-subheading">QTY</p>
            <div className="inventory-main__info">{inventory.quantity}</div>
          </li>
          <li className="inventory-main__info-item">
            <p className="inventory-main__info-subheading">WAREHOUSE</p>
            <p className="inventory-main__info">{inventory.warehouse_name}</p>
          </li>
        </div>
      </ul>
      <div className="inventory-main__icons-wrapper">
        <img
          className="inventory-main__icon"
          src={deleteIcon}
          alt="Bin inventory icon"
          onClick={handleDeleteBtn}
        />
        <img
          className="inventory-main__icon"
          src={editIcon}
          alt="Edit inventory icon"
        />
      </div>
    </div>
  );
}
