import './Homepage.css';
import { Slide } from 'react-slideshow-image';
import { useState, useEffect } from 'react';
import { useNavigate,Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Card from 'react-bootstrap/Card';
import 'react-slideshow-image/dist/styles.css';

function Main() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://663387b6f7d50bbd9b49b3f2.mockapi.io/products");
      const data = await response.json();
      setProducts(data);
      filterProducts(0, data); // Initialize with Best Seller products
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleButtonClick = (index) => {
    setCurrentSlide(index);
    filterProducts(index, products);
  };

  const filterProducts = (index, products) => {
    let filtered = [];
    if (index === 0) {
      filtered = products.filter(product => product.rating === "5" && product.brand === "CLARINS");
    } else if (index === 1) {
      filtered = products.filter(product => product.brand === "CLARINS").sort(() => 0.5 - Math.random());
    } else if (index === 2) {
      filtered = products.filter(product => product.brand === "CLARINS").sort(() => 0.5 - Math.random());
    }
    setFilteredProducts(filtered.slice(0, 9));
  };

  const responsiveSettings = [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        duration: 300, // Adjust duration for smoother transition
        easing: 'ease-in-out' // Use smooth easing function
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        duration: 300,
        easing: 'ease-in-out'
      }
    },
    {
      breakpoint: 300,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        duration: 300,
        easing: 'ease-in-out'
      }
    }
  ];

  return (
    <>
      <div className='Main'>
        <div className='Main__banner'>
          <div className='Main__banner--detail grid'>
            <div className='Main__banner--text'>
              <h2 className='Main--text1'>Discover the beauty of 70+ years of Clarins innovation</h2>
              <div className='Main--text2'>Transform your skincare routine with Clarins' proven formulas and decades of expertise - your radiant complexion awaits!</div>
              <Link to={'/Product'}><button className='Main__banner--btn custom-btn '>see more</button></Link>
            </div>
            <img className='Main__banner--img' src={process.env.PUBLIC_URL + '../img/Banner-hero img/banner.gif'} alt=''></img>
          </div>
        </div>
        <div className='Main__title'>
          <h1 className='Main__title--big'>Your skin. Our expertise.</h1>
          <h2 className='Main__title--mid'>DISCOVER OUR PLANT-POWERED FORMULAS</h2>
        </div>
        <div className='Main__slide'>
          <div className='grid'>
            <Slide cssClass='Main__slide--layout' autoplay={false} canSwipe={false} transitionDuration={500} slidesToScroll={1} slidesToShow={3} responsive={responsiveSettings}>
              <div className='Main__slide--detail'>
                <Card style={{ width: '18rem' }}>
                  <Card.Img className='Main__slide--img' variant="top" src={process.env.PUBLIC_URL + '../img/Banner-hero img/body.jpg'} />
                  <Card.Body className='Main__slide--tiitle'>
                    <Card.Title>Body</Card.Title>
                  </Card.Body>
                </Card>
              </div>
              <div className='Main__slide--detail'>
                <Card style={{ width: '18rem' }}>
                  <Card.Img className='Main__slide--img' variant="top" src={process.env.PUBLIC_URL + '../img/Banner-hero img/face.jpg'} />
                  <Card.Body className='Main__slide--tiitle'>
                    <Card.Title>Face</Card.Title>
                  </Card.Body>
                </Card>
              </div>
              <div className='Main__slide--detail'>
                <Card style={{ width: '18rem' }}>
                  <Card.Img className='Main__slide--img' variant="top" src={process.env.PUBLIC_URL + '../img/Banner-hero img/makup.jpg'} />
                  <Card.Body className='Main__slide--tiitle'>
                    <Card.Title>Make up</Card.Title>
                  </Card.Body>
                </Card>
              </div>
              <div className='Main__slide--detail'>
                <Card style={{ width: '18rem' }}>
                  <Card.Img className='Main__slide--img' variant="top" src={process.env.PUBLIC_URL + '../img/Banner-hero img/sunscreen.jpg'} />
                  <Card.Body className='Main__slide--tiitle'>
                    <Card.Title>Sunscreen</Card.Title>
                  </Card.Body>
                </Card>
              </div>
              <div className='Main__slide--detail'>
                <Card style={{ width: '18rem' }}>
                  <Card.Img className='Main__slide--img' variant="top" src={process.env.PUBLIC_URL + '../img/Banner-hero img/hair.jpg'} />
                  <Card.Body className='Main__slide--tiitle'>
                    <Card.Title>Hair</Card.Title>
                  </Card.Body>
                </Card>
              </div>
              <div className='Main__slide--detail'>
                <Card style={{ width: '18rem' }}>
                  <Card.Img className='Main__slide--img' variant="top" src={process.env.PUBLIC_URL + '../img/Banner-hero img/perfumes.jpg'} />
                  <Card.Body className='Main__slide--tiitle'>
                    <Card.Title>Perfumes</Card.Title>
                  </Card.Body>
                </Card>
              </div>
            </Slide>
          </div>
        </div>
        <div className='Main__title'>
          <h1 className='Main__title--big'>Beauty must-haves</h1>
          <h2 className='Main__title--mid'>DISCOVER OUR ICONIC PRODUCTS</h2>
          <ButtonGroup className='Main__title--btn' aria-label="Basic example">
            <Button className='Main__title--btnDetail' variant="secondary" onClick={() => handleButtonClick(0)}>Best seller</Button>
            <Button className='Main__title--btnDetail' variant="secondary" onClick={() => handleButtonClick(1)}>What's new</Button>
            <Button className='Main__title--btnDetail' variant="secondary" onClick={() => handleButtonClick(2)}>Exclusive product</Button>
          </ButtonGroup>
          <div className='Main__slide'>
            <div className='grid'>
              <Slide cssClass='Main__slide--layout' autoplay={false} canSwipe={false} transitionDuration={500} slidesToScroll={1} slidesToShow={4} responsive={responsiveSettings}>
                {filteredProducts.slice(0, 9).map(product => (
                  <div className='Main__slide--detail' key={product.id}>
                    <Card  onClick={() => navigate(`/Product/${product.id}`)} style={{ width: '18rem' }}>
                      <Card.Img className='Main__slide--img' variant="top" src={process.env.PUBLIC_URL + '../proImg/' + product.img_url.split(",")[0] + ".jpg"} />
                      <Card.Body className='Main__slide--tiitle'>
                        <Card.Title>{product.name}</Card.Title>
                      </Card.Body>
                    </Card>
                  </div>
                ))}
              </Slide>
            </div>
          </div>
        </div>
        <div className='Main__bestPro'>
          <div className='Main__bestPro--layout grid'>
            <img className='Main__bestPro--size' src={process.env.PUBLIC_URL + '../proImg/Atelier-Cologne-orange-sanguine-cologne-absolue-1.jpg'} alt=''></img>
            <div className='Main__bestPro--detail'>
              <div className='Main--text1'>Atelier Cologne orange sanguine cologne absolue</div>
              <div className='Main--text2'>The formula of this Cologne Absolue is made from 91% renewable natural origin ingredients of the highest quality.</div>
              <Link to={'/Product/30'} ><button className='Main__bestPro--btn custom-btn'>see more</button></Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


// function  Product({name,img_url,price,rating,id}){
//   var pic=img_url?.split(",")[0]+".jpg";

//   const navigate = useNavigate();
//   return(
//       <div onClick={() => navigate(`/Product/${id}`)}>
//       <Card className='Product__layout'>
//         <Card.Img className='Product__img' variant="top" src={process.env.PUBLIC_URL + "../proImg/"+pic}  />
//         <Card.Body>
//           <Card.Title>{name}</Card.Title>
//           <Card.Text>
//             {price }<br />
//             <div className="product-rating">
//               {"★".repeat(Math.floor(rating)) +
//               "☆".repeat(5 - Math.floor(rating))}
//             </div>
//           </Card.Text>
//         </Card.Body>
//       </Card>
//        </div>                     
//   )
// }

export default Main;
