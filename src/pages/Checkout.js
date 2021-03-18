import { useState } from "react";
import "./Checkout.css";
import { PropTypes } from "prop-types";
import { Redirect } from "react-router";

function Checkout({ cart, onCreateOrder }) {
  const [formData, setFormData] = useState({
    name: { value: "", modified: false },
    lastName: { value: "", modified: false },
    address: { value: "", modified: false },
    email: { value: "", modified: false },
  });
  function setField(key) {
    return function (event) {
      setFormData({
        ...formData,
        [key]: { value: event.target.value, modified: true },
      });
    };
  }

  function onSubmit(event) {
    event.preventDefault();
    onCreateOrder({
      name: formData.name.value,
      lastName: formData.lastName.value,
      address: formData.address.value,
      email: formData.email.value,
    });
  }

  if (!cart?.items.length > 0) {
    return <Redirect to="/cart" />;
  }

  return (
    <main className="Checkout">
      <form onSubmit={onSubmit}>
        <div className="form-field">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Anacleto"
            required
            value={formData.name.value}
            className={formData.name.modified ? "modified" : ""}
            onChange={setField("name")}
          />
        </div>
        <div className="form-field">
          <label htmlFor="lastname">Last name</label>
          <input
            type="text"
            name="lastname"
            id="lastname"
            placeholder="Ferri"
            required
            value={formData.lastName.value}
            className={formData.lastName.modified ? "modified" : ""}
            onChange={setField("lastName")}
          />
        </div>
        <div className="form-field">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            name="address"
            id="address"
            placeholder="Via Adua, 32, 10060, Baudenasca, TO"
            required
            value={formData.address.value}
            className={formData.address.modified ? "modified" : ""}
            onChange={setField("address")}
          />
        </div>
        <div className="form-field">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="anacleto.ferri@gmail.com"
            required
            value={formData.email.value}
            className={formData.email.modified ? "modified" : ""}
            onChange={setField("email")}
          />
        </div>
        <button type="submit">Complete order</button>
      </form>
    </main>
  );
}

Checkout.propTypes = {
  cart: PropTypes.object,
  onCreateOrder: PropTypes.func.isRequired,
};

export default Checkout;
