import React from 'react';
import { FaHome, FaMailBulk, FaPhone } from 'react-icons/fa';

const Formc = () => {
  const openGoogleMaps = () => {
    // Replace this URL with the Google Maps URL for your desired location
    window.open('https://goo.gl/maps/qRxGbPKdrc9ioVE88', '_blank');
  };

  const sendEmail = () => {
    // Replace this email address with your desired email address
    window.location.href = 'mailto:dineshchowdary326@gmail.com';
  };

  const initiatePhoneCall = () => {
    // Replace this phone number with the desired phone number
    window.location.href = 'tel:+447747736635';
  };

  return (
    <div>
      <br /> <br /> <br />
      <table>
        <tbody>
          <tr>
              <th onClick={initiatePhoneCall}>
                <h4>
                  <FaPhone size={20} style={{ color: '#fff', marginRight: '2rem', cursor: 'pointer'}} />
                  <div>
                    <p style={{ cursor: 'pointer' }}>+44 7747736635</p>
                  </div>
                </h4>
              </th>
          </tr>
          <tr>
           <th onClick={sendEmail}>
              <h4>
                <FaMailBulk size={20} style={{ color: '#fff', marginRight: '2rem', cursor: 'pointer' }} />
                <div>
                  <p style={{ cursor: 'pointer' }} >dineshbellamkonda@icloud.com</p>
                </div>
              </h4>
            </th>
          </tr>
          <tr>
            <th onClick={openGoogleMaps}>
                <FaHome size={20} style={{ color: '#fff', marginRight: '2rem', cursor: 'pointer'}} />
                <div>
                  <p style={{ cursor: 'pointer' }}>110A Burges Road, London, E62BH</p>
                  <p style={{ cursor: 'pointer' }}>United Kingdom</p>
                </div>
            </th>
          </tr>
        </tbody>
      </table>
      <br /> <br /> <br />
      <br /> <br /> <br />
    </div>
  );
};

export default Formc;
