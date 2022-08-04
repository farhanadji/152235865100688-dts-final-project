import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div class="w-full bg-white h-16 drop-shadow-md sticky top-0 z-50">
      <div class="container mx-auto flex items-center h-full justify-between">
        <Link to="/">
          <div class="font-bold text-3xl"> Musix</div>
        </Link>
        <div class="">Account</div>
      </div>
    </div>
  );
};

export default Header;
