import { FaAngleRight } from "react-icons/fa6";
import defaultImg from "../assets/blog.jpeg";
import { Link } from "react-router-dom";

const BlogCard = ({ title, img, id }) => {
  return (
    <div className="w-full flex flex-col rounded-md shadow-md ">
      <img
        src={img ? img : defaultImg}
        alt=""
        className=" rounded-t-md w-full h-1/2 object-fit object-center object-cover"
      />

      <div className="p-4 text-teal-700 flex flex-col gap-4 ">
        <h3 className="text-xl font-semibold capitalize ">
          {title.slice(0, 55) + "..."}
        </h3>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam aperiam
          sapiente earum?
        </p>
        <Link
          to={`/blogs/${id}`}
          className="flex justify-center items-center gap-2 font-semibold text-sm p-2 border border-teal-700  rounded-md mt-4"
        >
          READ MORE <FaAngleRight className="" />
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
