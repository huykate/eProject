import './App.css';
import './index.css';
import Header from './Header.js';
import { Routes,Route } from 'react-router-dom';
import Main from './HomePage-Main.js';
import AboutUs from './AboutUs.js';
// import Slide from 'react-slick';


function App() {

  return (
    <>
      <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/aboutus' element={<AboutUs />} />
        </Routes>
    </>
  );
}


export default App;
