import React, { Component } from 'react';
import '../App.sass';
import '../styles/landingpage.sass';
import '../styles/hamburger.sass';
import '../styles/media_Queries/tv.sass';

import AnchorLink from 'react-anchor-link-smooth-scroll'
import Hamburger from "./Hamburger";

const NavData = [
  { title: 'Menu' , href: '#menu' },
  { title: 'Location' , href: '#location' },
  { title: 'About Us' , href: '#about' },
  { title: 'Reviews' , href: '#reviews' }
]
class LandingPage extends Component {
  render() {

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
          <AnchorLink href="#projects" >     
            ♦<a  href="projects" >♦ Web Developer ♦</a>
          </AnchorLink> 
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


      <Hamburger />  
      </div>
    );
  }
}

export default LandingPage;
