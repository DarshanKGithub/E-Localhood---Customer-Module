// Homepage.js

import React, { useState, useEffect } from "react";
import "./Homepage.css";
import { FaSearch } from "react-icons/fa";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Homepage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const navigate = useNavigate();

  const onChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const onSearch = (search) => {
    setLoading(true);
    axios
      .post("http://10.42.0.158:3000/v1/search", {
        search: search,
      })
      .then((res) => {
        if (res.data && Array.isArray(res.data.data)) {
          setData(res.data.data);
          setError(null);
        } else {
          setError("Invalid data format received from the API");
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError("An error occurred while fetching data");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleProductClick = (product) => {
    console.log("product clicked", product);
    setSelectedProduct(product);
    setSearchTerm("");
    setData([]);
    // Use navigate from react-router-dom to navigate to the product details page
    navigate(`product/${product.id}`);
  };

  const clearSuggestions = () => {
    setData([]);
  };
  const handleLogout = () => {
    // Perform logout actions here, such as clearing user session, etc.
    // For now, let's assume you're just redirecting to the login page.
    navigate("/");
    alert("Are you want to confirm logout?");
  };

  useEffect(() => {
    if (searchTerm.trim() !== "") {
      onSearch(searchTerm);
    } else {
      setData([]);
    }
  }, [searchTerm]);

  const renderSuggestions = () => {
    console.log("Rendering suggestion", data);
    if (data.length > 0 || searchTerm.trim() !== "") {
      return (
        <div className="suggestions">
          {data.map((product) => (
            <Link
              to={`/product/${product.id}`}
              key={product.id}
              className="suggestion"
              onClick={() => handleProductClick(product)}
            >
              <div className="product-card">
                <img
                  src={`http://10.42.0.158/product/${product.thumbnail}`} // Fix the image source URL
                  alt={`Product ${product.id}`}
                  className="product-image"
                />
                <div className="product-details">
                  <h3>{product.title}</h3>
                  {/* <p>{product.description}</p> */}
                </div>
              </div>
            </Link>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="homepage">
      <div className="home-nav">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (searchTerm.trim() !== "") {
              onSearch(searchTerm);
            }
          }}
        >
          <div className="search-container">
            <div className="search-inner">
              <input
                type="text"
                placeholder="Search your products & services"
                value={searchTerm}
                onChange={onChange}
                onBlur={clearSuggestions}
                onFocus={() => onSearch(searchTerm)}
              />
              <FaSearch
                className="search-i"
                onClick={() => onSearch(searchTerm)}
              />
            </div>
            {data.length > 0 && renderSuggestions()}
            {data.length === 0 && loading && <p3>No suggestions found</p3>}
          </div>
        </form>
      </div>
      {loading && <div className="loading-message">Loading suggestions...</div>}
      {error && <div className="error-message">Error: {error}</div>}
      {selectedProduct && (
        <div className="selected-product">
          <h2>Selected Product</h2>
          <div className="product-details">
            <h3>{selectedProduct.title}</h3>
            <p>{selectedProduct.description}</p>
          </div>
          <img
            // src={`http://10.42.0.158:3000/v1/thumbnail/${selectedProduct.thumbnail}`} // Fix the image source URL
            alt={`Product ${selectedProduct.id}`}
            className="selected-product-image"
          />
        </div>
      )}
      <button className="btn1" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

export default Homepage;
