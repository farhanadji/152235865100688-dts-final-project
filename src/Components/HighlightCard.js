import { Link } from "react-router-dom";

const HighlightCard = ({ data }) => {
  return data ? (
    <div class="m-10 w-3/4 h-96 rounded-lg shadow overflow-hidden hover:drop-shadow-l hover:-translate-y-2  transform-gpu duration-300 hover:cursor-pointer">
      <Link to={`/detail/${data.key}`} style={{ textDecoration: "none" }}>
        <div class="relative">
          <img
            class="h-96"
            src={
              data.images.background ? data.images.background : "/not_found.png"
            }
            alt="highlight"
          />
          <div class="absolute right-0 top-0 bg-gradient-to-l from-transparent to-slate-300 h-96 w-3/5 mr-6"></div>
          <div class="absolute top-0 right-0 h-96 w-8/12">
            <div class="h-96 flex flex-col items-center place-content-center">
              <p class="-mt-10 font-bold text-2xl mb-5">Song of the day</p>
              <p class="font-bold text-7xl text-slate-800">{data.subtitle}</p>
              <p class="font-bold text-3xl text-slate-400">{data.title}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  ) : (
    <div class="m-10 w-3/4 h-96 bg-slate-300 align-center">Loading..</div>
  );
};

export default HighlightCard;
