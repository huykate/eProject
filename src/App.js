import './App.css';
import './index.css';
import Header from './Header.js';
import { Routes,Route } from 'react-router-dom';
import Main from './HomePage.js';
import AboutUs from './AboutUs.js';
import Footer from './Footer.js';



function App() {

  return (
    <>
      <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/aboutus' element={<AboutUs />} />
        </Routes>
        <Footer /> 
    </>
  );
}


export default App;
