import PlayButton from "../Components/PlayButton";
import ShareButton from "../Components/ShareButton";
import VideoCard from "../Components/VideoCard";

const Detail = () => {
  const lyrics = [
    "There once was a ship that put to sea",
    "The name of the ship was the Billy of Tea",
    "The winds blew up, her bow dipped down",
    "O blow, my bully boys, blow (huh)",
    "",
    "Soon may the Wellerman come",
    "To bring us sugar and tea and rum",
    "One day, when the tonguin' is done",
    "We'll take our leave and go",
    "",
    "She had not been two weeks from shore",
    "When down on her, a right whale bore",
    "The captain called all hands and swore",
    "He'd take that whale in tow (huh)",
    "",
    "Soon may the Wellerman come",
    "To bring us sugar and tea and rum",
    "One day, when the tonguin' is done",
    "We'll take our leave and go",
    "",
    "Da-da, da-da-da-da",
    "Da-da-da-da, da-da-da-da-da",
    "Da-da, da-da-da-da",
    "Da-da-da-da-da-da",
    "",
    "Before the boat had hit the water",
    "The whale's tail came up and caught her",
    "All hands to the side, harpooned and fought her",
    "When she dived down low (huh)",
    "",
    "Soon may the Wellerman come",
    "To bring us sugar and tea and rum",
    "One day, when the tonguin' is done",
    "We'll take our leave and go",
    "",
    "No line was cut, no whale was freed",
    "The captain's mind was not on greed",
    "And he belonged to the whaleman's creed",
    "She took the ship in tow (huh)",
    "",
    "Soon may the Wellerman come",
    "To bring us sugar and tea and rum",
    "One day, when the tonguin' is done",
    "We'll take our leave and go",
    "",
    "Da-da, da-da-da-da",
    "Da-da-da-da, da-da-da-da-da",
    "Da-da, da-da-da-da",
    "Da-da-da-da-da-da",
    "",
    "For 40 days, or even more",
    "The line went slack, then tight once more",
    "All boats were lost, there were only four",
    "But still that whale did go (huh)",
    "",
    "Soon may the Wellerman come",
    "To bring us sugar and tea and rum",
    "One day, when the tonguin' is done",
    "We'll take our leave and go",
    "",
    "As far as I've heard, the fight's still on",
    "The line's not cut and the whale's not gone",
    "The Wellerman makes his regular call",
    "To encourage the captain, crew, and all (huh)",
    "",
    "Soon may the Wellerman come",
    "To bring us sugar and tea and rum",
    "One day, when the tonguin' is done",
    "We'll take our leave and go",
    "",
    "Soon may the Wellerman come",
    "To bring us sugar and tea and rum",
    "One day, when the tonguin' is done",
    "We'll take our leave and go",
  ];
  return (
    <div>
      <div class="container mx-auto mt-10">
        <div>
          <div class="w-full h-60 bg-slate-800 rounded-lg flex items-end gap-5">
            <div class="w-60 h-60 rounded-lg bg-white ml-10 -mb-20 drop-shadow-xl"></div>
            <div class="flex flex-col items-start">
              <div class="font-bold text-white text-4xl">Title</div>
              <div class="font-regular text-slate-300 text-lg">Artist 123</div>
              <div class="font-regular text-slate-50 text-sm mb-5 mt-3">
                Category • 123,124 Listeners
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
              <VideoCard />
            </div>
            <div class="flex w-2/5 flex-col items-start">
              <div class="font-bold text-3xl">Lyrics</div>
              <div class="flex flex-col items-start mt-5">
                {lyrics.map((val) =>
                  val !== "" ? <div class="text-slate-500">{val}</div> : <br />
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
