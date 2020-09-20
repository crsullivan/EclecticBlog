import React from 'react';
import './Nav.css';

const Footer = () => { 

      return (
        <div className="footer">
            <p className="copyright">
                Copyright 2020 
                <p className="Name">
                EclecticLogic
                </p>
            </p>
            <img src={require("./images/E_lecticLogi_ Logo (5).png")}></img>
            <div className="links">
                <a class="fab fa-instagram fa-2x" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/eclecticlogic/?hl=en"></a>
                <a class="fab fa-linkedin-in fa-2x" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/eclecticlogic"></a>
                <a class="fab fa-twitter fa-2x" target="_blank" rel="noopener noreferrer" href="https://twitter.com/Eclectic_Logic"></a>
            </div>
        </div>
      )
    }
  
export default Footer;