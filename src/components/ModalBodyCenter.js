import "./ProductModal.css";

export default function ModalBodyCenter({
  closeModal,
  isOpen,
  children})

 {
  
  return (
    <>
    {console.log("dentro")}
    {isOpen &&
    <div className="Modal__body">
        <button
          onClick={closeModal}
          title="close product modal"
          className="close"
        >
          ×
        </button>
        {children}
      </div>
    }
    </>
  )
}