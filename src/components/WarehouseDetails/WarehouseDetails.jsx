import "../WarehouseDetails/WarehouseDetails.scss";
import back from "../../assets/icons/arrow_back-24px.svg";
import edit from "../../assets/icons/edit-24px.svg";

export default function WarehouseDetails() {
  return (
    <div className="warehouse">
      <div className="warehouse__nav">
        <section className="warehouse__title">
          <img src={back} alt="" />
          <h2> Washington</h2>
        </section>
        <button className="edit">
          <img src={edit} alt="" />
          Edit
        </button>
      </div>
      <div className="warehouse__details">
        <div className="warehouse__address">
          <p className="address__title">Warehouse Address:</p>
          <p className="address">
            33 Pear Street SW, <br /> Washington, USA
          </p>
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
