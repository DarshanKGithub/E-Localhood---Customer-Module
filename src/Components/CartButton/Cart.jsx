import React from "react";
import "./Cart.css";
import { useNavigate } from "react-router-dom";

function Cart() {
  const navigate = useNavigate("");

  const handleClick = () => {
    navigate("/cart");
  };
  return (
    <div className="cart-btn">
      <button onClick={handleClick}>Cart</button>
    </div>
  );
}

export default Cart;
