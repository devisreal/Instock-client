import { data, Link, useParams } from "react-router-dom";
import back from "../../assets/icons/arrow_back-24px.svg";
import "./EditInventoryPage.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import errorSVG from "../../assets/icons/error-24px.svg";

export default function EditInventoryPage() {
  const [inventoryItem, setInventoryItem] = useState(null);
  const { id } = useParams();
  const [error, setError] = useState(false);
  const [categories, setCategories] = useState(null);
  const [warehouses, setWarehouses] = useState(null);
  const [formErrors, setFormErrors] = useState({});

  const changeHandler = (e) => {
    const updatedInventoryItem = {
      ...inventoryItem,
      [e.target.name]: e.target.value,
    };

    setInventoryItem(updatedInventoryItem);
  };

  const fetchInventory = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/inventories/${id}`
      );
      setInventoryItem(data);
    } catch (error) {
      setError(true);
    }
  };

  const fetchCategories = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/categories`
      );
      setCategories(data);
    } catch (error) {
      setError(true);
    }
  };

  const fetchWarehouses = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/warehouses`
      );
      setWarehouses(data);
    } catch (error) {
      setError(true);
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    let formIsValid = true;
    const errors = {};

    if (!inventoryItem.item_name) {
      formIsValid = false;
      errors["item_name"] = "This field is required";
    }
    if (!inventoryItem.description) {
      formIsValid = false;
      errors["description"] = "This field is required";
    }
    if (!inventoryItem.quantity && inventoryItem.status === "In Stock") {
      formIsValid = false;
      errors["quantity"] = "This field is required";
    }
    if (!formIsValid) {
      setFormErrors(errors);
      return;
    }

    const inventoryToSubmit = {
      id: inventoryItem.id,
      warehouse_id: inventoryItem.warehouse_id,
      item_name: inventoryItem.item_name,
      description: inventoryItem.description,
      category: inventoryItem.category,
      status: inventoryItem.status,
      quantity: inventoryItem.quantity,
    };

    try {
      await axios.patch(
        `${import.meta.env.VITE_BACKEND_URL}/inventories/${id}`,
        inventoryToSubmit
      );
      setFormErrors(errors);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    fetchInventory();
    fetchCategories();
    fetchWarehouses();
  }, []);

  if (!inventoryItem || !categories || !warehouses) {
    return <p>Loading.....</p>;
  }

  const inventoryItemWarehouse = warehouses.find((warehouse) => {
    return warehouse.id == inventoryItem.warehouse_id;
  });

  return (
    <div className="edit__inventory">
      <div className="header">
        <section className="title">
          <Link className="back" to={"/inventories"}>
            <img src={back} alt="back to homepage" />
          </Link>
          <h1> Edit Inventory Item</h1>
        </section>
      </div>
      <form className="form" onSubmit={submitHandler}>
        <div className="item__form">
          <div className="item__details">
            <h2 className="item__title">Item Details</h2>
            <label className="form__label">
              Item Name
              {""}
              <input
                name="item_name"
                onChange={changeHandler}
                value={inventoryItem.item_name}
                className={`item__input ${
                  formErrors.item_name ? "item__input--error" : ""
                }`}
              />
            </label>
            {formErrors.item_name && (
              <p className="error__item">
                {" "}
                <img src={errorSVG} alt="error" />
                {formErrors.item_name}
              </p>
            )}
            <label className="form__label">
              Description {""}
              <textarea
                name="description"
                onChange={changeHandler}
                value={inventoryItem.description}
                className={`description__input ${
                  formErrors.description ? "description__input--error" : ""
                }`}
              ></textarea>
              {formErrors.description && (
                <p className="error__description">
                  {" "}
                  <img src={errorSVG} alt="error" /> {formErrors.description}
                </p>
              )}
            </label>
            <label className="form__label">
              <p className="form__subtitle">Category</p>
              <select
                defaultValue={inventoryItem.category}
                className="dropdown"
                name="category"
                onChange={changeHandler}
              >
                {categories.map((category, index) => {
                  return (
                    <option key={index} value={category}>
                      {category}
                    </option>
                  );
                })}
              </select>
            </label>
          </div>
          <div className="avaliability">
            <h2>Item Avaliability</h2>
            <p>Status</p>
            <div className="avaliability__form">
              <section className="radio">
                <label>
                  <input
                    type="radio"
                    defaultChecked={inventoryItem.status === "In Stock"}
                    name="status"
                    value="In Stock"
                    onChange={changeHandler}
                  />{" "}
                  In Stock
                </label>
                <label>
                  <input
                    type="radio"
                    name="status"
                    value="Out of Stock"
                    defaultChecked={inventoryItem.status === "Out of Stock"}
                    onChange={changeHandler}
                  />{" "}
                  Out of Stock
                </label>
              </section>
              {inventoryItem.status === "In Stock" && (
                <label className="quantity">
                  <p className="quantity__title">Quantity</p>
                  <input
                    className={`dropdown dropdown--quantity ${
                      formErrors.description
                        ? "dropdown dropdown--quantity--error"
                        : ""
                    }`}
                    type="text"
                    name="quantity"
                    onChange={changeHandler}
                    defaultValue={inventoryItem.quantity}
                  />
                </label>
              )}
              {formErrors.quantity && (
                <p className="error__description">
                  {" "}
                  <img src={errorSVG} alt="error" /> {formErrors.quantity}
                </p>
              )}
            </div>
            <label className="warehouse__label">
              <p className="form__subtitle">Warehouse</p>
              <select
                defaultValue={inventoryItemWarehouse.warehouse_name}
                className="dropdown"
                name="warehouse_id"
                onChange={changeHandler}
              >
                {warehouses.map((warehouse, index) => {
                  return (
                    <option key={index} value={warehouse.id}>
                      {warehouse.warehouse_name}
                    </option>
                  );
                })}
              </select>
            </label>
          </div>
        </div>
        <div className="submit__wrapper">
          <Link className="back" to={"/inventories"}>
            <p className="btn__cancel">Cancel</p>
          </Link>
          <button className="btn__save">Save</button>
        </div>
      </form>
    </div>
  );
}
