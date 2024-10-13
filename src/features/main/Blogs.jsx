import BlogCard from "../../components/BlogCard";
import { Link } from "react-router-dom";
import { blogs } from "../../pages/Blogs";

const Blogs = () => {
  return (
    <div className="max-w-[1280px] mx-auto px-4 py-16 min-h-[90vh]">
      <h3 className="text-teal-700 text-3xl font-bold text-center mb-8">
        {" "}
        Popular <span className="text-orange-400">Blogs</span>
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 box-content h-full w-full">
        {blogs.slice(0, 4).map((blog, i) => (
          <BlogCard key={i} id={i} {...blog} />
        ))}
      </div>
      <div className="text-center mt-8">
        <Link
          to={"/blogs"}
          className="text-teal-700  py-2 px-4 rounded-md font-semibold border border-transparent hover:border-teal-700"
        >
          Show more...
        </Link>
      </div>
    </div>
  );
};

export default Blogs;
