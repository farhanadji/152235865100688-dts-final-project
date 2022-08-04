import { Link } from "react-router-dom";
import TopChartCard from "./TopChartCard";

const TopChartList = () => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  return (
    <div class="rounded-lg m-10 bg-white w-1/4 h-96 drop-shadow">
      <div class="flex py-3 px-4 justify-start items-center justify-between">
        <div class="font-['bold'] text-2xl">Top chart</div>
        <Link to="/top-chart" class="font-['bold'] text-blue-700">
          SEE ALL >
        </Link>
      </div>
      <div class="overflow-y-auto h-80 divide-y">
        {data.map((i) => (
          <TopChartCard number={i} />
        ))}
      </div>
    </div>
  );
};

export default TopChartList;
