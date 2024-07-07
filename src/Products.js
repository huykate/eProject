import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Dropdown from 'react-bootstrap/Dropdown';
import QuickViewModal from './QuickViewModal.js';
import './Product.css';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("All");
  const [brand, setBrand] = useState("All");
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    fetch("https://663387b6f7d50bbd9b49b3f2.mockapi.io/products")
      .then((data) => data.json())
      .then((data) => setProducts(data));
  }, []);

  const handleSort = (type) => {
    let sortedProducts = [...products];
    switch (type) {
      case "Name (a to z)":
        sortedProducts.sort((a, b) => a.name.trim().toLowerCase().localeCompare(b.name.trim().toLowerCase()));
        break;
      case "Name (z to a)":
        sortedProducts.sort((a, b) => b.name.trim().toLowerCase().localeCompare(a.name.trim().toLowerCase()));
        break;
      case "Price (high to low)":
        sortedProducts.sort((a, b) => parseFloat(b.price.replace("$", "")) - parseFloat(a.price.replace("$", "")));
        break;
      case "Price (low to high)":
        sortedProducts.sort((a, b) => parseFloat(a.price.replace("$", "")) - parseFloat(b.price.replace("$", "")));
        break;
      default:
        break;
    }
    setProducts(sortedProducts);
  };

  const filteredProducts = products.filter((product) => {
    if (category !== "All" && product.product_type !== category) return false;
    if (brand !== "All" && product.brand !== brand) return false;
    return true;
  });

  const navigate = useNavigate();

  const handleQuickView = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProduct(null);
  };

  return (
    <>
      <div className='Filter grid'>
        <div className='Filter__feature'>
          <Dropdown>
            <Dropdown.Toggle className='Filter__drop' variant="none">
              CATEGORY
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => setCategory("All")}>All</Dropdown.Item>
              <Dropdown.Item onClick={() => setCategory("BODY")}>Body</Dropdown.Item>
              <Dropdown.Item onClick={() => setCategory("FACE")}>Face</Dropdown.Item>
              <Dropdown.Item onClick={() => setCategory("MAKE UP")}>Make up</Dropdown.Item>
              <Dropdown.Item onClick={() => setCategory("HAIR")}>Hair</Dropdown.Item>
              <Dropdown.Item onClick={() => setCategory("SUNSCREEN")}>Suncreen</Dropdown.Item>
              <Dropdown.Item onClick={() => setCategory("PERFUMES")}>Perfumes</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown>
            <Dropdown.Toggle className='Filter__drop' variant="none">
              BRAND
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => setBrand("All")}>All</Dropdown.Item>
              <Dropdown.Item onClick={() => setBrand("CLARINS")}>Clarins</Dropdown.Item>
              <Dropdown.Item onClick={() => setBrand("LOREAL")}>L'oreal</Dropdown.Item>
              <Dropdown.Item onClick={() => setBrand("SHISEIDO")}>Shiseido</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <div className='Filter__sort'>
          <div className='Filter__separation'></div>
          <Dropdown>
            <Dropdown.Toggle className='Filter__sort--drop' variant="none">
              SORT BY
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => handleSort("Name (a to z)")}>Name (a to z)</Dropdown.Item>
              <Dropdown.Item onClick={() => handleSort("Name (z to a)")}>Name (z to a)</Dropdown.Item>
              <Dropdown.Item onClick={() => handleSort("Price (high to low)")}>Price (high to low)</Dropdown.Item>
              <Dropdown.Item onClick={() => handleSort("Price (low to high)")}>Price (low to high)</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
      <div className='grid'>
        <div className='container'>
          <div className='row'>
            {filteredProducts.map((pro) => (
              <div key={pro.id} className='col-md-6 col-lg-4 col-xl-3 '>
                <Card className='Product__layout'>
                  <div onClick={() => navigate(`/Product/${pro.id}`)}>
                    <Card.Img className='Product__img' variant="top" src={process.env.PUBLIC_URL + "../proImg/" + pro.img_url.split(",")[0] + ".jpg"} />
                    <Card.Body>
                      <Card.Title className='Product__title'>{pro.name}</Card.Title>
                      <Card.Text>
                        {pro.price}<br />
                        <div className="product-rating">
                          {"★".repeat(Math.floor(pro.rating)) +
                            "☆".repeat(5 - Math.floor(pro.rating))}
                        </div>
                      </Card.Text>
                    </Card.Body>
                  </div>
                  <Button className='Product__btn' variant="primary" onClick={() => handleQuickView(pro)}>Quick View</Button>
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
