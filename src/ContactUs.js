import React, { useState } from 'react';
import "./App.js";
import './App.css';
import './ContactUs.css'

function ContactUs() {
    return (
        <div>
            <div className="embed-container">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1548.80858336671!2d-73.98134479469145!3d41.03763645422408!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2e929b3eca7a7%3A0xae02b21a8a5fbacb!2sClarins%20Group!5e0!3m2!1svi!2snl!4v1719865470190!5m2!1svi!2snl"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
            <div className="contact-form-container">
                <ContactForm />
            </div>
        </div>
        
    );
};

function ContactForm() {
    const [messageLength, setMessageLength] = useState(0);

    const handleMessageChange = (e) => {
        setMessageLength(e.target.value.length);
    };

    return (
        <div className="contact-form-container">
            <h1>How may we assist you?</h1>
            <br />
            <h2>Here are some helpful hints:</h2>
            <br />
            <div className="hints">
                <div className="hint-box">
                    <a className="hint-box-icon" href="tel:8663252746">
                        <img src={process.env.PUBLIC_URL + './photo/phone_icon.png'} alt="phone" />
                        <div className="content">
                            <p>Call us</p>
                            <p>(866) 325-2746</p>
                            {/* <a href='tel:8663252746'>(866) 325-2746</a> */}
                            {/* <br /> */}
                        </div>
                    </a>
                </div>
                <div className="hint-box">
                    <a className="hint-box-icon" href="mailto:clarins@example.com?subject=Support&body=Message">
                        <img src={process.env.PUBLIC_URL + './photo/mail_icon.png'} alt="email" />
                        <div className="content">  
                            <p>Send us an email</p>       
                            {/* <a href='mailto:clarins@example.com?subject=Support&body=Message'>Send us an email </a> */}
                            {/* <br /> */}
                        </div>
                    </a>
                </div>
            </div>
            <br />
            <h3>Need more help?</h3>
            <p>Complete the form below to contact our Customer Care team.</p>
            <br />
            <form className="contact-form">
                <div className="form-group">
                    <input type="text" name="firstName" placeholder="First name*" required />
                    <input type="text" name="lastName" placeholder="Last name*" required />
                </div>
                <div className="form-group">
                    <input type="email" name="email" placeholder="Email*" required />
                </div>
                <div className="form-group">
                    <select name="phoneType" required>
                        <option value="">Select phone...</option>
                        <option value="mobile">Mobile</option>
                        <option value="landline">Landline</option>
                    </select>
                    <input type="text" name="phone" placeholder="Phone" />
                </div>
                <div className="form-group">
                    <input type="text" name="orderNumber" placeholder="Order Number (if applicable)" />
                </div>
                <div className="form-group">
                    <select name="question" required>
                        <option value="">Select Question*</option>
                        <option value="order">Order related</option>
                        <option value="product">Product related</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div className="form-group">
                    <textarea
                        name="message"
                        rows="5"
                        placeholder="Enter message"
                        maxLength="250"
                        required
                        onChange={handleMessageChange}
                    ></textarea>
                    <div className="char-count">{messageLength} / 250</div>
                </div>
                <div className="form-group file-upload">
                    <label htmlFor="fileUpload">
                        <span>Accepted file formats: jpg, png, pdf, heic, mov, mp4 (max. 50MB)</span>
                        <span>You can upload one file at a time.</span>
                    </label>
                    <input type="file" id="fileUpload" name="fileUpload" accept=".jpg,.png,.pdf,.heic,.mov,.mp4" />
                    <button type="button" className="upload-button">Upload</button>
                </div>
                <div className="checkbox-group">
                    <label>
                        <input type="checkbox" name="contactByPhone" />
                        Please contact me by phone
                    </label>
                </div>
                <button type="submit" className="submit-button">Send</button>
            </form>
        </div>
    );
};

export default ContactUs;