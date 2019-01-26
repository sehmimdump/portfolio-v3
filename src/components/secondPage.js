import React, { Component } from 'react';
import "../styles/secondPage.sass";

export default class SecondPage extends Component {
  state = {
    catagoryID : '1'
  }

  sideBar = (data) =>{
    this.setState({
      catagoryID : data
    })
  }


  render() {
    const navData = [
        { title: '| MUSIC |' },
        { title: '| WEBSITES | ' },
        { title: '| PHOTOS |'}
    ]
    return (
      <div className="SecondPage-main" id="projects">
        {/* CARD NAV */}

        <div className="card">
            <a className="card_side card_side--front" href="#">
                <h1 className="Header-main"> Projects </h1>
            </a>
            <div className="card_side card_side--back">
                {
                    navData.map( (item, index)=>{
                        return (
                            <a key={index} className="body-item"> { item.title }</a>
                        )
                    } )
                }
            </div>
        </div>
        <div className="SecondPage-Body">
            <div className="projects">
                {

                }
            </div>
        </div>
        
      </div>
    );
  }
}



