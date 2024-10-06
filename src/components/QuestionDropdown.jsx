import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

const QuestionDropdown = ({
  question,
  userOption,
  correctAnswer,
  level,
  options,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="text-lg p-1 rounded-md transition duration-300 ease-in-out transform ">
      <h3
        className="text-sm font-semibold text-teal-900 rounded-md flex justify-between items-center gap-2 p-2 cursor-pointer"
        onClick={() => setOpen((open) => !open)}
      >
        {question}
        <span>{open ? <FaAngleUp /> : <FaAngleDown />}</span>
      </h3>
      <div
        className={`${
          open ? "flex" : "hidden"
        } gap-2 mt-2 flex flex-wrap justify-center items-center sm:justify-start`}
      >
        {Object.entries(options).map(([objKey, value], i) => (
          <span
            className={`${
              objKey === correctAnswer
                ? "bg-green-500 text-white"
                : objKey === userOption && "bg-red-300 text-red-500"
            } text-xs border rounded-md p-1`}
            key={i}
          >
            {value}
          </span>
        ))}
      </div>
    </div>
  );
};

export default QuestionDropdown;
