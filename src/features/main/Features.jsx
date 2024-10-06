import { FaRegCheckCircle, FaChartLine } from "react-icons/fa";
import { GiSwordman } from "react-icons/gi";

const features = [
  {
    title: "check your grammar and vocabulary",
    icon: <FaRegCheckCircle />,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi hic itaque at.",
  },
  {
    title: "enrich your vocabulary",
    icon: <FaChartLine />,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi hic itaque at.",
  },
  {
    title: "keep sharpen your grammar",
    icon: <GiSwordman />,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi hic itaque at.",
  },
];

const Features = () => {
  return (
    <div className="min-h-[90vh] max-w-[1280px] mx-auto flex flex-col justify-center items-center px-4 py-16">
      <h3 className="text-teal-700 text-3xl font-bold text-center mb-8">
        {" "}
        Our <span className="text-orange-400">Features</span>
      </h3>
      <div className="flex flex-col md:flex-row gap-4 w-full">
        {features.map((fea, i) => (
          <div
            key={i}
            className="bg-teal-700 p-4 rounded-md w-full flex flex-col justify-center items-center"
          >
            <span className="text-5xl text-orange-400 p-5">{fea.icon}</span>
            <h3 className="text-lg font-semibold capitalize text-white p-2 ">
              {fea.title}
            </h3>
            <p className="text-sm text-center text-white italic">
              {fea.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
