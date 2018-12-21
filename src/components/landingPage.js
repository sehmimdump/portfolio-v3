import React, { Component } from 'react';
import '../App.sass';
import '../styles/landingpage.sass';
import '../styles/hamburger.sass';
import {  } from "../styles/media_Queries/tv.sass";


class LandingPage extends Component {
  render() {
    const NavData = [
      { title: 'Menu' , href: '#menu' },
      { title: 'Location' , href: '#location' },
      { title: 'About Us' , href: '#about' },
      { title: 'Reviews' , href: '#reviews' }
    ]
    const SideNavData = [
      { title: 'EXPEREINCE' , href: 'https://www.instagram.com/' },
      { title: 'PROJECTS' , href: 'https://www.instagram.com/' }
      ]
    return (
      <div className="landingpage">

        <div className="who" >
            {/* ONE */}
            <h1  className="header-main"> WHO AM I ?</h1>
            {/* TOW */}
            <div className="header-sub">
              <h1 className="header-sub-item-first"> ↳ SUB TITLE </h1>
              <h1 className="header-sub-item-second"> ↳ {'     '} SUB TITLE </h1>
              <h1 className="header-sub-item-third"> ↳ SUB TITLE </h1>
            </div>
            {/* THREE */}
            <div className="links" >
              <img className="links-items" src="https://images.vexels.com/media/users/3/137382/isolated/preview/c59b2807ea44f0d70f41ca73c61d281d-linkedin-icon-logo-by-vexels.png" ></img>
              <img className="links-items" src="https://images.vexels.com/media/users/3/137382/isolated/preview/c59b2807ea44f0d70f41ca73c61d281d-linkedin-icon-logo-by-vexels.png" ></img>
              <img className="links-items" src="https://images.vexels.com/media/users/3/137382/isolated/preview/c59b2807ea44f0d70f41ca73c61d281d-linkedin-icon-logo-by-vexels.png" ></img>              
            </div>

            {/* HAMBURGER */}
        <div className="flex-navbar-hamburger-container">
              <div className="navigation" >
                <input type="checkbox" className="navigation_checkbox" id="nav_toggle"></input>
                
                <label htmlFor="nav_toggle" className="navigation_button" >                
                </label>
                <div className="navigation_background" >{'\u00A0'}</div>

                <nav className="navigation_nav">
                    <ul className="navigation_list">
                      {
                        SideNavData.map((item, index) => {
                          return (
                            <li key={index} className="navigation_item">
                              <a href={ item.href } className="navigation_link"> { item.title } </a>
                            </li>
                            )
                        })
                      }
                    </ul>
                </nav>

              </div> 
            
            </div>
        </div>
        
        

      </div>
    );
  }
}

export default LandingPage;
