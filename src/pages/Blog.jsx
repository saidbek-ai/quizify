import { useParams } from "react-router-dom";
import blogs from "../data/blogs/blogs";
import Navbar from "../features/main/Navbar";
import Footer from "../features/main/Footer";

const Blog = () => {
  const { id: blogId } = useParams();

  const blog = blogs.find((blog) => blog.id === parseInt(blogId));

  // console.log(blog);

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Navbar />

      <div className="max-w-[1280px] w-full mx-auto px-4 flex justify-center items-center">
        <div className="w-full lg:w-2/3">
          {blog.image && <img src={blog.image} alt="" />}

          <h2 className="text-2xl mb-4 font-bold text-teal-700 text-center mt-4">
            {blog.title}
          </h2>

          <div
            className="styled-content"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          ></div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
