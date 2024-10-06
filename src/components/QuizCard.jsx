import { useDispatch } from "react-redux";
import { getQuestions } from "../features/quiz/quizSlice";
import { useNavigate } from "react-router-dom";

const QuizCard = ({ testTitle, testDescription, questions, type, scoring }) => {
  console.log(testTitle);
  const dispatch = useDispatch();
  const navigateTo = useNavigate();

  const handleDispatch = () => {
    dispatch(getQuestions({ title: testTitle, questions, type, scoring }));

    navigateTo("/quiz/questions");
  };

  return (
    <div
      onClick={handleDispatch}
      className="flex flex-col justify-center items-center bg-teal-700 rounded-md shadow-lg px-6 py-16"
    >
      <h2 className="text-white font-semibold text-2xl text-center">
        {testTitle}
      </h2>
      <p className="text-center text-slate-200">{testDescription}</p>
    </div>
  );
};

export default QuizCard;
