import React, { useEffect } from "react";
import axios from "axios"; // Import Axios library

function CartPage({ cart }) {
  const addToCart = (id, title, price) => {
    axios
      .post(`http://10.42.0.158:3000/add`, {
        id: id,
        title: title,
        price: price,
      })
      .then((response) => {
        console.log(response.data);
        alert("Successfully added to product");
        // navigate("/login");
      })
      .catch((err) => {
        console.log(err);
        console.log(err.response);
        alert(err.response.data.error.message);
        alert("Can't add the product ");
      });
  };
  useEffect(addToCart);
  return (
    <div>
      <h2>Cart</h2>
      {cart.length > 0 ? (
        <ul>
          {cart.map((product) => (
            <li key={product.id}>{product.title}</li>
          ))}
        </ul>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
}

export default CartPage;
