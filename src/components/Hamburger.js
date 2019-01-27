import React, { Component } from 'react';
import '../App.sass';
import '../styles/landingpage.sass';
import '../styles/hamburger.sass';
import '../styles/media_Queries/tv.sass';

import AnchorLink from 'react-anchor-link-smooth-scroll'

{/* HAMBURGER */}



export default class Hamburger extends React.Component {

render (){

    const SideNavData = [
        { title: 'EXPEREINCE' , href: '#' },
        { title: 'PROJECTS' , href: '#projects' }
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
                      <AnchorLink href={ item.href } className="navigation_link"> { item.title } </AnchorLink>
                  </li>
                  ) }) }
                </ul>
              </nav>
          
            </div>
          
          </div>
        )
    }
}
