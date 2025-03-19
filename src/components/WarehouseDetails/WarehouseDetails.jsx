import "../WarehouseDetails/WarehouseDetails.scss";
import back from "../../assets/icons/arrow_back-24px.svg";
import EditSvg from "../EditSvg/EditSvg";
import { Link } from "react-router-dom";

export default function WarehouseDetails() {
  return (
    <div className="warehouse">
      <div className="warehouse__nav">
        <section className="warehouse__title">
          <Link to={"/"}>
            <img src={back} alt="back to homepage" />
          </Link>
          <h2> Washington</h2>
        </section>
        <button className="edit">
          <EditSvg color={"white"} />
          <p className="btn__text">Edit</p>
        </button>
      </div>
      <div className="warehouse__details">
        <div className="warehouse__address">
          <p className="address__title">Warehouse Address:</p>
          <p className="address">33 Pear Street SW, Washington, USA</p>
        </div>
        <section className="contact">
          <div className="name__details">
            <p className="name__title">Contact Name:</p>
            <p className="name">
              Graeme Lyon <br />
              Warehouse Manager
            </p>
          </div>
          <div className="contact__details">
            <p className="contact__title">Contact Information:</p>
            <p className="contact__info">
              +1 (647) 504-0911 <br />
              glyon@instock.com
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
