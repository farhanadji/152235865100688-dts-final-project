import LeftButton from "./LeftButton";
import MusicCard from "./MusicCard";
import RightButton from "./RightButton";

const MusicList = () => {
  return (
    <div class="pt-10">
      <div class="mx-10 flex justify-between items-center">
        <div class="font-['bold'] text-3xl">Top Music</div>
        <div class="flex gap-5">
          <LeftButton />
          <RightButton />
        </div>
      </div>
      <div class="px-10 py-8 flex gap-6 overflow-x-auto">
        <MusicCard />
        <MusicCard />
        <MusicCard />
        <MusicCard />
        <MusicCard />
        <MusicCard />
        <MusicCard />
        <MusicCard />
        <MusicCard />
        <MusicCard />
      </div>
    </div>
  );
};

export default MusicList;
