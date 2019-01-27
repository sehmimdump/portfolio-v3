import React from 'react';
import {IconButton} from 'material-ui/IconButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import "../../styles/websites.sass";
import "../../styles/media_Queries/tv.sass";
export default class WebsiteProjects extends React.Component {   
   state = {
       large : false,
       projectDetails: {
        title: '',
        body: '',
        img1: '',
        img2: '',
        img3: '',
        screenShot: ''
       }
   }
    cardDetails = [
        { title:"Portfolio Website" , src: "https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png", img1: "https://i.imgur.com/glutDQe.png", img2: "https://i.imgur.com/2yh8G31.png", img3: "https://i.imgur.com/f8nxhI7.png" },
        { title:"Hot Dog Stand" , src: "https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png", img1: "https://i.imgur.com/glutDQe.png", img2: "https://i.imgur.com/2yh8G31.png", img3: "https://i.imgur.com/f8nxhI7.png" },
        { title:"Grocery-man" , src: "https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png", img1: "https://i.imgur.com/glutDQe.png", img2: "https://i.imgur.com/2yh8G31.png", img3: "https://i.imgur.com/f8nxhI7.png" },
        { title:"Spectral-lights" , src: "https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png", img1: "https://i.imgur.com/glutDQe.png", img2: "https://i.imgur.com/2yh8G31.png", img3: "https://i.imgur.com/f8nxhI7.png"},
        { title:"Movie-Review" , src: "https://upload.wikimedia.org/wikipedia/commons/1/16/Ruby_on_Rails-logo.png", img1: "https://i.imgur.com/glutDQe.png", img2: "https://i.imgur.com/2yh8G31.png", img3: "https://i.imgur.com/f8nxhI7.png" },
        { title:"Simple Metronome" , src: "https://cdn-images-1.medium.com/max/1600/0*g3ns8QALNBBH7CBA.", img1: "https://i.imgur.com/glutDQe.png", img2: "https://i.imgur.com/2yh8G31.png", img3: "https://i.imgur.com/f8nxhI7.png"},
        { title:"Chat App" , src: "https://images.opencollective.com/proxy/images?src=https%3A%2F%2Fcl.ly%2F3V222R1j1J3Y%2Fsocketiologo.png", img1: "https://i.imgur.com/glutDQe.png", img2: "https://i.imgur.com/2yh8G31.png", img3: "https://i.imgur.com/f8nxhI7.png" },
        { title:"Bank App" , src: "https://www.macupdate.com/images/icons256/51370.png", img1: "https://i.imgur.com/glutDQe.png", img2: "https://i.imgur.com/2yh8G31.png", img3: "https://i.imgur.com/f8nxhI7.png" }
    ]

    handleLarge = (item) =>{
        this.setState({
            large: !this.state.large,
            projectDetails: {
                title: item.title,
                img1: item.img1,
                img2: item.img2,
                img3: item.img3,
            }
        })
    }
    handleClose = () => {
        this.setState({
            large: !this.state.large,
        })
    }

    render() {
      return (
        <div className="websites" id="Websites">
            <div className="container"> <br />
            {
                this.cardDetails.map((item, index) => {
                    return (
                    <a onClick={ ()=> this.handleLarge(item)} key={index} className="card-body" >
                        <img className="card-img" src={item.src}></img>
                        <h3 className="card-header"> { item.title }</h3>
                    </a>
                    )
                })
            }
            {
                this.state.large ?
                // MOVE TO A DIFF COMPONENT LATER
                <div className="Project-body">
                    <div className="headers">
                        <h1 className="header-name">{ this.state.projectDetails.title }</h1>
                        <h1 className="header-cross" onClick={this.handleClose}> X </h1>
                    </div>
                    <div className="project-view" >
                        <div className="project-Slide">
                            <img className="project-Slide-each-1" src={this.state.projectDetails.img1}></img>
                            <img className="project-Slide-each-2" src={this.state.projectDetails.img2}></img>
                            <img className="project-Slide-each-3" src={this.state.projectDetails.img3}></img>
                        </div>
                        <div className="project-details" >
                            <div className="project-links">
                                <a href="">
                                    <img src="https://magentys.io/wp-content/uploads/2017/04/github-logo-1.png" className="project-links-img"></img>
                                </a>
                                <a href="">
                                    <img src="http://www.stickpng.com/assets/images/585e4daacb11b227491c339d.png" className="project-links-img"></img>
                                </a>
                            </div>
                            <h5> What it is: </h5>
                            <p></p>
                            <h5> What it does: </h5>
                            <p></p>
                            <h5> How it is: </h5>
                            <p></p>
                        </div>
                    </div>
                </div>
            
                : null
            }


            </div>
        </div>
      ); 
    }
  }
  
