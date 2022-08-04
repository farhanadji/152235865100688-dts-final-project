import PlayVideoButton from "./PlayVideoButton";

const VideoCard = ({ data }) => {
  return (
    <div class="rounded-lg overflow-hidden relative hover:cursor-pointer">
      <img
        src={data.image.url ? data.image.url : "/not_found.png"}
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
