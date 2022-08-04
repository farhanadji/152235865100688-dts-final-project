const ShareButton = () => {
  return (
    <div class="bg-neutral-200 flex cursor-pointer rounded-full p-2 gap-3 items-center px-5">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="bg-zinc-800"
        >
          <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
        </svg>
      </div>

      <div class="font-bold text-white text-sm text-zinc-800">SHARE</div>
    </div>
  );
};

export default ShareButton;
