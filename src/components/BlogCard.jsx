import { FaAngleRight } from "react-icons/fa6";
import defaultImg from "../assets/blog.jpeg";
import { Link } from "react-router-dom";

const limitWord = (limit, str) => {
  const wordsArr = str.split(" ");

  return wordsArr.length > limit
    ? `${wordsArr.slice(0, limit).join(" ")} ...`
    : str;
};

const BlogCard = ({ title, image, id, subtitle }) => {
  // console.log(image);

  const titleWordsLimit = 9;
  const subtitleWordsLimit = 18;

  return (
    <div className="w-full flex flex-col rounded-md shadow-md ">
      <img
        src={image ? image : defaultImg}
        alt=""
        className=" rounded-t-md w-full h-1/2 object-fit object-center object-cover"
      />

      <div className="p-4 text-teal-700 flex flex-col gap-4 ">
        <h3 className="text-xl font-semibold capitalize ">
          {limitWord(titleWordsLimit, title)}
        </h3>
        <p className="text-sm">{limitWord(subtitleWordsLimit, subtitle)}</p>
        <Link
          to={`/blogs/${id}`}
          onClick={() => scrollTo(0, 0)}
          className="flex justify-center items-center gap-2 font-semibold text-sm p-2 border border-teal-700  rounded-md mt-4"
        >
          READ MORE <FaAngleRight className="" />
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
