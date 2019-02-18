import React from 'react';
import CardDetails from "./websiteDATA";
import "../../styles/websites.sass";
import "../../styles/media_Queries/tv.sass";
export default class WebsiteProjects extends React.Component {   
   state = {
       large : false,
       projectDetails: {
        title: '',
        img1: '',
        img2: '',
        img3: '',
        link: '',
        github: '',
        what: '',
        does: '',
        how: ''
       }
   }

    handleLarge = (item) =>{
        this.setState({
            large: !this.state.large,
            projectDetails: {
                title: item.title,
                img1: item.img1,
                img2: item.img2,
                img3: item.img3,
                link: item.link,
                github: item.github,
                what: item.what,
                does: item.does,
                how: item.how
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
                CardDetails.map((item, index) => {
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
                                <a href={this.state.projectDetails.github}>
                                    <img src="https://magentys.io/wp-content/uploads/2017/04/github-logo-1.png" className="project-links-img"></img>
                                </a>
                                <a href={this.state.projectDetails.link}>
                                    <img src="http://www.stickpng.com/assets/images/585e4daacb11b227491c339d.png" className="project-links-img"></img>
                                </a>
                            </div>
                            <h5> What it is: </h5>
                            <p>
                                {this.state.projectDetails.what}
                            </p>
                            <h5> What it does: </h5>
                            <p>{this.state.projectDetails.does}</p>
                            <h5> How it is: </h5>
                            <p>{this.state.projectDetails.how}</p>
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
  
