import ReactPlayer from "react-player";

interface Props {
  videoUrl: any;
}

const VideoPlayer = ({ videoUrl }: Props) => {
  const videoLink =
    videoUrl.results[Math.floor(Math.random() * videoUrl.results.length)];

  return (
    <div className="relative min-h-[60vh]">
      <div className="overlay-gradient z-10"></div>
      <ReactPlayer
        className="absolute top-0 left-0 z-0 h-full w-full"
        url={`https://www.youtube.com/watch?v=${videoLink.key}`}
        playing
        muted={true}
        width="100%"
        height="100%"
        playsinline
      />
    </div>
  );
};

export default VideoPlayer;
