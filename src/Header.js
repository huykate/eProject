import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import'./Header.css';

function Header(){
    // Drop Down for Product
    const[dropDown,setDropDown]=useState(false);
    const handleDropDownOpen= ()=>{
        setDropDown(true);
    };
    const handleDropDownClose= () =>{
        setDropDown(false);
    };

    return(
        <div className='bgColor'>
        <div className="Header grid">
            <div className='Header__nav'>
                <ul className='Header__nav--list'>
                    <Link to={"/"} className='Header__nav--item'>HOME</Link>
                    <Link to={"/Product"} className='Header__nav--item'onMouseEnter={handleDropDownOpen} onMouseLeave={handleDropDownClose} >PRODUCTS</Link> 
                        {dropDown && (
                            <ul onMouseEnter={handleDropDownOpen} onMouseLeave={handleDropDownClose}  className='Header__dropBox'>
                                <Link to={"/"} className='Header__dropBox--detail'>Body</Link>
                                <Link to={"/"} className='Header__dropBox--detail'>Face</Link>
                                <Link to={"/"} className='Header__dropBox--detail'>Hair</Link>
                                <Link to={"/"} className='Header__dropBox--detail'>Sun Cream </Link>
                                <Link to={"/"} className='Header__dropBox--detail'>Perfumes</Link>
                                <Link to={"/"} className='Header__dropBox--detail'>Make up </Link>
                            </ul>
                        )}
                                                                                   
                    <Link to={"/gallery"} className='Header__nav--item'>GALLERY</Link>
                    <Link to={"/aboutus"}  className='Header__nav--item'>ABOUT US</Link>
                    <Link to={"/contactus"} className='Header__nav--item'>CONTACT US</Link>
                </ul>
                <div className='Header__nav--searchBar'>
                    <input className='Header__nav--search' type='text' placeholder='Search here'></input>
                    <button className='Header__nav--btn'><i class='bi bi-search'></i></button>
                </div>
            </div>
            <div className='Header__navRight'>
                <a href='/' ><img className='Header__navRight--logo' src={process.env.PUBLIC_URL + '/Ảnh1-removebg-preview.png'} alt="Ảnh 1" /></a>
                <div className='Header__navRight--count'><h2><CountUpExample /></h2></div>
                <Link to="/cart" className='Header__navRight--cart'>
                        <FontAwesomeIcon icon={faShoppingCart} variant='none' size="2x" />
                </Link>
            </div>
        </div>
        <hr></hr>
    </div>        
    );  
}
    function CountUpExample(){
        return (   
            <CountUp end={80000} duration={1.5} /> 
        );
    };
export default Header;