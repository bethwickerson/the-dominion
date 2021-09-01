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