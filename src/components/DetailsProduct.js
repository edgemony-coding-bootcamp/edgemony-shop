
import './DetailsProduct.css'
import React,{useState} from 'react';

export default function DetailsProduct(props) {
  const { title, image, price, description} = props.data;
  const [isClose,setIsClose]=useState(false)
  
 function handleCloseModal(){
    setIsClose(true);
  }

  return (
    !isClose?
    <div className="modal">
      <div className="modal__overlay">
        <div className="modal__body">
            <button type="button" onClick={handleCloseModal} className="btnCloseModal">X</button>
            <h2>{title}</h2>
            <img src={image} />
            <span>€ {price.toFixed(2)}</span>
            <p>{description}</p>
        </div>
      </div>
    </div>
    :
    <>
    </>
  ) 
}
