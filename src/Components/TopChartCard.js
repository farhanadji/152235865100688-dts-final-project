import { Link } from "react-router-dom";

const TopChartCard = ({ track, number }) => {
  return (
    <Link to={`/detail/${track.key}`}>
      <div class="flex w-full items-center py-2 gap-3 hover:bg-slate-100 hover:cursor-pointer transition-colors duration-300">
        <div class="ml-4 w-8 font-bold">{number}</div>
        <img
          class="w-12 h-12 rounded-lg"
          src={
            track.images?.coverart ? track.images?.coverart : "/not_found.png"
          }
          alt="cover"
        ></img>
        <div class="flex flex-col items-start mr-5 truncate">
          <div class="font-['bold'] text-base ">
            {track.title ? track.title : "-"}
          </div>
          <div class="text-sm text-slate-500">
            {track.subtitle ? track.subtitle : "-"}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default TopChartCard;
