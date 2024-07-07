import React, { useState, useEffect } from "react";
import "./App.css";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  const [dateTime, setDateTime] = useState(new Date());
  const [location, setLocation] = useState({ city: '', country: '' });
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    // Update date and time every second
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    // Get user's location
    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords;
      try {
        const response = await fetch(`https://geocode.xyz/${latitude},${longitude}?geoit=json&auth=259213874262281488510x57524`);
        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        setLocation({ city: data.city, country: data.country });
      } catch (error) {
        console.error("Error fetching the location data:", error);
        setFetchError("Could not fetch location data. Please try again later.");
      }
    });

    return () => clearInterval(timer);
  }, []);

  const formatDate = (date) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString();
  };

  return (
    <footer className="footer">
      <div className="grid">
        <div>
          <div className="payment-methods">
            <hr />
            <div className="payment-methods-img">
              <img
                src={process.env.PUBLIC_URL + "/photo/visa.png"}
                alt="Visa"
              />
              <img
                src={process.env.PUBLIC_URL + "/photo/MasterCard_Logo.svg"}
                alt="Mastercard"
              />
              <img
                src={process.env.PUBLIC_URL + "/photo/visa.png"}
                alt="Visa"
              />
              <img
                src={process.env.PUBLIC_URL + "/photo/MasterCard_Logo.svg"}
                alt="Mastercard"
              />
              <img
                src={process.env.PUBLIC_URL + "/photo/visa.png"}
                alt="Visa"
              />
              <img
                src={process.env.PUBLIC_URL + "/photo/MasterCard_Logo.svg"}
                alt="Mastercard"
              />
            </div>
            <hr />
          </div>
          <div className="footer-mid">
            <div className="footer-links">
              <div className="category-links">
                <h3>CATEGORY</h3>
                <ul>
                  <li>
                    <a href="a">FACE</a>
                  </li>
                  <li>
                    <a href="a">BODY</a>
                  </li>
                  <li>
                    <a href="a">SUN CREAM</a>
                  </li>
                  <li>
                    <a href="a">HAIR</a>
                  </li>
                  <li>
                    <a href="a">PERFUME</a>
                  </li>
                  <li>
                    <a href="a">MAKE UP</a>
                  </li>
                </ul>
              </div>
              <div className="about-links">
                <ul>
                  <li>
                    <Link to={'/aboutus'} className="about-us" >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link to={'/contactus'}>Contact Us</Link>
                  </li>
                  <li>
                    <Link to={'/sitemap'}>Site Map</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="followUs">
              <h3>FOLLOW US</h3>
              <ul className="followUs-logo">
                <li>
                  <a href="https://www.clarinsusa.com/">
                    <img
                      src={process.env.PUBLIC_URL + "/photo/facebook.png"}
                      alt="Facebook"
                    ></img>
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/channel/UC_7lNVaR-bVxeQwPRta5RyQ">
                    <img
                      src={process.env.PUBLIC_URL + "/photo/youtube.png"}
                      alt="Youtube"
                    ></img>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/clarinsusa/">
                    <img
                      src={process.env.PUBLIC_URL + "/photo/Instagram_V3.svg"}
                      alt="Instagram"
                    ></img>
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/clarinsusa">
                    <img
                      src={process.env.PUBLIC_URL + "/photo/Twitter_Black.svg"}
                      alt="Twitter"
                    ></img>
                  </a>
                </li>
              </ul>
            </div>
            <div className="clarinsLogo-footer">
              <a href="a">
                <img
                  src={process.env.PUBLIC_URL + "/photo/Ảnh1-removebg.png"} alt="Logo"
                ></img>
              </a>
            </div>
            <div className="newsletter">
              <div className="sign-up">
                <h3>SIGN UP FOR OUR NEWSLETTER</h3>
                <br />
                <input type="email" placeholder="Email Address" />
                <button>Subscribe</button>
              </div>
              <br />
              <div className="need-help">
                <h3>NEED HELPS?</h3>
                {/* <br /> */}
                <p>
                  <a href="mailto:clarins@example.com?subject=Support&body=Message">
                    Email{" "}
                  </a>
                  or call us at <a href="tel:8663252746">(866) 325-2746</a>
                  <br />
                  Monday - Friday (excluding holidays)
                  <br />9 AM - 6:30 PM ET
                </p>
                <p>
                  <a href="a">Chat with Customer Care</a>
                  <br />
                  Monday - Friday (excluding holidays)
                  <br />
                  10 AM - 5 PM ET
                </p>
                <p>
                  <a href="a">Live Consultation</a>
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
      <div className="ticker">
        <marquee behavior="scroll" direction="left">
          {formatDate(dateTime)} | {formatTime(dateTime)} | {location.city}, {location.country}
          {fetchError && <div className="fetch-error">{fetchError}</div>}
        </marquee>
      </div>
      
    </footer>
  );
}

export default Footer;
