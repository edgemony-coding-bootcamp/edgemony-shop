import React from "react";
import { useState } from "react";
import "./Checkout.css"
import { updateCart } from "./../services/api";

function Checkout({cartId}) {
  const [dataInput, setDataInput] = useState({
    name: { value: "", modified: false },
    lastName: { value: "", modified: false },
    address: { value: "", modified: false },
    email: { value: "", modified: false },
  });

  function updateData(field) {
    return function (event) {
      setDataInput({
        ...dataInput,
        [field]: { value: event.target.value, modified: true },
      });
    };
  }

 async function onSubmit(event) {
     event.preventDefault();
    const data = Object.keys(dataInput).reduce(
      (acc, key) => ({
        ...acc,
        [key]: dataInput[key].value,
      }),
      {}
    );
    console.log(data);
    try{
        await updateCart(cartId,data)
        
    }
    catch(error){
        console.error(error.message)
    }
  }
  return (
    <div className="Checkout">
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            value={dataInput.name.value}
            name="name"
            id="name"
            onChange={updateData("name")}
            className={dataInput.name.modified ? "modified" : ""}
            required
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            value={dataInput.lastName.value}
            name="lastName"
            id="lastName"
            className={dataInput.lastName.modified ? "modified" : ""}
            onChange={updateData("lastName")}
            required
          />
          <label htmlFor="address">Address</label>
          <input
            type="text"
            value={dataInput.address.value}
            name="address"
            id="address"
            className={dataInput.address.modified ? "modified" : ""}
            onChange={updateData("address")}
            required
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            value={dataInput.email.value}
            name="email"
            id="email"
            className={dataInput.email.modified ? "modified" : ""}
            onChange={updateData("email")}
            required
          />
        </div>
        <button type="submit">Validate your purchase</button>
      </form>
    </div>
  );
}

export default Checkout;
