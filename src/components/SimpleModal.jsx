/**
 * SimpleModal component for displaying additional information or forms.
 *
 * @param {Object} props - Component properties.
 * @param {boolean} props.isOpen - Controls the visibility of the modal.
 * @param {function} props.closeModal - Callback function to close the modal.
 * @param {React.ReactNode} props.children - The content to be displayed within the modal.
 * @returns {JSX.Element} The SimpleModal component.
 */
export default function SimpleModal({ isOpen, closeModal, children }) {
  if (!isOpen) {
    return <></>;
  }
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={closeModal}
      ></div>
      <div className="bg-white p-4 rounded-sm z-50 border-2 border-black">
        {children}
      </div>
    </div>
  );
}
