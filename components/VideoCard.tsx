import YouTube, { YouTubePlayer } from "react-youtube";
import { Video } from "@/utils/app.model";
import { extractYouTubeId } from "@/utils/common";
import { useRef } from "react";

const youtubeOptions = {
    width: '100%',
    height: '300px',
    playerVars: {
        autoplay: 0,
        controls: 1,
        modestbranding: 1,
        rel: 0,
        showinfo: 0,
        fs: 1
    }
};

const VideoCard = ({ video }: { video: Video }) => {
  const videoRefs = useRef<{ [key: string]: YouTubePlayer | null }>({});
    return (
        <div className="videoCard" style={{ width: '100%', height: '300px' }}>
            <YouTube
                ref={(ref) => {
                    if (ref) {
                        videoRefs.current[video.id] = ref;
                    }
                }}
                videoId={extractYouTubeId(video.videoUrl)}
                opts={youtubeOptions}
                style={{
                  width: '100%',
                  height: '100%',
                  position: 'relative',
                  objectFit: 'cover'
                }}
                onReady={(event) => {
                    // Pause video on initial load
                    event.target.pauseVideo();
                }}
            />
        </div>
    );
};

export default VideoCard;
