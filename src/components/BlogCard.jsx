import { useState } from "react";

const BlogCard = ({ title, img }) => {
  const [hover, setHover] = useState(false);

  console.log(hover);

  return (
    <div
      className=" w-full relative drop-shadow-md shadow-md rou"
      onMouseOverCapture={() => setHover(true)}
      onMouseOut={() => setHover(false)}
    >
      <img
        src={img}
        alt=""
        className="size-full object-cover object-center rounded-md"
      />
      <h3
        className={`absolute bottom-0 left-0 right-0 text-md px-2 py-2 text-teal-700 shadow-xl bg-white/60 backdrop-blur-sm  text-center rounded-b-md md:${
          hover ? "inline" : "hidden"
        }`}
      >
        {title}
      </h3>
    </div>
  );
};

export default BlogCard;
