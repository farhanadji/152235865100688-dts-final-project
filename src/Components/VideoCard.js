import PlayVideoButton from "./PlayVideoButton";

const VideoCard = () => {
  return (
    <div class="rounded-lg overflow-hidden relative hover:cursor-pointer">
      <img
        src="https://i.ytimg.com/vi/7maJOI3QMu0/maxresdefault.jpg"
        alt="music video"
      />

      <div class="absolute h-full w-full top-0">
        <div class="flex h-full w-full justify-center items-center">
          <PlayVideoButton />
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
