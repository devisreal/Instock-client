import { data, Link, useParams } from "react-router-dom";
import back from "../../assets/icons/arrow_back-24px.svg";
import "./EditInventoryPage.scss";
import { useEffect, useState } from "react";
import axios from "axios";

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
      errors["item_name"] = "You must enter a name for the item";
    }
    if (!inventoryItem.description) {
      formIsValid = false;
      errors["description"] = "You must enter a description for the item";
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
          <Link className="back" to={"/"}>
            <img src={back} alt="back to homepage" />
          </Link>
          <h2> Edit Inventory Item</h2>
        </section>
      </div>
      <h3 className="item__title">Item Details</h3>
      <form className="form" onSubmit={submitHandler}>
        <label className="form__label">
          Item Name
          {""}
          <input
            name="item_name"
            onChange={changeHandler}
            value={inventoryItem.item_name}
            className="item__input"
          />
        </label>
        {formErrors.item_name && <p>{formErrors.item_name}</p>}
        <label className="form__label">
          Description {""}
          <textarea
            name="description"
            onChange={changeHandler}
            value={inventoryItem.description}
            className="description__input"
          ></textarea>
          {formErrors.description && <p>{formErrors.description}</p>}
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
        <div className="avaliability">
          <h3>Item Avaliability</h3>
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
                  className="dropdown"
                  type="text"
                  name="quantity"
                  onChange={changeHandler}
                  defaultValue={inventoryItem.quantity}
                />
              </label>
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
        <div className="submit__wrapper">
          <p className="btn__cancel">Cancel</p>
          <button className="btn__save">Save</button>
        </div>
      </form>
    </div>
  );
}
