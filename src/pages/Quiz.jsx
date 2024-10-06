import { Outlet } from "react-router-dom";
import Navbar from "../features/main/Navbar";
import Footer from "../features/main/Footer";

const Quiz = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between items-center">
      <Navbar />
      <div className="h-full w-full max-w-[1280px] mx-auto px-4 py-16 ">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Quiz;
