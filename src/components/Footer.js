import React from 'react'
import "./FooterStyles.css"
import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>

            <div className='left'>

                <div className='location'>
                    <FaHome size={20} style={{color: "#fff", marginRight: "2rem"}}/>
                 
                   <div>
                      <p> Ranchi, Jharkhand</p>
                      <p>India</p>
                   </div>
                </div>

                <div className='phone'>
                    <h4>
                      <FaPhone size={20} style={{color: "#fff", marginRight: "2rem"}}/>
                       +91 7485861328
                    </h4>
                </div>

                <div className='email'>
                    <h4>
                      <FaMailBulk size={20} style={{color: "#fff", marginRight: "2rem"}}/>
                      mousammishra81@gmail.com
                    </h4>
                </div>


            </div>


             <div className='right'>

                <h4>About Me</h4>

                <p>This is me Mousam kumari dedicated Front-end Developer specializing in React js for building dynamic and responsive web applications.
                  Skilled in crafting efficient and maintainable code, with a proven track record of 150+ SQL queries on MYSQL WORKBENCH to optimize 
                   backend data retrieval and manipulation.
                
                    
                </p>

                <div className='social'>
                    <FaFacebook size={30} style={{color: "#fff", marginRight: "1rem"}} />
                    <FaTwitter size={30} style={{color: "#fff", marginRight: "1rem"}} />
                    <FaLinkedin size={30} style={{color: "#fff", marginRight: "1rem"}}/>
                </div>
                </div>
        </div>
    </div>
  )
}

export default Footer