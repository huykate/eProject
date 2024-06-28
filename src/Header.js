import'./App.js';
import CountUp from 'react-countup';

function Header(){
 
    return(
        <div className='bgColor'>
        <div className="Header grid">
            <div className='Header__nav'>
                <ul className='Header__nav--list'>
                    <a className='Header__nav--item' href='gdfgh'>HOME</a>
                    <a className="Header__nav--item dropdown" href='gdfgh'  data-bs-toggle="dropdown" aria-expanded="false" onMouseOver={ProductList}>PRODUCTS</a>
                                       
                    <a className='Header__nav--item' href='gdfgh'>ABOUT US</a>
                    <a className='Header__nav--item' href='gdfgh'>CONTACT US</a>
                </ul>
                <div className='Header__nav--searchBar'>
                    <input className='Header__nav--search' type='text' placeholder='Search here'></input>
                    <button className='Header__nav--btn'><i class='bi bi-search'></i></button>
                </div>
            </div>
            <div className='Header__navRight'>
                <img className='Header__navRight--logo' src={process.env.PUBLIC_URL + '/Ảnh1-removebg-preview.png'} alt="Ảnh 1" />
                <div className='Header__navRight--count'><h2><CountUpExample /></h2></div>
            </div>
        </div>
    </div>        
    );
    
    function ProductList(){
        return(
            <ul class="dropdown-menu">
            <li><a class="dropdown-item" href='abc'>Action</a></li>
            <li><a class="dropdown-item" href='abc'>Another action</a></li>
            <li><a class="dropdown-item" href='abc'>Something else here</a></li>
          </ul>
        )
        
    }

    function CountUpExample(){
        return (
          
            <CountUp end={80000} duration={1.5} />
         
        );
      };
    
}
export default Header;