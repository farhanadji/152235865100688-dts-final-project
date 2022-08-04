import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PlayButton from "../Components/PlayButton";
import ShareButton from "../Components/ShareButton";
import VideoCard from "../Components/VideoCard";
import basicService from "../services/serviceBasic";

const Detail = () => {
  const [data, setData] = useState({});

  let params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedData = await basicService.get("songs/get-details", {
          params: {
            key: `${params?.id}`,
          },
        });
        setData(fetchedData.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <div class="container mx-auto mt-10">
        <div>
          <div class="w-full h-60 bg-slate-800 rounded-lg flex items-end gap-5">
            <img
              class="w-60 h-60 rounded-lg ml-10 -mb-20 drop-shadow-xl"
              src={
                data.images?.coverarthq
                  ? data.images?.coverarthq
                  : "/not_found.png"
              }
              alt="cover"
            />
            <div class="flex flex-col items-start">
              <div class="font-bold text-white text-4xl">
                {data.title ? data.title : "-"}
              </div>
              <div class="font-regular text-slate-300 text-lg">
                {data.subtitle ? data.subtitle : "-"}
              </div>
              <div class="font-regular text-slate-50 text-sm mb-5 mt-3">
                {data.genres?.primary ? data.genres?.primary : "-"} •{" "}
                {data.sections?.find((item) => item.type === "SONG")
                  ?.metadata[0].text
                  ? data.sections?.find((item) => item.type === "SONG")
                      ?.metadata[0].text
                  : "-"}
              </div>
            </div>
          </div>

          <div class="flex w-full mt-5 gap-3">
            <div class="w-1/5"></div>
            <PlayButton />
            <ShareButton />
          </div>

          <div class="w-full flex gap-20 mt-20">
            <div class="flex w-3/5 flex-col items-start gap-4">
              <div class="font-bold text-3xl">Music Videos</div>
              {data.sections?.find((item) => item.type === "VIDEO")
                ?.youtubeurl ? (
                <VideoCard
                  data={
                    data.sections?.find((item) => item.type === "VIDEO")
                      ?.youtubeurl
                  }
                />
              ) : (
                <div class="text-slate-500">Unavailable for this song.</div>
              )}
            </div>
            <div class="flex w-2/5 flex-col items-start">
              <div class="font-bold text-3xl">Lyrics</div>
              <div class="flex flex-col items-start mt-5">
                {data.sections?.find((item) => item.type === "LYRICS") ? (
                  data.sections
                    ?.find((item) => item.type === "LYRICS")
                    .text.map((val) =>
                      val !== "" ? (
                        <div class="text-slate-500">{val}</div>
                      ) : (
                        <br />
                      )
                    )
                ) : (
                  <div class="text-slate-500">Unavailable for this song.</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
