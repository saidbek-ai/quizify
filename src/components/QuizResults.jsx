import { useSelector } from "react-redux";
import QuestionDropdown from "./QuestionDropdown";

const QuizResults = () => {
  const {
    auth: { username },
    quiz: { rightAnswers, wrongAnswers, questions, quizType, scoring },
  } = useSelector((state) => state);

  const questionCount = questions.length;

  const percentage = ((rightAnswers / questionCount) * 100).toFixed(2);

  const gradeWord = () => {
    let word;

    if (percentage >= 95) {
      word = "Awesome";
    } else if (percentage >= 85) {
      word = "Great";
    } else if (percentage >= 75) {
      word = "Cool";
    } else if (percentage >= 60) {
      word = "Good";
    } else if (percentage >= 55) {
      word = "Not bad!";
    } else {
      word = "You should learn more words!";
    }

    return word;
  };

  // dynamic calculation depend on score array from json doc
  const levelCalculator = () => {
    let level, description;

    scoring.map((s) => {
      const val = s.score.split("-");

      if (val[0] <= rightAnswers && val[1] >= rightAnswers) {
        level = s.level;
        description = s.description;
      }
    });

    return { level, description };
  };

  const { level, description } = levelCalculator();

  const getWrongQuestions = () => {
    const arr = wrongAnswers.map((wAns) => {
      const { question, options, correctAnswer, level } = questions[wAns.index];

      return {
        question,
        level,
        options,
        correctAnswer,
        userOption: wAns.userOption,
      };
    });

    return arr;
  };

  console.log(getWrongQuestions());

  return (
    <div className="flex flex-col gap-4">
      <div className="bg-teal-700 text-white w-full p-4 rounded-md">
        <h2 className="text-4xl text-center font-semibold">{gradeWord()}</h2>

        <h3 className="text-xl text-center ">
          <span className="text-orange-400 font-semibold text-2xl">
            {rightAnswers}
          </span>{" "}
          right answer{rightAnswers > 1 && "s"} out of{" "}
          <span className="text-orange-400 font-semibold text-2xl">
            {questionCount}
          </span>{" "}
          Questions
        </h3>

        <h3 className="text-center  p-2 text-xl">
          Your{" "}
          <span className="uppercase text-orange-400 font-semibold">
            {quizType}
          </span>{" "}
          level is <span className="uppercase text-orange-400">{level}</span>
        </h3>
        {description && (
          <h4 className="text-sm text-center p-2">{description}</h4>
        )}
        <div className="bg-yellow-200 text-red-500 text-center px-2 rounded-sm">
          Note this results are not 100% accurate. There might be some problems
          in test module{" "}
        </div>
      </div>

      <h2 className="font-semibold text-teal-700">
        {username.toUpperCase()}, Here is your list of wrong questions:
      </h2>

      {wrongAnswers.length > 0 && (
        <div className="border border-teal-700 h-full p-4 rounded-md flex flex-col gap-4">
          {getWrongQuestions()?.map((q, i) => (
            <QuestionDropdown key={i} {...q} />
          ))}
        </div>
      )}
    </div>
  );
};

export default QuizResults;
