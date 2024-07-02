import './App.css';
import './index.css';
import Header from './Header.js';
import { Routes,Route } from 'react-router-dom';
import Main from './HomePage.js';
import AboutUs from './AboutUs.js';



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
