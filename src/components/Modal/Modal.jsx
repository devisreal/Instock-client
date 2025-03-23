import "./Modal.scss";
import closeIcon from "../../assets/icons/close-24px.svg";
import axios from "axios";

export default function Modal({
  setIsModalOpen,
  selectedItem,
  inventoriesPage,
  warehousesPage,
}) {
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleDeleteItem = async (item) => {
    const itemId = item.id;

    try {
      await axios.delete(
        `${import.meta.env.VITE_BACKEND_URL}/${
          inventoriesPage ? "inventories" : "warehouses"
        }/${itemId}`
      );
      setIsModalOpen(false);
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="modal__wrapper">
      <div className="modal">
        <div className="modal__header">
          <img
            className="modal__close-icon"
            src={closeIcon}
            alt="Close modal icon"
            onClick={handleCloseModal}
          />
        </div>
        <div className="modal__main">
          {inventoriesPage && (
            <h2 className="modal__title">
              Delete {selectedItem.item_name} inventory item?
            </h2>
          )}
          {warehousesPage && (
            <h2 className="modal__title">
              Delete {selectedItem.warehouse_name} warehouse?
            </h2>
          )}
          {inventoriesPage && (
            <p className="modal__text">
              Please confirm that you’d like to delete the{" "}
              {selectedItem.item_name} from the invenotry list. You won’t be
              able to undo this action.
            </p>
          )}
          {warehousesPage && (
            <p className="modal__text">
              Please confirm that you’d like to delete the{" "}
              {selectedItem.warehouse_name} from the list of warehouses. You
              won’t be able to undo this action.
            </p>
          )}

          <div className="modal__footer">
            <div className="modal__btn-container">
              <button className="modal__btn" onClick={handleCloseModal}>
                Cancel
              </button>
              <button
                className="modal__btn modal__btn--highlight"
                onClick={() => handleDeleteItem(selectedItem)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
