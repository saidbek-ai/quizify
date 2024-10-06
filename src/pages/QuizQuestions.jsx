import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaRegCheckCircle } from "react-icons/fa";
import { IoCloseCircleOutline } from "react-icons/io5";

import {
  addToRightAnswer,
  addToWrongAnswers,
  nextQuestion,
} from "../features/quiz/quizSlice";
import { useNavigate } from "react-router-dom";
import QuizResults from "../components/QuizResults";

const QuizQuestions = () => {
  const { questions, status, currQuestIndex } = useSelector(
    (state) => state.quiz
  );
  const dispatch = useDispatch();
  const [answer, setAnswer] = useState("");
  const [isAnswered, setIsAnswered] = useState(false);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);
  const navigateTo = useNavigate();

  useEffect(() => {
    if (questions.length === 0) navigateTo("/quiz");
  }, [questions]);

  const currentQuestion = questions[currQuestIndex];

  const htmlElement = `<span class="px-2 bg-teal-100 rounded-md inline-block min-h-6 min-w-24 italic font-semibold text-xl">${answer}</span>`;

  const htmlString = currentQuestion?.question.replace("*", htmlElement);

  const handleAnswer = (e) => {
    const {
      dataset: { optiontext },
      value,
    } = e.target;

    setAnswer(optiontext);

    if (value === currentQuestion.correctAnswer) {
      dispatch(addToRightAnswer(currentQuestion.points));
      setIsAnswerCorrect(true);
    } else {
      dispatch(
        addToWrongAnswers({
          index: currQuestIndex,
          level: currentQuestion.level,
          userOption: value,
        })
      );
      setIsAnswerCorrect(false);
    }

    setIsAnswered(true);
  };

  const handleNextQuestion = () => {
    dispatch(nextQuestion());
    setIsAnswered(false);
    setAnswer("");
  };

  console.log(answer);
  console.log(currentQuestion);

  return (
    <div className="">
      {status === "succeeded" && (
        <div className="relative">
          <h2
            className="text-2xl text-teal-700 font-semibold mb-6 p-6 text-center"
            dangerouslySetInnerHTML={{ __html: htmlString }}
          ></h2>
          <div className="max-w-[380px] w-full mx-auto flex flex-col gap-4">
            {Object.entries(currentQuestion.options).map(
              ([objKey, entries], i) => (
                <button
                  className="text-teal-700 rounded-md border border-teal-700 px-2 py-1 hover:text-orange-400  disabled:border-slate-300 disabled:text-slate-300 w-full"
                  key={i}
                  onClick={handleAnswer}
                  value={objKey}
                  data-optiontext={entries}
                  disabled={isAnswered}
                >
                  {entries}
                </button>
              )
            )}
          </div>
          {isAnswered && (
            <div
              className={`${
                isAnswerCorrect ? "bg-green-300" : "bg-red-300"
              } absolute bottom-0  w-full p-2 flex justify-between items-center rounded-md`}
            >
              <span className="text-3xl">
                {isAnswerCorrect ? (
                  <FaRegCheckCircle className="text-green-500" />
                ) : (
                  <IoCloseCircleOutline className="text-red-500" />
                )}
              </span>
              <button
                className={`${
                  isAnswerCorrect ? "bg-green-500" : "bg-red-500"
                } text-sm py-2 px-4 rounded-md bg-green-500 text-white`}
                onClick={handleNextQuestion}
              >
                Next
              </button>
            </div>
          )}
        </div>
      )}
      {status === "finished" && <QuizResults />}
    </div>
  );
};

export default QuizQuestions;
