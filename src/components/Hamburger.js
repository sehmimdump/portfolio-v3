import React, { Component } from 'react';
import '../App.sass';
import '../styles/landingpage.sass';
import '../styles/hamburger.sass';
import '../styles/media_Queries/tv.sass';


{/* HAMBURGER */}



export default class Hamburger extends React.Component {

render (){

    const SideNavData = [
        { title: 'EXPEREINCE' , href: 'https://www.instagram.com/' },
        { title: 'PROJECTS' , href: 'https://www.instagram.com/' }
        ]
    return (
        <div className="flex-navbar-hamburger-container">
            <div className="navigation">
              <input type="checkbox" className="navigation_checkbox" id="nav_toggle"></input>
          
              <label htmlFor="nav_toggle" className="navigation_button">                
            </label>
              <div className="navigation_background">{'\u00A0'}</div>
          
              <nav className="navigation_nav">
                <ul className="navigation_list">
                  { SideNavData.map((item, index) => { return (
                  <li key={index} className="navigation_item">
                    <a href={ item.href } className="navigation_link"> { item.title } </a>
                  </li>
                  ) }) }
                </ul>
              </nav>
          
            </div>
          
          </div>
        )
    }
}
