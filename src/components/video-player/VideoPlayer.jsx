import { Container } from '@mui/material'
import ReactPlayer from 'react-player'
import Controll from './Control'
import PropTypes from 'prop-types';
import { useRef, useState } from 'react'

export default function VideoPlayer({ url }) {
  VideoPlayer.propTypes = {
    url: PropTypes.string.isRequired,
  };
  const videoPlayerRef = useRef(null)
  const [videoState, setVideoState] = useState({
    playing: false,
    muted: false,
    volume: 1,
    beforeVolume: 1,
    played: 0,
    seeking: false,
    buffer: true
  })

  const progressHandler = (state) => {
    if (!videoState.seeking) {
      setVideoState(current => ({ ...current, ...state }))
    }
  }

  return (
    <div className='flex flex-col items-center justify-center w-full'>
      <h1>Video Player</h1>
      <Container maxWidth="sm">
        <div className="relative pb-[56.25%]">
          <ReactPlayer
            ref={videoPlayerRef}
            className="absolute top-0 left-0 w-full object-cover"
            url={url}
            width="100%"
            height="100%"
            playing={videoState.playing}
            muted={videoState.muted}
            volume={videoState.volume}
            onProgress={progressHandler}
            onBuffer={() => setVideoState(current => ({ ...current, buffer: true }))}
            onBufferEnd={() => setVideoState(current => ({ ...current, buffer: false }))}
          />
          <Controll videoRef={videoPlayerRef} videoState={videoState} setVideoState={setVideoState} />
        </div>
      </Container>
    </div>
  )
}