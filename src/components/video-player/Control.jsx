import { Slider } from "@mui/material"
import { BiFastForward, BiPause, BiPlay, BiRewind, BiSkipNext, BiSolidVolumeFull, BiSolidVolumeLow, BiSolidVolumeMute } from "react-icons/bi"
import PropTypes from 'prop-types';

export default function Controll({ videoRef, videoState, setVideoState }) {
  Controll.propTypes = {
    videoRef: PropTypes.shape({
      current: PropTypes.object
    }).isRequired,
    videoState: PropTypes.object.isRequired,
    setVideoState: PropTypes.func.isRequired
  };
  const { played, volume, playing, buffer } = videoState
  const formatTime = (time) => {
    //formarting duration of video
    if (isNaN(time)) {
      return "00:00";
    }

    const date = new Date(time * 1000);
    const hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();
    const seconds = date.getUTCSeconds().toString().padStart(2, "0");
    if (hours) {
      //if video have hours
      return `${hours}:${minutes.toString().padStart(2, "0")} `;
    } else return `${minutes}:${seconds}`;
  };

  const currentTime = videoRef.current
    ? videoRef.current.getCurrentTime()
    : "00:00";
  const duration = videoRef.current
    ? videoRef.current.getDuration()
    : "00:00";

  const formatCurrentTime = formatTime(currentTime);
  const formatDuration = formatTime(duration);

  const playPauseHandler = () => {
    setVideoState(current => ({ ...current, playing: !current.playing }))
  }

  const rewindForward = (e) => {
    const currentTime = videoRef.current.getCurrentTime()
    const time = (e.currentTarget.ariaLabel == "rewind" ?
      currentTime - 5 : currentTime + 10)
    videoRef.current.seekTo(time)
  }

  const seekHandler = (e, value) => {
    setVideoState(current => ({ ...current, played: parseFloat(value) / 100 }))
  }

  const seekMouseUpHandler = (e, value) => {
    setVideoState(current => ({ ...current, seeking: false }))
    videoRef.current.seekTo(value / 100)
  }

  const volumeChangeHandler = (e, value) => {
    const newVolume = parseFloat(value) / 100;
    setVideoState({
      ...videoState,
      volume: newVolume,
      muted: Number(newVolume) === 0 ? true : false, // volume === 0 then muted
    })

  };

  const volumeSeekUpHandler = (e, value) => {
    const newVolume = parseFloat(value) / 100;
    setVideoState({
      ...videoState,
      volume: newVolume,
      muted: newVolume === 0 ? true : false,
    })
  };

  return (
    <div className="bg-black/60 absolute top-0 left-0 flex flex-col justify-between z-10 h-full w-full text-purple-600 opacity-0 hover:opacity-100">
      <div className="flex items-center justify-between my-2 mx-5">
        <h2 className="text-slate-200">Video Player</h2>
      </div>
      <div className="flex justify-center items-center h-full" onClick={e => (e.currentTarget == e.target && playPauseHandler())}>
        <div className="px-2.5 text-5xl" aria-label="rewind" onClick={rewindForward}>
          <BiRewind />
        </div>
        <div className="px-2.5 text-5xl cursor-pointer" onClick={playPauseHandler}>
          {/* <div className="animate-spin rounded-full h-8 w-8 border-2 border-purple-600"></div> */}
          {buffer ? <div className="border-gray-300 h-8 w-8 animate-spin rounded-full border-2 border-t-blue-600"></div>
            : playing ? <BiPause /> : <BiPlay />
          }
        </div>
        <div className="px-2.5 text-5xl" name="forward" onClick={rewindForward}>
          <BiFastForward />
        </div>
      </div>
      <div>
        <div className="flex items-center px-4">
          <Slider min={0} max={100} value={played * 100} onChange={seekHandler} onChangeCommitted={seekMouseUpHandler} />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex pb-2.5 items-center w-2/3 text-2xl">
            <div className="px-2.5" onClick={playPauseHandler}>
              {playing ? <BiPause /> : <BiPlay />}
            </div>
            <div className="px-2.5">
              <BiSkipNext />
            </div>
            <div className="px-2.5 group flex gap-4 items-center text-base">
              <div onClick={() => volume == 0 ? setVideoState(current => ({ ...current, volume: current.beforeVolume }))
                : setVideoState(current => ({ ...current, volume: 0, beforeVolume: current.volume }))
              }>
                {volume == 0 ? <BiSolidVolumeMute /> : volume <= 0.3 ? <BiSolidVolumeLow /> : <BiSolidVolumeFull />}
              </div>
              <div className="group-hover:flex hidden items-center w-24 h-0">
                <Slider aria-label="volume" size="small" onChange={volumeChangeHandler} onChangeCommitted={volumeSeekUpHandler} value={volume * 100} />
              </div>
            </div>
            <span className="px-2.5 text-slate-200 text-xs flex">
              {formatCurrentTime}
              <p className="text-slate-200/80">/{formatDuration}</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}