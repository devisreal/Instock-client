import { data, Link, useParams } from "react-router-dom";
import back from "../../assets/icons/arrow_back-24px.svg";
import "./EditInventoryPage.scss";
import Select from "react-dropdown-select";
import { useEffect, useState } from "react";
import axios from "axios";

export default function EditInventoryPage() {
  const [inventoryItem, setInventoryItem] = useState(null);
  const { id } = useParams();
  const [error, setError] = useState(false);
  const [categories, setCategories] = useState(null);

  const changeHandler = (e) => {
    const updatedInventoryItem = {
      ...inventoryItem,
      [e.target.name]: e.target.value,
    };

    console.log(e.target.value);
    setInventoryItem(updatedInventoryItem);
  };

  const fetchInventory = async () => {
    try {
      console.log(id);
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

  useEffect(() => {
    fetchInventory();
    fetchCategories();
  }, []);

  if (!inventoryItem || !categories) {
    return <p>Loading.....</p>;
  }

  console.log(inventoryItem);
  console.log(categories);
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
      <h3>Item Details</h3>
      <form action="" className="form">
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
        <label className="form__label">
          Description {""}
          <input
            name="description"
            onChange={changeHandler}
            value={inventoryItem.description}
            className="description__input"
          />
        </label>
        <label className="form__label">
          Category {""}
          <select
            defaultValue={inventoryItem.category}
            className="dropdown"
            name=""
            id=""
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
      </form>
      <div className="avaliability">
        <h3>Item Avaliability</h3>
        <p>Status</p>
        <form className="avaliability__form" action="">
          <label>
            {" "}
            In Stock
            <input type="radio" name="" id="" />
          </label>
          <label>
            {" "}
            Out of Stock
            <input type="radio" name="" id="" defaultChecked />
          </label>
        </form>
        <p>Warehouse</p>
      </div>
      <div className="submit__wrapper">
        <button className="btn__cancel">Cancel</button>
        <button className="btn__save">Save</button>
      </div>
    </div>
  );
}
