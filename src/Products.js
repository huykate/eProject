import Dropdown from 'react-bootstrap/Dropdown';
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



import './Product.css';

function ProductList() { 
    const [products, setProducts] = useState([]);
    useEffect(() => {
    fetch("https://663387b6f7d50bbd9b49b3f2.mockapi.io/products")
      .then((data) => data.json())
      .then((data) => setProducts(data));
    }, []);
    return(
        <>
            <div className='Filter grid'>
                <div className='Filter__feature'>
                    <div className='Filter__drop'>
                        category
                    </div>
                    <div className='Filter__drop'>
                        price
                    </div>
                    <div className='Filter__drop'>
                        brand
                    </div>
                </div>
                
                <div className='Filter__sort'>
                    <div className='Filter__separation'></div>
                    <Dropdown>
                        <Dropdown.Toggle className='Filter__sort--drop' variant="none">
                            Dropdown Button
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item className='' href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>  
            <div className='grid'>
                <div className='container'>
                    <div className='row'>
                         {products.map((pro) =>(
                            <div key={pro.id} className='col-12 col-sm-6 col-md-4 col-lg-3'>
                                <Product 
                                    name={pro.name}
                                    img_url={pro.img_url}
                                    price={pro.price}
                                    rating={pro.rating}
                                    id={pro.id}
                                />
                        </div>))}
                    </div>
                </div> 
            </div>
        </>
    );    
};

function Product({name,img_url,price,rating,id}){
    var pic=img_url?.split(",")[0]+".jpg";

    const navigate = useNavigate();
    return(
        <div onClick={() => navigate(`/Product/${id}`)}>
        <Card className='Product__layout'>
        <Card.Img variant="top" fluid src={process.env.PUBLIC_URL + "../proImg/"+pic}  />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {price }<br />
            <div className="product-rating">
                {"★".repeat(Math.floor(rating)) +
                  "☆".repeat(5 - Math.floor(rating))}
              </div>
          </Card.Text>
          <Button className='Product__btn' variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
         </div>                      


    )
}
export default ProductList;
