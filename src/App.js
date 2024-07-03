import './App.css';
import './index.css';
import Header from './Header.js';
import { Routes,Route } from 'react-router-dom';
import Main from './HomePage.js';
import AboutUs from './AboutUs.js';
import Footer from './Footer.js';
import ContactUs from './ContactUs.js';
import Sitemap from './Sitemap.js';
import Product from './Products.js';
import Galeery from './Gallery.js';



function App() {

  return (
    <>
      <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='/contactus' element={<ContactUs />} />
          <Route path='/sitemap' element={<Sitemap />} />
          <Route path='/Product' element={<Product />} />
          <Route path='/Gallery' element={<Galeery />} />

        </Routes>
        <Footer /> 
    </>
  );
}


export default App;
