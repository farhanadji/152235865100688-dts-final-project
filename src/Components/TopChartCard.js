const TopChartCard = () => {
  return (
    <div class="flex items-center py-2 gap-3 hover:bg-slate-100 hover:cursor-pointer transition-colors duration-300">
      <div class="ml-4 mr-2 font-bold">1</div>
      <img
        class="w-12 h-12 rounded-full"
        src="https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/45/ce/0d/45ce0d71-a400-c4d4-253b-299eaf34eb5e/8809829712307.jpg/400x400cc.jpg"
        alt="cover"
      ></img>
      <div class="flex flex-wrap overflow-hidden mr-5">
        <div class="font-['bold'] text-base truncate">
          Title asd asd asdasdasd asdasd asdasd
        </div>
        <div class="text-sm text-slate-500">Artist</div>
      </div>
    </div>
  );
};

export default TopChartCard;
