import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import { CartContext } from "./Cart";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ProductDetails.css";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [reviewsCount, setReviewsCount] = useState(0);
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `https://663387b6f7d50bbd9b49b3f2.mockapi.io/products/${id}`
        );
        const productData = response.data;
        setProduct(productData);

        // Generate a random number for reviews count less than or equal to the sold count
        const randomReviews = Math.floor(Math.random() * productData.sold) + 1;
        setReviewsCount(randomReviews);

        // Fetch related products
        const relatedResponse = await axios.get(
          "https://663387b6f7d50bbd9b49b3f2.mockapi.io/products"
        ); 

        // Filter related products by product_type
        const filteredRelatedProducts = relatedResponse.data.filter(
          (p) => p.product_type === productData.product_type
        );

        // Shuffle the filtered related products array
        const shuffledRelatedProducts = filteredRelatedProducts.sort(
          () => 0.5 - Math.random()
        );

        setRelatedProducts(shuffledRelatedProducts);
      } catch (error) {
        console.error("Error fetching the product data:", error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <h2>404 NOT FOUND</h2>;
  }

  // Split the img_url string into an array of image URLs if it exists
  const imageUrls = product.img_url ? product.img_url.split(",") : [];

  const handleAddToCart = () => {
    addToCart(product, quantity);
    alert("Added to cart!");
  };

  const handleBuyNow = () => {
    addToCart(product, quantity);
    navigate("/cart");
  };

  const parsePrice = (price) => parseFloat(price.replace("$", ""));

//   const total = parsePrice(product.price) * quantity;

  return (
    <>
      <div className="product-details">
        <div className="product-images">
          <Carousel>
            {imageUrls.map((url, index) => (
              <Carousel.Item key={index}>
                <img
                  src={
                    process.env.PUBLIC_URL + "../proImg/" + url.trim() + ".jpg"
                  }
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
              <a href="#reviews" className="product-reviews">
                {reviewsCount} REVIEWS
              </a>
            </div>
            <div className="product-stock-sold">
              <div className="product-stock">Stock: {product.stock}</div>
              <div className="product-sold">Sold: {product.sold}</div>
            </div>
          </div>
          <p className="price">
            <strong>${parsePrice(product.price).toFixed(2)}</strong>
          </p>
          <p className="description">{product.description}</p>
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

      <div className="related-products">
        <h2>You might also like</h2>
        <div className="related-products-list">
          {relatedProducts.slice(0, 5).map((product) => {
            // Split the img_url string into an array of image URLs if it exists
            const relatedImageUrls = product.img_url
              ? product.img_url.split(",")
              : [];
            const firstImageUrl =
              relatedImageUrls.length > 0 ? relatedImageUrls[0].trim() : null;
            return (
              <div className="related-product-card" key={product.id}>
                {firstImageUrl && (
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "../proImg/" +
                      firstImageUrl +
                      ".jpg"
                    }
                    alt={product.name}
                  />
                )}
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <p>{product.capacity}</p>
                  <p>${parsePrice(product.price).toFixed(2)}</p>
                  <div className="product-rating">
                    {"★".repeat(Math.floor(product.rating)) +
                      "☆".repeat(5 - Math.floor(product.rating))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
