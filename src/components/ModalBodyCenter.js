import "./ProductModal.css";

export default function ProductModal({
  closeModal,
  isOpen,
  children})

 {
  
  return (
    <div className={`ModalProduct ${isOpen ? `isOpen` : ""}`}>
      {console.log(isOpen)}
    <div className="overlay" onClick={closeModal} />
    <div className="body">
        <button
          onClick={closeModal}
          title="close product modal"
          className="close"
        >
          ×
        </button>
        {children}
      </div>
    </div>
  )
}