import "./VideoPlayer.css";
import video from "../../assets/7971025-uhd_3840_2160_24fps.mp4";
import { useRef } from "react";

const VideoPlayer = ({ setPlay, play }) => {
    const player = useRef(null);
    const closePlayer = (e) => {
        if (e.target === player.current) {
            setPlay(false);
        }
    };
    return (
        <div
            ref={player}
            className={`video-player ${play ? "" : "hide"}`}
            onClick={closePlayer}
        >
            <video src={video} autoPlay muted controls></video>
        </div>
    );
};

export default VideoPlayer;
