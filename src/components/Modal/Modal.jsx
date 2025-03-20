import "./Modal.scss";
import closeIcon from "../../assets/icons/close-24px.svg";

export default function Modal({ deleteStatus, setDeleteStatus }) {
  const handleCloseModal = () => {
    setDeleteStatus(false);
  };

  return (
    <div className="modal">
      <div className="modal__wrapper">
        <div className="modal__header">
          <img
            className="modal__close-icon"
            src={closeIcon}
            alt="Close modal icon"
          />
        </div>
        <h2 className="modal__title">Delete Washington warehouse?</h2>
        <p className="modal__text">
          Please confirm that you’d like to delete the Washington from the list
          of warehouses. You won’t be able to undo this action.
        </p>
        <div className="modal__footer">
          <div className="modal__btn-container">
            <button className="modal__btn" onClick={handleCloseModal}>
              Cancel
            </button>
            <button className="modal__btn modal__btn--highlight">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
}
