import "../WarehouseDetails/WarehouseDetails.scss";
import back from "../../assets/icons/arrow_back-24px.svg";
import EditSvg from "../EditSvg/EditSvg";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

export default function WarehouseDetails() {
  const [warehouse, setWarehouse] = useState(null);
  const { id } = useParams();
  const [error, setError] = useState(false);

  const fetchWarehouse = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/warehouses/${id}`
      );
      setWarehouse(data);
      console.log(data);
    } catch (error) {
      setError(true);
    }
  };
  useEffect(() => {
    fetchWarehouse();
  }, []);

  if (!warehouse) {
    return <p>Loading...</p>;
  }

  return (
    <div className="warehouse">
      <div className="warehouse__nav">
        <section className="warehouse__title">
          <Link className="back__link" to={"/"}>
            <img src={back} alt="back to homepage" />
          </Link>
          <h2> {warehouse.city} </h2>
        </section>
        <button className="edit">
          <EditSvg color={"white"} />
          <p className="btn__text">Edit</p>
        </button>
      </div>
      <div className="warehouse__details">
        <div className="warehouse__address">
          <p className="address__title">Warehouse Address:</p>
          <p className="address">
            {warehouse.address},{""} {""}
            {warehouse.city},{""} {""}
            {warehouse.country}{" "}
          </p>
        </div>
        <section className="contact">
          <div className="name__details">
            <p className="name__title">Contact Name:</p>
            <p className="name">
              {warehouse.contact_name} <br />
              {warehouse.contact_position}
            </p>
          </div>
          <div className="contact__details">
            <p className="contact__title">Contact Information:</p>
            <p className="contact__info">
              {warehouse.contact_phone} <br />
              {warehouse.contact_email}
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
