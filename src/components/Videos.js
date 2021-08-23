import React from 'react'
import YouTube from 'react-youtube'

const playlistID = 'PLkDsyQofeFSF7Xa8B7Hi5i0IY19HCjCYQ';

export default function Videos() {
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      rel: 0,
      modestbranding: 1,
      listType: 'playlist',
      list: playlistID
    },
  };
  return (
    <div className="Videos">
      <YouTube videoId="QugktKpx5Gk" opts={opts} />
    </div>

  )
}
 // import React, { useState, useEffect } from 'react'
// import axios from 'axios';
// const API_KEY = 'AIzaSyAKgE715t20jS7WQPXCbaTHiNJ4TZBQVEU';


// export default function Videos() {

//   const [videoFeed, setVideoFeed] = useState([]);

//   const fetchData = async () => {
//     const response = await axios.get('/playlist', {
//       params: {
//         list: 'PLkDsyQofeFSF7Xa8B7Hi5i0IY19HCjCYQ',
//         part: 'snippet',
//         maxResults: 99,
//         key: API_KEY
//       }
//     })
//     setVideoFeed(response.data.items);

//   };


//   // Trigger the fetchData after the initial render by using the useEffect hook
//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h4>Videos</h4>
//       {videoFeed.map(post => (
//         <>{post.snippet.title}</>
//       ))}
//     </div>
//   );
// }