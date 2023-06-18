import './FormStyles.css'

import React from 'react'
import {FaHome, FaMailBulk, FaPhone} from "react-icons/fa";

const Formc = () => {
  return (
          <div>
            <br/>  <br/>  <br/>
            <table>
              <tr>
                <th>
                    <FaHome size={20} style={{color:"#fff", marginRight: "2rem" }} />
                  <div>
                      <p>110A Burges Road, London, E62BH</p>
                      <p>United Kingdom</p>
                  </div>
                </th>
              </tr>
              <tr>
                <th>
                <h4><FaPhone size={20} style={{color:"#fff", marginRight: "2rem" }} /> 
                    <div>
                          <p>+44 7747736635</p>
                      </div>
                  </h4>
                </th>
              </tr>
              <tr>
                <th>
                <h4><FaMailBulk size={20} style={{color:"#fff", marginRight: "2rem" }} /> 
                      <div>
                          <p>dineshbellamkonda@icloud.com</p>
                      </div>  
                </h4>
                </th>
              </tr>
            </table>
            <br/>  <br/>  <br/>
            <br/>  <br/>  <br/>
          </div>
  )
}

export default Formc