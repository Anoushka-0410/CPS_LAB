import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import '../Styles/contactus.css';

function ContactUs() {
  return (
    <div className='wrapper'>
        <div className="text">
            <p className='primary'>Contact Us</p>
            <p className='secondary'>Get in touch</p>
        </div>
        <div className="location-boxes">
            <div className="map-box">
                <MapContainer className='map' center={[28.584791140538854, 77.16380898471955]} zoom={14} scrollWheelZoom={false}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[28.584791140538854, 77.16380898471955]}>
                        <Popup>Right Here!</Popup>
                    </Marker>
                </MapContainer>
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