import { Slide } from 'react-slideshow-image';
import { useState,useEffect} from 'react';
import { Link ,useNavigate} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'react-slideshow-image/dist/styles.css';
import './Homepage.css';
function Main(){

    const [products, setProducts] = useState([]);
    useEffect(() => {
    fetch("https://663387b6f7d50bbd9b49b3f2.mockapi.io/products")
      .then((data) => data.json())
      .then((data) => setProducts(data));
    }, []);  
  const responsiveSettings = [
        {
            breakpoint: 1240,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2 ,
                slidesToScroll: 1
            }
        },
        {
          breakpoint: 500,
          settings: {
              slidesToShow: 1 ,
              slidesToScroll: 1
          }
      }
];
  return(
    <>
    <div className='Main'>
    <div className='Main__banner'>
      <div className='Main__banner--detail grid'>  
        <div className='Main__banner--text'>
          <h2 className='Main--text1'>Discover the beauty of 70+ years of Clarins innovation</h2>
          <div className='Main--text2'>Transform your skincare routine with Clarins' proven formulas and decades of expertise - your radiant complexion awaits! 
          </div>
          <Link to={'/Product'} ><button className='Main__banner--btn custom-btn '>see more</button></Link>
        </div>
        <img  className='Main__banner--img' src={process.env.PUBLIC_URL + '../img/Banner-hero img/banner.gif'} alt=''></img>
      </div>
    </div>
    <div className='Main__title'>
      <h1 className='Main__title--big'>Your skin. Our expertise.</h1>
      <h2 className='Main__title--mid'>DISCOVER OUR PLANT-POWERED FORMULAS</h2>
    </div>
    <div className='Main__slide'>
      <div className='grid'>
        <Slide cssClass='Main__slide--layout' autoplay={false} canSwipe={false} transitionDuration={500} slidesToScroll={1} slidesToShow={3} responsive={responsiveSettings}  >
        <div className='Main__slide--detail'>
        <Card style={{ width: '18rem' }}>
          <Card.Img className='Main__slide--img' variant="top" src={process.env.PUBLIC_URL + '../img/Banner-hero img/body.jpg'} />
          <Card.Body className='Main__slide--tiitle' >
            <Card.Title >Body</Card.Title>
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
            <Card.Title>Make up</Card.Title>
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
            <Card.Title>Body</Card.Title>
          </Card.Body>
        </Card> 
        </div>
        </Slide>
      </div>
    </div>
    <div className='Main__title'>
      <h1 className='Main__title--big'>Beauty must-haves</h1>
      <h2 className='Main__title--mid'>DISCOVER OUR ICONIC PRODUCTS</h2>
    
      
      <div className='Main__slide'>
      <div className='grid'>
        <Slide cssClass='Main__slide--layout' autoplay={false} canSwipe={false} transitionDuration={500} slidesToScroll={1} slidesToShow={4} responsive={responsiveSettings}  >
        {products.slice(0,4).map( (pro) => 
        (
          <div key={pro.id} className='Main__slide--detail'>
            <Product
              name={pro.name}
              img_url={pro.img_url}
              price={pro.price}
              rating={pro.rating}
              id={pro.id}
            />
          </div>
        ))}

        </Slide>
      </div>
    </div>
    </div>


    <div className='Main__bestPro '> 
      <div className='Main__bestPro--layout grid'>
        <img className='Main__bestPro--img' src={process.env.PUBLIC_URL + '../proImg/Atelier-Cologne-orange-sanguine-cologne-absolue-1.jpg'} alt=''></img>
        <div className='Main__bestPro--detail' >
          <div className='Main--text1'>Previous Next Atelier Cologne orange sanguine cologne absolue</div>
          <div className='Main--text2'>The formula of this Cologne Absolue is made from 91% renewable natural origin ingredients of the highest quality. </div>
          <Link to={'/Product/30'}><button className='Main__bestPro--btn custom-btn'>see more</button></Link>
        </div>
      </div>
    </div>
  </div>
  </>
  )
}


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

export default Main;