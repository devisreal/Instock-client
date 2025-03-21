import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { parsePhoneNumber } from "libphonenumber-js/min";

import "./AddWarehouseForm.scss";
import errorIcon from "../../assets/icons/error-24px.svg";

const initialFormValues = {
  warehouse_name: "",
  address: "",
  city: "",
  country: "",
  contact_name: "",
  contact_position: "",
  contact_phone: "",
  contact_email: "",
};

//   Format Phone Number to international format using brackets
function formatPhoneNumber(phoneNumberString) {
  var cleaned = ("" + phoneNumberString).replace(/\D/g, "");
  var match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    var intlCode = match[1] ? "+1 " : "";
    return [intlCode, "(", match[2], ") ", match[3], "-", match[4]].join("");
  }
  return null;
}

export default function AddWarehouseForm() {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState({});
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const validateForm = () => {
    let formIsValid = true;
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formValues.warehouse_name) {
      formIsValid = false;
      errors["warehouse_name"] = "This field is required";
    }

    if (!formValues.address) {
      formIsValid = false;
      errors["address"] = "This field is required";
    }

    if (!formValues.city) {
      formIsValid = false;
      errors["city"] = "This field is required";
    }

    if (!formValues.country) {
      formIsValid = false;
      errors["country"] = "This field is required";
    }

    if (!formValues.contact_name) {
      formIsValid = false;
      errors["contact_name"] = "This field is required";
    }

    if (!formValues.contact_position) {
      formIsValid = false;
      errors["contact_position"] = "This field is required";
    }

    if (!parsePhoneNumber(`${formValues.contact_phone}`, "US").isValid()) {
      formIsValid = false;
      errors["contact_phone"] = "Invalid phone number format";
    }

    if (!formValues.contact_phone) {
      formIsValid = false;
      errors["contact_phone"] = "This field is required";
    }

    if (!emailRegex.test(formValues.contact_email)) {
      formIsValid = false;
      errors["contact_email"] = "Please provide valid email";
    }

    if (!formValues.contact_email) {
      formIsValid = false;
      errors["contact_email"] = "This field is required";
    }

    return { formIsValid, errors };
  };

  const addWarehouse = async (values) => {
    try {
      await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/warehouses`,
        values
      );
    } catch (error) {
      console.error(error);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const validationResult = validateForm();
    if (!validationResult.formIsValid) {
      setFormErrors(validationResult.errors);
      return;
    }

    formValues.contact_phone = formatPhoneNumber(formValues.contact_phone);

    console.log(formValues);

    addWarehouse(formValues);
    setFormValues(initialFormValues);
    setFormErrors({});
    navigate("/warehouses");
  };

  return (
    <form className="warehouse-form" onSubmit={handleFormSubmit} noValidate>
      {/* Warehouse Details */}
      <div className="warehouse-form__warehouse-details">
        <h2 className="warehouse-form__section-heading">Warehouse Details</h2>

        <fieldset className="warehouse-form__fieldset">
          {/* Warehouse Name */}
          <div className="warehouse-form__field">
            <label
              htmlFor="warehouse_name"
              className="warehouse-form__field-label"
            >
              Warehouse Name
            </label>
            <input
              type="text"
              id="warehouse_name"
              name="warehouse_name"
              value={formValues.warehouse_name}
              onChange={handleInputChange}
              placeholder="Warehouse Name"
              className={`warehouse-form__field-input ${
                formErrors.warehouse_name
                  ? "warehouse-form__field-input--error"
                  : ""
              }`}
            />

            {formErrors.warehouse_name && (
              <small className="warehouse-form__field-error">
                <img
                  className="warehouse-form__field-error-img"
                  src={errorIcon}
                  alt="Error Icon"
                />
                {formErrors.warehouse_name}
              </small>
            )}
          </div>

          {/* Street Address */}
          <div className="warehouse-form__field">
            <label htmlFor="address" className="warehouse-form__field-label">
              Street Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formValues.address}
              onChange={handleInputChange}
              placeholder="Street Address"
              className={`warehouse-form__field-input ${
                formErrors.address ? "warehouse-form__field-input--error" : ""
              }`}
            />
            {formErrors.address && (
              <small className="warehouse-form__field-error">
                <img
                  className="warehouse-form__field-error-img"
                  src={errorIcon}
                  alt="Error Icon"
                />
                {formErrors.address}
              </small>
            )}
          </div>

          {/* City */}
          <div className="warehouse-form__field">
            <label htmlFor="city" className="warehouse-form__field-label">
              City
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={formValues.city}
              onChange={handleInputChange}
              placeholder="City"
              className={`warehouse-form__field-input ${
                formErrors.city ? "warehouse-form__field-input--error" : ""
              }`}
            />
            {formErrors.city && (
              <small className="warehouse-form__field-error">
                <img
                  className="warehouse-form__field-error-img"
                  src={errorIcon}
                  alt="Error Icon"
                />
                {formErrors.city}
              </small>
            )}
          </div>

          {/* Country */}
          <div className="warehouse-form__field">
            <label htmlFor="country" className="warehouse-form__field-label">
              Country
            </label>
            <input
              type="text"
              id="country"
              name="country"
              value={formValues.country}
              onChange={handleInputChange}
              placeholder="Country"
              className={`warehouse-form__field-input ${
                formErrors.country ? "warehouse-form__field-input--error" : ""
              }`}
            />
            {formErrors.country && (
              <small className="warehouse-form__field-error">
                <img
                  className="warehouse-form__field-error-img"
                  src={errorIcon}
                  alt="Error Icon"
                />
                {formErrors.country}
              </small>
            )}
          </div>
        </fieldset>
      </div>
      <div className="warehouse-form__divider"></div>

      {/* Contact Details */}
      <div className="warehouse-form__contact-details">
        <h2 className="warehouse-form__section-heading">Contact Details</h2>

        <fieldset className="warehouse-form__fieldset">
          {/* Contact Name */}
          <div className="warehouse-form__field">
            <label
              htmlFor="contact_name"
              className="warehouse-form__field-label"
            >
              Contact Name
            </label>
            <input
              type="text"
              id="contact_name"
              name="contact_name"
              value={formValues.contact_name}
              onChange={handleInputChange}
              placeholder="Contact Name"
              className={`warehouse-form__field-input ${
                formErrors.contact_name
                  ? "warehouse-form__field-input--error"
                  : ""
              }`}
            />
            {formErrors.contact_name && (
              <small className="warehouse-form__field-error">
                <img
                  className="warehouse-form__field-error-img"
                  src={errorIcon}
                  alt="Error Icon"
                />
                {formErrors.contact_name}
              </small>
            )}
          </div>

          {/* Position */}
          <div className="warehouse-form__field">
            <label
              htmlFor="contact_position"
              className="warehouse-form__field-label"
            >
              Position
            </label>
            <input
              type="text"
              id="contact_position"
              name="contact_position"
              value={formValues.contact_position}
              onChange={handleInputChange}
              placeholder="Position"
              className={`warehouse-form__field-input ${
                formErrors.contact_position
                  ? "warehouse-form__field-input--error"
                  : ""
              }`}
            />
            {formErrors.contact_position && (
              <small className="warehouse-form__field-error">
                <img
                  className="warehouse-form__field-error-img"
                  src={errorIcon}
                  alt="Error Icon"
                />
                {formErrors.contact_position}
              </small>
            )}
          </div>

          {/* Phone Number */}
          <div className="warehouse-form__field">
            <label
              htmlFor="contact_phone"
              className="warehouse-form__field-label"
            >
              Phone Number
            </label>
            <input
              type="text"
              id="contact_phone"
              name="contact_phone"
              value={formValues.contact_phone}
              onChange={handleInputChange}
              placeholder="Phone Number (+12133734253)"
              className={`warehouse-form__field-input ${
                formErrors.contact_phone
                  ? "warehouse-form__field-input--error"
                  : ""
              }`}
            />
            {formErrors.contact_phone && (
              <small className="warehouse-form__field-error">
                <img
                  className="warehouse-form__field-error-img"
                  src={errorIcon}
                  alt="Error Icon"
                />
                {formErrors.contact_phone}
              </small>
            )}
          </div>

          {/* Email */}
          <div className="warehouse-form__field">
            <label
              htmlFor="contact_email"
              className="warehouse-form__field-label"
            >
              Email
            </label>
            <input
              type="email"
              id="contact_email"
              name="contact_email"
              value={formValues.contact_email}
              onChange={handleInputChange}
              placeholder="Email"
              className={`warehouse-form__field-input ${
                formErrors.contact_email
                  ? "warehouse-form__field-input--error"
                  : ""
              }`}
            />
            {formErrors.contact_email && (
              <small className="warehouse-form__field-error">
                <img
                  className="warehouse-form__field-error-img"
                  src={errorIcon}
                  alt="Error Icon"
                />
                {formErrors.contact_email}
              </small>
            )}
          </div>

          <div className="warehouse-form__action-buttons">
            <button className="warehouse-form__button warehouse-form__button--cancel">
              <Link className="warehouse-form__button-link" to="/warehouses">
                Cancel
              </Link>
            </button>

            <button className="warehouse-form__button" type="submit">
              + Add Warehouse
            </button>
          </div>
        </fieldset>
      </div>
    </form>
  );
}
