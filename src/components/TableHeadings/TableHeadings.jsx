import "./TableHeadings.scss";
import { Link } from "react-router-dom";
import sortImg from "../../assets/icons/sort-24px.svg";

export default function TableHeadings(page) {
  const { warehousesPage } = page;

  return (
    <div className="table-headings">
      <ul className="table-headings__list">
        <li
          className={`table-headings__table-heading ${
            warehousesPage ? "table-headings__table-heading--first" : ""
          } `}
        >
          {warehousesPage ? "WAREHOUSE" : "INVENTORY ITEM"}
          <img className="table-headings__sort-icon" src={sortImg} alt="" />
        </li>
        <li className="table-headings__table-heading">
          {warehousesPage ? "ADDRESS" : "CATEGORY"}
          <img className="table-headings__sort-icon" src={sortImg} alt="" />
        </li>
        {warehousesPage ? (
          ""
        ) : (
          <li className="table-headings__table-heading table-headings__table-heading--centre">
            STATUS
            <img className="table-headings__sort-icon" src={sortImg} alt="" />
          </li>
        )}
        <li className="table-headings__table-heading">
          {warehousesPage ? "CONTACT NAME" : "QTY"}

          <img className="table-headings__sort-icon" src={sortImg} alt="" />
        </li>
        <li className="table-headings__table-heading ">
          {warehousesPage ? "CONTACT INFORMATION" : "WAREHOUSE"}
          <img className="table-headings__sort-icon" src={sortImg} alt="" />
        </li>

        <li className="table-headings__table-heading">ACTIONS</li>
      </ul>
    </div>
  );
}
