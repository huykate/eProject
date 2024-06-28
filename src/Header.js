import'./App.js';

function Header(){
    return(
        <div className='bgColor'>
        <div className="Header grid">
            <div className='Header__nav'>
                <ul className='Header__nav--list'>
                    <a className='Header__nav--item' href='gdfgh'>HOME</a>
                    <a className='Header__nav--item dropdown' data-bs-toggle="dropdown" aria-expanded="false" href='gdfgh'>PRODUCTS</a>
                    <a className='Header__nav--item' href='gdfgh'>ABOUT US</a>
                    <a className='Header__nav--item' href='gdfgh'>CONTACT US</a>
                </ul>
                <div className='Header__nav--searchBar'>
                    <input className='Header__nav--search' type='text' placeholder='Search here'></input>
                    <button className='Header__nav--btn'><i class="bi bi-search"></i></button>
                </div>
            </div>
            <div className='Header__navRight'>
                <img className='Header__navRight--logo' src={process.env.PUBLIC_URL + '/Ảnh1-removebg-preview.png'} alt="Ảnh 1" />
                <h2>Visitor count</h2>
            </div>
        </div>
    </div>        
    );
       
    
    
}
export default Header;