import HighlightCard from "../Components/HighlightCard";
import TopChartList from "../Components/TopChartList";

const { default: MusicList } = require("../Components/MusicList");

const Home = () => {
  return (
    <div class="container mx-auto">
      <div class="flex">
        <HighlightCard />
        <TopChartList />
      </div>
      <MusicList />
      <MusicList />
      <MusicList />
    </div>
  );
};

export default Home;
