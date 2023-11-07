import ModalForm from "@/routes/_private/dashboard/component/ModalForm.jsx";

/**
 * Modal component for displaying additional information or forms.
 *
 * @param {Object} props - Component properties.
 * @param {Object} props.rowData - Data to display or edit in the modal.
 * @param {boolean} props.isOpen - Controls the visibility of the modal.
 * @param {function} props.closeModal - Callback function to close the modal.
 * @param {function} props.search - Callback function to trigger a search or filter operation.
 * @returns {JSX.Element} The Modal component.
 */
export default function Modal({ rowData, isOpen, closeModal, search }) {
  if (!isOpen) {
    return <></>;
  }
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={closeModal}
      ></div>
      <div className="bg-white p-4 rounded-lg z-50">
        <ModalForm rowData={rowData} closeModal={closeModal} search={search} />
      </div>
    </div>
  );
}
