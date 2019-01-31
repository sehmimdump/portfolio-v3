import React from 'react';

import {  } from "../../styles/music.sass";
// Library Components
import MusicPlayer from 'react-responsive-music-player';


export default class MusicProjects extends React.Component {   
   
  render() {

    const playlist = [
        {
            url: 'http://gdurl.com/ZJaY',
            cover: 'https://78.media.tumblr.com/372d46e1b4f10d7c51feec11f0a59d6a/tumblr_o6ky5xwRBs1sznfdio1_500.gif',
            title: 'Magic Mike',
            artist: [
              'Mim The Human'
            ]
          },
          {
            url: 'http://gdurl.com/pIQS',
            cover: 'http://gifimage.net/wp-content/uploads/2017/10/castle-in-the-sky-gif-7.gif',
            title: 'Orbit',
            artist: [
              'Mim The Human'
            ]
          },
          {
            url: 'http://gdurl.com/qsuq',
            cover: 'https://78.media.tumblr.com/b344a79514fda06bd66e75ecac9b1154/tumblr_o8j74zgCon1vur2auo1_500.gif',
            title: 'If you Call',
            artist: [
              'Mim The Human'
            ]
          },
          {
            url: 'http://gdurl.com/WW-3',
            cover: 'http://oichalialive.gr/wp-content/uploads/2018/04/peftarsteri.gif',
            title: 'The Sun and The Moon',
            artist: [
              'Mim The Human'
            ]
          },              {
            url: 'http://gdurl.com/UPjO',
            cover: 'https://78.media.tumblr.com/372d46e1b4f10d7c51feec11f0a59d6a/tumblr_o6ky5xwRBs1sznfdio1_500.gif',
            title: 'Djore',
            artist: [
              'Mim The Human'
            ]
          }
      ]

  return (
    <div className="" id="Musician">
        <div className="container"> 
          <MusicPlayer playlist={playlist} />
        </div>
    </div>
  ); 
}
}
  
