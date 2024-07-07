import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Dropdown from "react-bootstrap/Dropdown";
import QuickViewModal from "./QuickViewModal.js";
import "./Product.css";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [brand, setBrand] = useState("All");
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { selectedCategory } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://663387b6f7d50bbd9b49b3f2.mockapi.io/products")
      .then((data) => data.json())
      .then((data) => {
        setProducts(data);
        if (selectedCategory) {
          filterProducts(data, selectedCategory.toUpperCase(), brand);
        } else {
          setFilteredProducts(data);
        }
      });
  }, []);

  useEffect(() => {
    if (products.length) {
      filterProducts(
        products,
        selectedCategory ? selectedCategory.toUpperCase() : "All",
        brand
      );
    }
  }, [selectedCategory, brand]);

  const handleSort = (type) => {
    let sortedProducts = [...filteredProducts];
    switch (type) {
      case "Name (a to z)":
        sortedProducts.sort((a, b) =>
          a.name.trim().toLowerCase().localeCompare(b.name.trim().toLowerCase())
        );
        break;
      case "Name (z to a)":
        sortedProducts.sort((a, b) =>
          b.name.trim().toLowerCase().localeCompare(a.name.trim().toLowerCase())
        );
        break;
      case "Price (high to low)":
        sortedProducts.sort(
          (a, b) =>
            parseFloat(b.price.replace("$", "")) -
            parseFloat(a.price.replace("$", ""))
        );
        break;
      case "Price (low to high)":
        sortedProducts.sort(
          (a, b) =>
            parseFloat(a.price.replace("$", "")) -
            parseFloat(b.price.replace("$", ""))
        );
        break;
      default:
        break;
    }
    setFilteredProducts(sortedProducts);
  };

  const filterProducts = (products, category, brand) => {
    let filtered = products;
    if (category !== "All") {
      filtered = filtered.filter(
        (product) => product.product_type === category
      );
    }
    if (brand !== "All") {
      filtered = filtered.filter((product) => product.brand === brand);
    }
    setFilteredProducts(filtered);
  };

  const handleQuickView = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProduct(null);
  };

  const handleCategoryChange = (category) => {
    navigate(`/product/category/${category.toLowerCase()}`);
  };

  return (
    <>
      <div className="Filter grid">
        <div className="Filter__feature">
          <Dropdown>
            <Dropdown.Toggle className="Filter__drop" variant="none">
              CATEGORY
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => handleCategoryChange("All")}>
                All
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleCategoryChange("BODY")}>
                Body
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleCategoryChange("FACE")}>
                Face
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleCategoryChange("MAKE UP")}>
                Make up
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleCategoryChange("HAIR")}>
                Hair
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleCategoryChange("SUNSCREEN")}>
                Suncreen
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleCategoryChange("PERFUMES")}>
                Perfumes
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown>
            <Dropdown.Toggle className="Filter__drop" variant="none">
              BRAND
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => setBrand("All")}>All</Dropdown.Item>
              <Dropdown.Item onClick={() => setBrand("CLARINS")}>
                Clarins
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setBrand("LOREAL")}>
                L'oreal
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setBrand("SHISEIDO")}>
                Shiseido
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <div className="Filter__sort">
          <div className="Filter__separation"></div>
          <Dropdown>
            <Dropdown.Toggle className="Filter__sort--drop" variant="none">
              SORT BY
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => handleSort("Name (a to z)")}>
                Name (a to z)
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleSort("Name (z to a)")}>
                Name (z to a)
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleSort("Price (high to low)")}>
                Price (high to low)
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleSort("Price (low to high)")}>
                Price (low to high)
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
      <div className="grid">
        <div className="container">
          <div className="row">
            {filteredProducts.map((pro) => (
              <div key={pro.id} className="col-md-6 col-lg-4 col-xl-3 ">
              <Card className="Product__layout">
                  <div onClick={() => navigate(`/Product/${pro.id}`)}>
                    <Card.Img
                      className="Product__img"
                      variant="top"
                      src={
                        process.env.PUBLIC_URL +
                        "../proImg/" +
                        pro.img_url.split(",")[0] +
                        ".jpg"
                      }
                    />
                    <Card.Body>
                      <Card.Title className="Product__title">
                        {pro.name}
                      </Card.Title>
                      <Card.Text>
                        {pro.price}
                        <br />
                        <div className="Product__rating">
                          {"★".repeat(Math.floor(pro.rating)) +
                            "☆".repeat(5 - Math.floor(pro.rating))}
                        </div>
                      </Card.Text>
                    </Card.Body>
                  </div>
                  <Button
                    className="Product__btn"
                    variant="primary"
                    onClick={() => handleQuickView(pro)}
                  >
                    Quick View
                  </Button>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
      {selectedProduct && (
        <QuickViewModal
          show={showModal}
          handleClose={handleCloseModal}
          product={selectedProduct}
        />
      )}
    </>
  );
}

export default ProductList;