"use client";

import { useState } from "react";
import { CgCloseO } from "react-icons/cg";
import YouTube from "react-youtube";

interface IVideoProps {
  youtubeId: string
}

const VideoPlayer:React.FC<IVideoProps> = ({
  youtubeId
}) => {
  const options = {
    width: "300",
    height: "250"
  };
  const [isOpen, setIsOpen] = useState(true);

  return(
    isOpen ? (
      <div className="fixed bottom-2 right-2">
        <button 
          onClick={() => setIsOpen((state) => !state)}
          className="relative w-full"
        >
          <CgCloseO className="text-color-primary absolute right-1 -top-7 bg-color-secondary rounded-xl px-1" size={32} />
        </button>
        <YouTube
          videoId={youtubeId}
          onReady={(event) => event?.target.pauseVideo()}
          opts={options}
        />
      </div>
    ) : (
      <button 
        onClick={() => setIsOpen((state) => !state)}
        className="fixed bottom-5 right-5 w-32 bg-color-primary text-color-dark text-xl hover:bg-color-accent transition-all shadow-xl"
      >
        Tonton Trailer
      </button>
    )
  )
}

export default VideoPlayer;