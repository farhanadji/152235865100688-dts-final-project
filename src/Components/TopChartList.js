import { Link } from "react-router-dom";
import TopChartCard from "./TopChartCard";

const TopChartList = ({ data }) => {
  return (
    <div class="rounded-lg m-10 bg-white w-1/4 h-96 drop-shadow">
      <div class="flex py-3 px-4 justify-start items-center justify-between">
        <div class="font-['bold'] text-2xl">Top chart</div>
        <Link to="/top-chart" className="font-['bold'] text-blue-700">
          SEE ALL {">"}
        </Link>
      </div>
      {data.count}
      <div class="overflow-y-auto h-80 divide-y">
        {data?.map((track, index) => (
          <TopChartCard key={track.key} track={track} number={index + 1} />
        ))}
      </div>
    </div>
  );
};

export default TopChartList;
