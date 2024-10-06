import Navbar from "../features/main/Navbar";
import Footer from "../features/main/Footer";

const Blogs = () => {
  return (
    <div className="max-w-[1280px] w-full h-screen mx-auto flex flex-col justify-between items-center ">
      <Navbar />

      <div className="text-center">
        <p className="tex-3xl">We are wokring on it</p>
        <p className="tex-3xl">
          This feature is in development and will be available soon.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Blogs;
