import "./Modal.scss";

export default function Modal({ deleteStatus, setDeleteStatus }) {
  const handleCloseModal = () => {
    setDeleteStatus(false);
  };

  return (
    <div className="modal">
      <h2 className="modal__title">Delete Washington warehouse?</h2>
      <p className="modal__text">
        Please confirm that you’d like to delete the Washington from the list of
        warehouses. You won’t be able to undo this action.
      </p>
      <div className="modal__btn-container">
        <button className="modal__btn" onClick={handleCloseModal}>
          Cancel
        </button>
        <button className="modal__btn modal__btn--highlight">Delete</button>
      </div>
    </div>
  );
}
