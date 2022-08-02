import TopChartCard from "./TopChartCard";

const TopChartList = () => {
  return (
    <div class="rounded-lg m-10 bg-white w-1/4 h-96 drop-shadow">
      <div class="flex py-3 px-4 justify-start items-center justify-between">
        <div class="font-['bold'] text-2xl">Top chart</div>
        <button class="font-['bold'] text-blue-700">SEE ALL ></button>
      </div>
      <div class="overflow-y-auto h-80 divide-y">
        <TopChartCard />
        <TopChartCard />
        <TopChartCard />
        <TopChartCard />
        <TopChartCard />
        <TopChartCard />
        <TopChartCard />
        <TopChartCard />
        <TopChartCard />
        <TopChartCard />
        <TopChartCard />
        <TopChartCard />
        <TopChartCard />
      </div>
    </div>
  );
};

export default TopChartList;
