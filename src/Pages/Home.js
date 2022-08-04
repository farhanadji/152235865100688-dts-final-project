import { useEffect, useState } from "react";
import HighlightCard from "../Components/HighlightCard";
import TopChartList from "../Components/TopChartList";
import basicService from "../services/serviceBasic";

const { default: MusicList } = require("../Components/MusicList");

const Home = () => {
  const [topChart, setTopChart] = useState([]);
  const [topIndo, setTopIndo] = useState([]);
  const [topGlobal, setTopGlobal] = useState([]);

  useEffect(() => {
    const fetchTopChartData = async () => {
      try {
        const fetchedData = await basicService.get("charts/track");
        setTopChart(fetchedData.data.tracks);
      } catch (err) {
        console.log(err);
      }
    };

    const fetchTopIndoData = async () => {
      try {
        const fetchedData = await basicService.get("charts/track", {
          params: {
            listId: "ip-country-chart-ID",
          },
        });
        setTopIndo(fetchedData.data.tracks);
      } catch (err) {
        console.log(err);
      }
    };

    const fetchTopGlobal = async () => {
      try {
        const fetchedData = await basicService.get("charts/track", {
          params: {
            listId: "genre-global-chart-1",
          },
        });
        setTopGlobal(fetchedData.data.tracks);
      } catch (err) {
        console.log(err);
      }
    };

    fetchTopChartData();
    fetchTopIndoData();
    fetchTopGlobal();
  }, []);

  return (
    <div class="container mx-auto">
      <div class="flex">
        <HighlightCard data={topChart[0]} />
        <TopChartList data={topChart} />
      </div>
      <MusicList data={topIndo} title={"Top in Indonesia"} />
      <MusicList data={topGlobal} title={"Global pop hits"} />
    </div>
  );
};

export default Home;
