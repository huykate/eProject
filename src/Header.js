import React, { useState,useEffect } from 'react';
import CountUp from 'react-countup';
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
    //Fix header
    const [fix,setFix]=useState(false);
    const handleFix = () =>{
        const offFix = window.scrollY;
        if(offFix > 100)
            {
                setFix(true);
            }
        else
        {
            setFix(false)
        }    
    };
    useEffect(()=>{
        window.addEventListener('scroll',handleFix)
        return ()=>{
            window.removeEventListener('scroll',handleFix)
        };
    },[]);

    return(
        <div className={`bgColor ${fix ? 'Header--fix':'' }`}>
        <div className="Header grid">
            <div className='Header__nav'>
                <ul className='Header__nav--list'>
                    <a className='Header__nav--item' href='gdfgh'>HOME</a>
                    <a className='Header__nav--item' href='gh' onMouseEnter={handleDropDownOpen} onMouseLeave={handleDropDownClose} >PRODUCTS</a> 
                        {dropDown && (
                            <ul onMouseEnter={handleDropDownOpen} onMouseLeave={handleDropDownClose}  className='Header__dropBox'>
                                <a className='Header__dropBox--detail' href='abc'>Body</a>
                                <a className='Header__dropBox--detail' href='abc'>Face</a>
                                <a className='Header__dropBox--detail' href='abc'>Hair</a>
                                <a className='Header__dropBox--detail' href='abc'>Sun Cream </a>
                                <a className='Header__dropBox--detail' href='abc'>Perfumes</a>
                                <a className='Header__dropBox--detail' href='abc'>Make up </a>
                            </ul>
                        )}
                                                                                   
                    <a className='Header__nav--item' href='gdfgh'>GALLERY</a>
                    <a  className='Header__nav--item'href='gdfgh' >ABOUT US</a>
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