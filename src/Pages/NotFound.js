import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div class="h-screen w-screen flex flex-col gap-5 content-center justify-center -mt-40">
      <div class="font-bold text-9xl text-slate-700">Oops!</div>
      <div class="font-bold text-2xl mt-10 text-slate-400">
        404 - PAGE NOT FOUND
      </div>
      <div class="text-slate-500">
        The page you are looking for might have been removed <br />
        had its name changed or it is temporarily unavailable.
      </div>

      <div class="mt-12">
        <Link
          to="/"
          className="bg-black px-8 py-4 text-white rounded-full font-bold"
        >
          GO TO HOMEPAGE
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
