import './App.css';
import './index.css';
import { Slide } from 'react-slideshow-image';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import 'react-slideshow-image/dist/styles.css'
import Header from './Header.js';


function App() {

  return (
    <>
      <Header />
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
          <Slide cssClass='Main__slide' autoplay={false} canSwipe={false} transitionDuration={500} slidesToScroll={1} slidesToShow={3} indicators={true}  >
          <div className='Main__slide--detail'>
            1
          </div>
          <div className='Main__slide--detail'>
            2
          </div>
          <div className='Main__slide--detail'>
            3
          </div>
          <div className='Main__slide--detail'>
            4
          </div>
          <div className='Main__slide--detail'>
            5
          </div>
          <div className='Main__slide--detail'>
            6 
          </div>
          </Slide>
        </div>
        <div className='Main__title'>
          <h1 className='Main__title--big'>Beauty must-haves</h1>
          <h2 className='Main__title--mid'>DISCOVER OUR ICONIC PRODUCTS</h2>
          <ButtonGroup className='Main__title--btn'  aria-label="Basic example">
            <Button className='Main__title--btnDetail' variant="secondary">Best seller</Button>
            <Button className='Main__title--btnDetail' variant="secondary">What's new</Button>
            <Button className='Main__title--btnDetail' variant="secondary">Exclusive product</Button>
          </ButtonGroup>
          
        <div className='Main__slide'>
          <Slide autoplay={false} canSwipe={false} transitionDuration={500} slidesToScroll={1} slidesToShow={4}  indicators={true }>
            <div className='Main__slide--detail'>
              <div>1</div>
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
        <div className='Main__bestPro'>
          <img className='Main__bestPro--size' src={process.env.PUBLIC_URL + '../img/Aura Perfect/Aura Perfect-1.jpeg'} alt=''></img>
          <div className='Main__bestPro--detail' >
            <div className='Main--text1'>Aura Perfect</div>
            <div className='Main--text2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut</div>
            <button className='Main__bestPro--btn custom-btn'>see more</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
