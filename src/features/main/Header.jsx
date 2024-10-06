import { Link } from "react-router-dom";
import HeaderIcon from "./../../assets/header.svg";

const Header = () => {
  return (
    <div className="bg-teal-700">
      <div className="min-h-[90vh] max-w-[1280px] w-full px-4 py-12 md:px-8 md:py-10 mx-auto grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-16  rounded-lg">
        <div className="w-full flex flex-col gap-4 py-12 md:py-0">
          <h1 className="capitalize text-5xl sm:text-3xl lg:text-5xl font-bold text-slate-50 md:w-5/7 text-center md:text-left h-full">
            Play <span className="text-orange-400">online quiz</span> to check
            your english level!
          </h1>
          <p className="text-lg sm:text-md lg:text-lg text-white text-center md:text-left">
            Sharpen your english language skills when and where you want!{" "}
          </p>
          <div className="text-center md:text-left">
            <Link
              to={"/quiz"}
              className="bg-orange-400 w text-white px-8 py-2 rounded-md font-bold"
            >
              Try Now
            </Link>
          </div>
        </div>
        <div className="overflow-hidden relative">
          <img src={HeaderIcon} alt="" className="-ml-12 md:-ml-0" />
        </div>
      </div>
    </div>
  );
};

export default Header;
