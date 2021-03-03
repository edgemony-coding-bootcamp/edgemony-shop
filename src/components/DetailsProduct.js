
import './DetailsProduct.css'
import React,{useState} from 'react';

export default function DetailsProduct(props) {
  const { title, image, price, description} = props.data;

  return (
    props.isOpen ?
    <div className="modal">
      <div className="modal__overlay"  onClick={()=>props.isOpen()} >
        <div className="modal__body">
            <button type="button" onClick={()=>props.isOpen()} className="btnCloseModal">X</button>
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
