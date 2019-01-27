import React, { Component } from 'react';
import "../styles/secondPage.sass";
import "../styles/media_Queries/tv.sass";
import AnchorLink from 'react-anchor-link-smooth-scroll'
import MusicProjects from './projects/MusicProjects';
import { TweenMax, TimelineLite, Power2, Elastic, CSSPlugin } from "gsap/TweenMax";
import WebsiteProjects from './projects/WebsiteProjects';

export default class SecondPage extends Component {
  state = {
    catagoryID : '',
    title : 'Projects'
  }

  foo = (data, title) =>{
      this.setState({
          catagoryID: data,
      })
  }

  render() {
    const navData = [
        { title: '| MUSIC |', id: '1' },
        { title: '| WEBSITES | ', id: '2' },
        { title: '| PHOTOS |', id: '3'}
    ]

    
    return (
      <div className="SecondPage-main" id="projects">
        {/* CARD NAV */}

        <div className="card">
            <a className="card_side card_side--front" href="#">
                <h1 className="Header-main"> { this.state.title } </h1>
            </a>
            <div className="card_side card_side--back">
                {
                    navData.map( ( item, index )=>{
                        return (
                            <AnchorLink
                                href="#projects" 
                                onClick={ () => this.foo(item.id, item.title) } 
                                key={ index } className="body-item"> 
                                { item.title }
                            </AnchorLink>
                        )
                    } )
                }
            </div>
        </div>
        <div className="SecondPage-Body">
            <div className="projects">
                {
                    this.state.catagoryID === '1' ? <MusicProjects />: null ||
                    this.state.catagoryID === '2' ? <WebsiteProjects />: null
                    // this.state.catagoryID === '3' ? <MusicProjects />: null
                }
            </div>
        </div>
        
      </div>
    );
  }
}



