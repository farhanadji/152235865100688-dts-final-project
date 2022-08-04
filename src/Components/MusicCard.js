import { Link } from "react-router-dom";

const MusicCard = ({ track }) => {
  return (
    <div class="w-48 flex-none hover:cursor-pointer">
      <Link to={`/detail/${track.key}`}>
        <img
          class="m-w-full h-48 transition rounded-2xl drop-shadow-3xl hover:drop-shadow-4xl hover:-translate-y-2 hover:z-1 hover:scale-105 transform-gpu duration-300"
          src={
            track.images?.coverart ? track.images?.coverart : "/not_found.png"
          }
          alt="cover"
        ></img>

        <div class="flex flex-col items-start overflow-hidden">
          <div class="pt-3 font-['bold'] text-lg truncate">
            {track.title ? track.title : "-"}
          </div>

          <div class="text-slate-500 font-['regular'] text-sm">
            {track.subtitle ? track.subtitle : "-"}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MusicCard;
