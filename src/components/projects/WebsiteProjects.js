import React from 'react';

import "../../styles/websites.sass";

export default class WebsiteProjects extends React.Component {   
   
    cardDetails = [
        { title:"Portfolio Website" , src: "https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png", footer: "React App" },
        { title:"Hot Dog Stand" , src: "https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png", footer: "React App" },
        { title:"Grocery-man" , src: "https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png", footer: "React App" },
        { title:"Spectral-lights" , src: "https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png", footer: "React App" },
        { title:"Movie-Review" , src: "https://upload.wikimedia.org/wikipedia/commons/1/16/Ruby_on_Rails-logo.png", footer: "React App" },
        { title:"Simple Metronome" , src: "https://cdn-images-1.medium.com/max/1600/0*g3ns8QALNBBH7CBA.", footer: "React App" },
        { title:"Chat App" , src: "", footer: "" },
        { title:"Bank App" , src: "https://www.macupdate.com/images/icons256/51370.png", footer: "" }
    ]

    render() {
      return (
        <div className="websites" id="Websites">
            <div className="container"> <br />
            {
                this.cardDetails.map((item, index) => {
                    return (
                    <div key={index} className="card-body" >
                        <h3 className="card-header"> { item.title }</h3>
                        <img className="card-img" src={item.src}></img>
                    </div>
                    )
                })
            }
            </div>
        </div>
      ); 
    }
  }
  
