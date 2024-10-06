import { Link, useRouteError } from "react-router-dom";
import { TbError404 } from "react-icons/tb";
import { MdOutlineErrorOutline } from "react-icons/md";

const ErrorPage = () => {
  const error = useRouteError();

  const icon =
    error.status === 404 ? <TbError404 /> : <MdOutlineErrorOutline />;

  return (
    <div className="bg-teal-700">
      <div className="max-w-[1280px] mx-auto px-4 flex flex-col justify-center items-center h-screen">
        <div className="text-orange-400 text-9xl">{icon}</div>
        <p className="text-3xl italic font-semibold text-orange-400">
          {error.status === 404 ? "Woops, Page Not found!" : error.statusText}
        </p>
        <div className="text-orange-400">
          Go to{" "}
          <Link className="text-white underline" to={"/"}>
            Homepage
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
