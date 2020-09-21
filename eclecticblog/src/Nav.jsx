import React from 'react'
import './Nav.css';

const Nav = () => { 

      return (
        <div className="navbar">
          <img className="Logo" src={require("./images/EclecticBlog.png")}></img>
          <div className="navTitle">
              <a href="https://eclectic-logic.vercel.app/">EclecticLogic</a>
          </div>
        </div>
      )
    }
  
export default Nav;