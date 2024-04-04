import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./ProductDetails.css";
import { Link } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Fetch product details using the product ID from the URL
    axios
      .get(`http://10.42.0.158:3000/v1/product`, { params: { id } })
      .then((response) => {
        // console.log("234Response data:", response.data.data.id);
        setProduct(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching product details:", error);
      });
  }, [id]);

  const addToCart = () => {
    if (product) {
      setCart([cart, product]);
      alert("Product added to cart!");
    }
  };

  return (
    <div>
      {product ? (
        <div className="product">
          <h2 className="title"> {product.title}</h2>
          <p className="dis">Description: {product.description}</p>
          <p className="price">Price: ₹{product.price}</p>
          <p className="review">
            {product.ratings} Ratings & {product.reviews} Reviews
          </p>
          <p className="rating">{product.rating}</p>
          {/* <p className="off">{product.discounted_price}</p> */}
          <p className="category">{product.category}:</p>
          <p className="img-i">{product.thumbnail}</p>
          <p className="Brand">{product.brand}</p>
          <p className="discount">{product.discountPercentage}%Off</p>
          <button className="Cart" onClick={addToCart}>
            Add to Cart
          </button>
          <div>
            <button className="buy">Buy Now</button>
          </div>
          <div className="product-img">
            <img src={product.thumbnail} alt="" />
          </div>
          <Link className="view-cart" to="/Cartpage">
            View Cart
          </Link>
        </div>
      ) : (
        <p>Loading product details...</p>
      )}
    </div>
  );
}

export default ProductDetails;
