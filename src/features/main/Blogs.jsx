import BlogCard from "../../components/BlogCard";
import Vocab from "./../../assets/vocab.png";
import Grammar from "./../../assets/grammar.webp";
import Lsr from "./../../assets/lsr.webp";

const blogs = [
  {
    title: "lorem ipsum",
    img: Vocab,
  },
  {
    title: "dolor sit",
    img: Grammar,
  },
  {
    title: "amet consequesnse",
    img: Lsr,
  },
];

const Blogs = () => {
  return (
    <div className="max-w-[1280px] mx-auto px-4 py-16 min-h-[90vh]">
      <h3 className="text-teal-700 text-3xl font-bold text-center mb-8">
        {" "}
        Popular <span className="text-orange-400">Blogs</span>
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 box-content h-full w-full">
        {blogs.map((blog, i) => (
          <BlogCard key={i} {...blog} />
        ))}
      </div>
      <div className="text-center mt-8">
        <button className="text-teal-700  py-2 px-4 rounded-md font-semibold border border-transparent hover:border-teal-700">
          Show more...
        </button>
      </div>
    </div>
  );
};

export default Blogs;
