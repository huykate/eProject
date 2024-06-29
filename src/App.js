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
          <img src='' alt=''></img>
        </div>
        <div className='Main__slogan grid'>
          <h1 className='Main__slogan--1'>Your skin. Our expertise.</h1>
          <h2 className='Main__slogan--2'>DISCOVER OUR PLANT-POWERED FORMULAS</h2>
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

        
      </div>
    </>
  );
}

export default App;
