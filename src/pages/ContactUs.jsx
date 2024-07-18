import React from 'react';
import '../Styles/contactus.css';

function ContactUs() {
  return (
    <div className='wrapper'>
        <div className="text">
            <p className='primary'>Contact Us</p>
            <p className='secondary'>Get in touch</p>
        </div>
        <div className="location-boxes">
            <div className="map">

            </div>
            <div className="info-box">
                <div className="info-content">
                    <p className='primary'>Location</p>
                    <p className='secondary'>Institute of Informatics & Communication</p>
                    <p className='secondary'>University of Delhi South Campus</p>
                    <p className='secondary'>Delhi – 110021</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactUs