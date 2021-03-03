
import './DetailsProduct.css'


export default function DetailsProduct(props) {
  const { title, image, price, description} = props.data;
  console.log(props.data)
  return (
    props.isOpen ?
    <div className="modal">
      <div className="modal__overlay"  onClick={()=>props.isOpen()} >
        <div className="modal__body">
            <button type="button" onClick={()=>props.isOpen()} className="btnCloseModal">X</button>
            <h2>{title}</h2>
            <img src={image} alt="product" />
            <p>{description}</p>
            <span>Price: € {price.toFixed(2)}</span>
        </div>
      </div>
    </div>
    :
    <>
    </>
  ) 
}
