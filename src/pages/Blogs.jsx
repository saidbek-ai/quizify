import Navbar from "../features/main/Navbar";
import Footer from "../features/main/Footer";
import BlogCard from "../components/BlogCard";
import blogs from "../data/blogs/blogs.js";

const Blogs = () => {
  // console.log(blogs);

  return (
    <div className="h-screen mx-auto flex flex-col justify-between items-center ">
      <Navbar />
      <h2 className="text-teal-700 text-3xl font-bold text-center mt-8">
        {" "}
        Browse our <span className="text-orange-400">Resources</span>
      </h2>

      <div className="max-w-[1280px] w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 md:gap-6 mb-16 mt-8 px-4">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} {...blog} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Blogs;
