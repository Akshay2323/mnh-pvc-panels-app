/* eslint-disable @next/next/no-img-element */
import YouTube, { YouTubePlayer } from "react-youtube";
import { extractYouTubeId } from "@/utils/common";
import { useRef } from "react";

// Define your Video type
export interface Video {
  id: string | number;
  videoUrl: string;
}

const youtubeOptions = {
  width: "100%",
  height: "300px",
  playerVars: {
    autoplay: 0,
    controls: 1,
    modestbranding: 1,
    rel: 0,
    showinfo: 0,
    fs: 1,
  },
};

const VideoCard = ({ video }: { video: Video }) => {
  const videoRefs = useRef<{ [key: string]: YouTubePlayer | null }>({});

  const videoId = extractYouTubeId(video.videoUrl);

  if (!videoId) {
    return (
      <div className="videoCard-error">
        <p>Invalid YouTube URL</p>
      </div>
    );
  }

  return (
    <div className="videoCard" style={{ width: "100%", height: "300px" }}>
      <YouTube
        ref={(ref) => {
          if (ref) videoRefs.current[video.id] = ref;
        }}
        videoId={videoId}
        opts={youtubeOptions}
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          objectFit: "cover",
        }}
        onReady={(event) => event.target.pauseVideo()}
      />
    </div>
  );
};

export default VideoCard;
