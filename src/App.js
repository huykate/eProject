import './App.css';
import './index.css';
import { Slide } from 'react-slideshow-image';
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
              <h2 className='Main__banner--text1'>Discover the beauty of 70+ years of Clarins innovation</h2>
              <div className='Main__banner--text2'>Transform your skincare routine with Clarins' proven formulas and decades of expertise - your radiant complexion awaits!</div>
              <button className='Main__banner--btn custom-btn '>see more</button>
            </div>
            <img  className='Main__banner--img' src={process.env.PUBLIC_URL + '../img/Banner-hero img/banner.gif'} alt=''></img>
          </div>
        </div>
        <div className='Main__text'>
          <h1 className='Main__text--big'>Your skin. Our expertise.</h1>
          <h2 className='Main__text--mid'>DISCOVER OUR PLANT-POWERED FORMULAS</h2>
        </div>
        
        <Slide cssClass='Main__category' autoplay={false} canSwipe={false} >
            <div className='Main__category--detail'>
              <div>1</div>
              <div>2</div>
              <div>3</div>
            </div>
            <div className='Main__category--detail'>
              <div>4</div>
              <div>5</div>
              <div>6</div>
            </div>
        </Slide>
        <div className='Main__text'>
          <h1 className='Main__text--big'>Beauty must-haves</h1>
          <h2 className='Main__text--mid'>DISCOVER OUR ICONIC PRODUCTS</h2>
        </div>
        
      </div>
    </>
  );
}

export default App;
