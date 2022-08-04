import { Link } from "react-router-dom";

const HighlightCard = () => {
  return (
    <div class="m-10 w-3/4 h-96 rounded-lg shadow overflow-hidden hover:drop-shadow-l hover:-translate-y-2  transform-gpu duration-300 hover:cursor-pointer">
      <Link to="/detail/123" style={{ textDecoration: "none" }}>
        <div class="relative">
          <img
            class="h-96"
            src="https://is4-ssl.mzstatic.com/image/thumb/Features115/v4/3f/84/4e/3f844e97-8c23-b64d-87f1-d536e99f80e9/mzl.rsxdpqqq.jpg/800x800cc.jpg"
            alt="highlight"
          />
          <div class="absolute right-0 top-0 bg-gradient-to-l from-transparent to-slate-300 h-96 w-3/5 mr-6"></div>
          <div class="absolute top-0 right-0 h-96 w-8/12">
            <div class="h-96 flex flex-col items-center place-content-center">
              <p class="-mt-10 font-bold text-2xl mb-5">Song of the day</p>
              <p class="font-bold text-7xl text-slate-800">Yiruma</p>
              <p class="font-bold text-3xl text-slate-400">
                River Flows In You
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default HighlightCard;
