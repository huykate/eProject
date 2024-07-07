import React, { useState, useContext } from "react";
import { Modal, Carousel } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { CartContext } from "./Cart";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./ProductDetails.css";
import "./QuickViewModal.css";

function QuickViewModal({ show, handleClose, product }) {
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate(); // Initialize navigate

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setAddedToCart(true);
    alert("Added to cart!");
  };

  const handleBuyNow = () => {
    if (!addedToCart) {
      addToCart(product, quantity);
    }
    handleClose(); // Close the modal
    navigate("/cart"); // Redirect to cart page using navigate
  };

  const parsePrice = (price) => parseFloat(price.replace("$", ""));

  const imageUrls = product.img_url ? product.img_url.split(",") : [];

  return (
    <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>{product.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="product-details">
          <div className="product-images">
            <Carousel>
              {imageUrls.map((url, index) => (
                <Carousel.Item key={index}>
                  <img
                    src={process.env.PUBLIC_URL + "/proImg/" + url.trim() + ".jpg"}
                    alt={`Slide ${index + 1}`}
                    className="d-block w-100"
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
          <div className="product-info">
            <h1>{product.name}</h1>
            <div className="product-stats">
              <div className="product-rating-reviews">
                <div className="product-rating">
                  {"★".repeat(Math.floor(product.rating)) +
                    "☆".repeat(5 - Math.floor(product.rating))}
                </div>
              </div>
              <div className="product-stock-sold">
                <div className="product-stock">Stock: {product.stock}</div>
                <div className="product-sold">Sold: {product.sold}</div>
              </div>
            </div>
            <p className="price">
              <strong>${parsePrice(product.price).toFixed(2)}</strong>
            </p>
            <p className="description truncated">
              {product.description}
            </p>
            <p className="capacity">Capacity: {product.capacity}</p>
            <div className="quantity-section">
              <label htmlFor="quantity">
                <strong>Quantity:</strong>
              </label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
              />
            </div>
            <div className="buttons">
              <button className="buy-button" onClick={handleBuyNow}>
                Buy Product
              </button>
              <button className="add-to-cart-button" onClick={handleAddToCart}>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default QuickViewModal;
