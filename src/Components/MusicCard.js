const MusicCard = () => {
  return (
    <div class="w-48 hover:cursor-pointer">
      <img
        class="w-48 h-48 transition rounded-2xl drop-shadow-3xl hover:drop-shadow-4xl hover:-translate-y-2 hover:z-1 hover:scale-105 transform-gpu duration-300"
        src="https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/45/ce/0d/45ce0d71-a400-c4d4-253b-299eaf34eb5e/8809829712307.jpg/400x400cc.jpg"
        alt="cover"
      ></img>

      <div class="flex flex-wrap">
        <div class="pt-3 font-['bold'] text-lg truncate">
          Titl asdae asdasd adasd adasda
        </div>

        <div class="text-slate-500 font-['regular'] text-sm truncate">
          Artists
        </div>
      </div>
    </div>
  );
};

export default MusicCard;
