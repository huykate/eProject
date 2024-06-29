import React from 'react';
import'./App.js';
import './App.css';
import './Footer.css';


function Footer() {
  return (
    <footer className="footer">
      <div className='footer-width'>
        <div  >        
            <div className="payment-methods">  
                <hr />          
                <div className='payment-methods-img'>
                    <img src={process.env.PUBLIC_URL + './photo/visa.png'}  alt="Visa" />
                    <img src={process.env.PUBLIC_URL + './photo/MasterCard_Logo.svg'} alt="Mastercard" />   
                    <img src={process.env.PUBLIC_URL + './photo/visa.png'}  alt="Visa" />
                    <img src={process.env.PUBLIC_URL + './photo/MasterCard_Logo.svg'} alt="Mastercard" />       
                    <img src={process.env.PUBLIC_URL + './photo/visa.png'}  alt="Visa" />
                    <img src={process.env.PUBLIC_URL + './photo/MasterCard_Logo.svg'} alt="Mastercard" />    
                </div>       
                <hr /> 
            </div> 
            <div className="footer-mid">      
                <div className="footer-links">
                    <div className="category-links">
                        <h3>CATEGORY</h3>
                        <ul>
                        <li><a href='#'>FACE</a></li>
                        <li><a href='#'>BODY</a></li>
                        <li><a href='#'>SUN CREAM</a></li>
                        <li><a href='#'>HAIR</a></li>
                        <li><a href='#'>PERFUME</a></li>
                        <li><a href='#'>MAKE UP</a></li>
                        </ul>
                    </div>
                    <div className="about-links">
                        <ul>
                        <li><a className='about-us' href='#'>About Us</a></li>
                        <li><a href='#'>Contact Us</a></li>
                        </ul>
                    </div>
                </div>
                <div className='followUs'>
                    <h3>FOLLOW US</h3>
                    <ul className='followUs-logo'>
                        <li><a href= "https://www.clarinsusa.com/"><img src={process.env.PUBLIC_URL + './photo/facebook.png'}  alt="Facebook"></img></a></li>
                        <li><a href= "https://www.youtube.com/channel/UC_7lNVaR-bVxeQwPRta5RyQ"><img src={process.env.PUBLIC_URL + './photo/youtube.png'}  alt="Youtube"></img></a></li>
                        <li><a href= "https://www.instagram.com/clarinsusa/"><img src={process.env.PUBLIC_URL + './photo/Instagram_V3.svg'}  alt="Instagram"></img></a></li>
                        <li><a href= "https://twitter.com/clarinsusa"><img src={process.env.PUBLIC_URL + './photo/Twitter_Black.svg'}  alt="Twitter"></img></a></li>
                    </ul>

                </div>
                <div className='clarinsLogo-footer'>
                    <a href='#'><img src={process.env.PUBLIC_URL + './photo/Ảnh1-removebg.png'}></img></a>
                </div>
                <div className="newsletter">
                    <h3>SIGN UP FOR OUR NEWSLETTER</h3>
                    <input type="email" placeholder="Email Address" />
                    <button>Subscribe</button>
                    <div>
                        <h3>NEED HELPS?</h3>
                        <p>
                            <a href='#'>Email </a>
                            or call us at <a href='tel:8663252746'>(866) 325-2746</a>
                            <br />
                            Monday - Friday (excluding holidays)
                            <br />
                            9 AM - 6:30 PM ET
                        </p>
                        <p>
                            <a href='#'>Chat with Customer Care</a>
                            <br />
                            Monday - Friday (excluding holidays)
                            <br />
                            10 AM - 5 PM ET
                        </p>
                        <p>
                            <a href='#'>Live Consultation</a>
                            <br />
                            Monday - Friday (excluding holidays)
                            <br />
                            11 AM - 10 PM ET
                        </p>
                    </div>
                

                </div>
            </div>
            
        </div>
        <div className="footer-bottom">
            <p>&copy; 2024 Clarins. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;