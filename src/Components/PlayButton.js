const PlayButton = () => {
  return (
    <div class="flex cursor-pointer bg-gray-700 rounded-full p-2 gap-3 items-center">
      <div class="bg-red-400 p-1 rounded-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z" />
        </svg>
      </div>

      <div class="font-bold text-white text-sm mr-3">PLAY FULL SONG</div>
    </div>
  );
};

export default PlayButton;
