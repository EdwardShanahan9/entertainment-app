import LogoIcon from "../../assets/logo.svg";
import HomeIcon from "../../assets/icon-nav-home.svg";
import MoviesIcon from "../../assets/icon-nav-movies.svg";
import TvIcon from "../../assets/icon-nav-tv-series.svg";
import BookmarkIcon from "../../assets/icon-nav-bookmark.svg";
import AvaterIcon from "../../assets/image-avatar.png";

const Navbar = () => {
  return (
    <nav className="bg-blue-900 p-4 flex items-center justify-between lg:flex-col w-[96px] h-screen">
      <img className="w-[25px] h-[20px]" src={LogoIcon} alt="Logo" />

      <ul className="flex items-center lg:flex-col">
        <li>
          <a href="#">
            <img className="w-4 h-4 mr-6" src={HomeIcon} alt="Home Icon" />
          </a>
        </li>
        <li>
          <a href="#">
            <img className="w-4 h-4 mr-6" src={MoviesIcon} alt="Movies Icon" />
          </a>
        </li>
        <li>
          <a href="#">
            <img className="w-4 h-4 mr-6" src={TvIcon} alt="Tv Series Icon" />
          </a>
        </li>
        <li>
          <a href="#">
            <img
              className="w-4 h-4 mr-6"
              src={BookmarkIcon}
              alt="Bookmark Series Icon"
            />
          </a>
        </li>
      </ul>

      <a href="">
        <img
          className="w-6 rounded-full border-white border-2"
          src={AvaterIcon}
          alt="Avatar Icon"
        />
      </a>
    </nav>
  );
};

export default Navbar;
