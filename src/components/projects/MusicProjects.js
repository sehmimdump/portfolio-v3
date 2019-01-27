import React from 'react';


// Library Components
import MusicPlayer from 'react-responsive-music-player';


export default class MusicProjects extends React.Component {   
   
    render() {
      const playlist = [
        {
          url: 'path/to/mp3',
          cover: 'path/to/jpg',
          title: 'Despacito',
          artist: [
            'Luis Fonsi',
            'Daddy Yankee'
          ]
        }]
      return (
        <div className="" id="Musician">
            <div className="container"> 
              <MusicPlayer playlist={playlist} />
            </div>
        </div>
      ); 
    }
  }
  
