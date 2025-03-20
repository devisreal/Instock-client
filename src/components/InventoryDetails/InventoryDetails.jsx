import "./InventoryDetails.scss";
import Arrow from "../../assets/icons/arrow_back-24px.svg";
import EditSvg from "../EditSvg/EditSvg";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function InventoryDetails() {
  const [details, setDetails] = useState(null);
  const { id } = useParams();

  const fetchInventoryDetails = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/inventories/${id}`
      );
      setDetails(data);
    } catch (error) {
      console.error("Error fetching details", error);
    }
  };

  useEffect(() => {
    fetchInventoryDetails();
  }, [id]);

  if (!details) {
    return (
      <section className="page">
        <div className="page__container">
          <h1 className="page__title">404</h1>
          <p className="page__text">Inventory Details Not Found</p>
          <Link className="page__link" to="/inventories">
            Inventory Page
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="inventory-details">
      <div className="inventory-details__banner">
        <div className="inventory-details__wrapper">
          <Link to="/inventories" className="inventory-details__arrow">
            <img src={Arrow} alt="Back Arrow" />
          </Link>
          <h1 className="inventory-details__header">Television</h1>
        </div>
        <Link to="/inventories/:id//edit">
          <button className="inventory-details__button">
            <EditSvg color={"white"} />
            <span className="inventory-details__button-text">Edit</span>
          </button>
        </Link>
      </div>
      <div className="inventory-details__card">
        <div className="inventory-details__left-side">
          <h3 className="inventory-details__title">ITEM DESCRIPTION:</h3>
          <p className="inventory-details__description">
            {details.description}
          </p>
          <h3 className="inventory-details__title inventory-details__title--top">
            CATEGORY:
          </h3>
          <p className="inventory-details__category">{details.category}</p>
        </div>
        <div className="inventory-details__right-side">
          <div className="inventory-details__section">
            <div>
              <h3 className="inventory-details__title">STATUS:</h3>
              <p
                className={`inventory-details__status ${
                  details.status.toLowerCase() === "in stock"
                    ? "inventory-details__status--green"
                    : "inventory-details__status--red"
                }`}
              >
                {details.status.toUpperCase()}
              </p>
            </div>
            <div>
              <h3 className="inventory-details__title">QUANTITY:</h3>
              <p className="inventory-details__quantity">{details.quantity}</p>
            </div>
          </div>
          <h3 className="inventory-details__title inventory-details__title--top">
            WAREHOUSE:
          </h3>
          <p className="inventory-details__warehouse">
            {details.warehouse_name}
          </p>
        </div>
      </div>
    </section>
  );
}
