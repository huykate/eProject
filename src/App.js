import './App.css';
import './index.css';
import Header from './Header.js';
import { Routes,Route } from 'react-router-dom';
import Main from './HomePage.js';
import AboutUs from './AboutUs.js';
import Footer from './Footer.js';
import ContactUs from './ContactUs.js';
import Sitemap from './Sitemap.js';
// import Product from './Products.js';
import Gallery from './Gallery.js';
import ProductDetails from './ProductDetails.js';
import Cart, { CartProvider } from './Cart.js';
import ProductList from './Products.js';



function App() {

  return (
    <>
      <Header />
      <CartProvider>
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/aboutus' element={<AboutUs />} />
            <Route path='/contactus' element={<ContactUs />} />
            <Route path='/sitemap' element={<Sitemap />} />
            <Route path='/Product' element={<ProductList />} />
            <Route path="/Product/category/:selectedCategory" element={<ProductList />} />
            <Route path='/Gallery' element={<Gallery />} />
            <Route path="/Product/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />

          </Routes>
        </CartProvider>
      <Footer /> 
    </>
  );
}


export default App;