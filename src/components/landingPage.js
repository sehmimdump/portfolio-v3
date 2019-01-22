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
        {/* NAME */}
          <div>
            <h1 className="header-main" >
              Sehmim Al
            </h1>
          </div>
        {/* IMAGE */}
        <div className="circle-div">
          <img src="https://i.imgur.com/8zzmf4y.jpg" class="circle"></img>
        </div>

        <div class="qualities">
          ♦<a href="#projects"> ♦ Web Developer ♦</a>
          <a href="#projects"> ♦ Artsy Guy ♦</a>
          <a href="#projects"> ♦ Musician ♦</a>♦</div>
                
        <div class="qualities-sub">Please, do have a look around</div>
        <div className="who" >
            {/* THREE */}
            <div className="links" >
              <a href="https://www.linkedin.com/in/sehmim-haque/">
                <img className="links-items" src="https://grytics.com/wp-content/uploads/2015/01/1414386638_linkedin_circle_color-512.png" ></img>
              </a>
              <a href="https://github.com/sehmim">
                <img className="links-items" src="https://magentys.io/wp-content/uploads/2017/04/github-logo-1.png" ></img>
              </a>
              <a href="https://stackoverflow.com/users/9531113/sehmim-al-haque">
                <img className="links-items" src="https://streamdata.io/wp-content/uploads/2018/04/stack-overflow-orange.png" ></img>
              </a>
            </div>
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
    );
  }
}

export default LandingPage;
