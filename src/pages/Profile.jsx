import { useSelector } from "react-redux";
import Footer from "../features/main/Footer";
import Navbar from "../features/main/Navbar";
import { Link } from "react-router-dom";

const Profile = () => {
  const auth = useSelector((state) => state.auth);
  const results = null;

  return (
    <div className="max-w-[1280px] w-full h-screen mx-auto flex flex-col justify-between items-center ">
      <Navbar />
      {/* <div className="h-full px-4 w-full">
        <div className="text-teal-700 border border-teal-700 p-4 rounded-md  text-lg">
          <h2 className="italic capitalize">Hi,{auth.username}!</h2>
        </div>
        <div className="w-full h-full flex justify-center items-center">
          {!results ? (
            <div className="flex flex-col justify-center items-center gap-2">
              <p className="text-teal-700">
                You don&apos;t have any results yet!
              </p>
              <Link
                to={"/quiz"}
                className="bg-teal-700 text-white py-3 px-4 rounded-md"
              >
                Let&apos;s get started!
              </Link>
            </div>
          ) : (
            ""
          )}
        </div>
      </div> */}
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

export default Profile;
