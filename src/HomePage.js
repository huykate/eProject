import './Homepage.css'
import { Slide } from 'react-slideshow-image';
import { useState,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Card from 'react-bootstrap/Card';

import 'react-slideshow-image/dist/styles.css';
function Main(){

  const [currentSlide, setCurrentSlide] = useState(0); //store content's slide

  const handleButtonClick = (index) => {
    setCurrentSlide(index); //update state
    // useEffect(() => {
    //   console.log("Current slide changed to: ", currentSlide); 
    // }, [currentSlide]);
  };
  const responsiveSettings = [
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
          breakpoint: 300,
          settings: {
              slidesToShow: 1,
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
          <button className='Main__banner--btn custom-btn '>see more</button>
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
      <ButtonGroup className='Main__title--btn'  aria-label="Basic example">
        <Button className='Main__title--btnDetail' variant="secondary" onClick={() => handleButtonClick(0)} >Best seller</Button>
        <Button className='Main__title--btnDetail' variant="secondary" onClick={() => handleButtonClick(1)} >What's new</Button>
        <Button className='Main__title--btnDetail' variant="secondary" onClick={() => handleButtonClick(2)} >Exclusive product</Button>
      </ButtonGroup>
      
      <div className='Main__slide'>
      <div className='grid'>
        <Slide cssClass='Main__slide--layout' autoplay={false} canSwipe={false} transitionDuration={500} slidesToScroll={1} slidesToShow={4} currentSlide={currentSlide} responsive={responsiveSettings}  >
        <div className='Main__slide--detail'>
          
        </div>
        <div className='Main__slide--detail'>
         <div>2</div>
        </div>
        <div className='Main__slide--detail'>
         <div>3</div>
        </div>
        <div className='Main__slide--detail'>
         <div>4</div>
        </div>
        <div className='Main__slide--detail'>
         <div>5</div>
        </div>
        <div className='Main__slide--detail'>
         <div>6</div>
        </div>
        <div className='Main__slide--detail'>
         <div>7</div>
        </div>
        <div className='Main__slide--detail'>
         <div>8</div>
         </div>
        </Slide>
      </div>
    </div>
    </div>
    <div className='Main__bestPro '> 
      <div className='Main__bestPro--layout grid'>
        <img className='Main__bestPro--size' src={process.env.PUBLIC_URL + '../img/Aura Perfect/Aura Perfect-1.jpeg'} alt=''></img>
        <div className='Main__bestPro--detail' >
          <div className='Main--text1'>Aura Perfect</div>
          <div className='Main--text2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut</div>
          <button className='Main__bestPro--btn custom-btn'>see more</button>
        </div>
      </div>
    </div>
  </div>
  </>
  )
}

export default Main;