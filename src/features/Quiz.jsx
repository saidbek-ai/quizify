import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToRightAnswer,
  addToWrongAnswers,
  getQuestions,
  nextQuestion,
  getWrongAnswersType,
} from "./quizSlice";

const quiz = {
  title: "Check your grammar for IELTS",
  questions: [
    {
      question: "Most university students * on campus in their first year.",
      options: [
        { text: "lives", isCorrect: false },
        { text: "live", isCorrect: true },
        { text: "are living", isCorrect: false },
      ],
      type: "present_tenses",
    },
    {
      question: "From this graph we can see that the economy * at the moment.",
      options: [
        { text: "improves", isCorrect: false },
        { text: "improve", isCorrect: false },
        { text: "is improving", isCorrect: true },
      ],
      type: "present_tenses",
    },
    {
      question: "They * personal computors when my father was a student.",
      options: [
        { text: "hadn't", isCorrect: false },
        { text: "didn't have", isCorrect: true },
        { text: "weren't having", isCorrect: false },
      ],
      type: "past_tenses",
    },
    {
      question:
        "I * want to be a practising doctor but now I’m more interested in research.",
      options: [
        { text: "was used to", isCorrect: false },
        { text: "used to", isCorrect: true },
        { text: "would", isCorrect: false },
      ],
      type: "past_tenses",
    },
    {
      question:
        "The teacher * us how to do the experiment when the fire bell rang",
      options: [
        { text: "showed", isCorrect: false },
        { text: "shown", isCorrect: false },
        { text: "was showing", isCorrect: true },
      ],
      type: "past_tenses",
    },
    {
      question: "I finished my essay yesterday but * it in to the tutor yet.",
      options: [
        { text: "I’ve given", isCorrect: false },
        { text: "I haven’t given", isCorrect: true },
        { text: "I didn’t give", isCorrect: false },
      ],
      type: "presen_perfect",
    },
    {
      question:
        "* the experiment three times now with different results each time!",
      options: [
        { text: "We’ve done", isCorrect: true },
        { text: "We did", isCorrect: false },
        { text: "We’ve been doing", isCorrect: false },
      ],
      type: "presen_perfect",
    },
    {
      question:
        "When I arrived the lecture * so I didn’t find it easy to follow.",
      options: [
        { text: "started", isCorrect: false },
        { text: "had started", isCorrect: true },
        { text: "had been starting", isCorrect: false },
      ],
      type: "past_perfect",
    },
    {
      question:
        "She * well at school but that changed when she became friends with a different group of girls.",
      options: [
        { text: "did", isCorrect: false },
        { text: "had done", isCorrect: false },
        { text: "had been doing", isCorrect: true },
      ],
      type: "past_perfect",
    },
    {
      question:
        "* the doctor at 2.00 this afternoon so I can’t go tothe lecture.",
      options: [
        { text: "I’m seeing", isCorrect: true },
        { text: "I see", isCorrect: false },
        { text: "I will see", isCorrect: false },
      ],
      type: "future_tense_1",
    },
    {
      question:
        "My sister * economics and politics when she goes to university.",
      options: [
        { text: "is going to study", isCorrect: true },
        { text: "studies", isCorrect: false },
        { text: "will study", isCorrect: false },
      ],
      type: "future_tense_1",
    },
    {
      question:
        "While we’re working on the project our boss * on a beach in Greece!",
      options: [
        { text: "will sit", isCorrect: false },
        { text: "will have sit", isCorrect: false },
        { text: "will be sitting", isCorrect: true },
      ],
      type: "future_tense_2",
    },
    {
      question: "If the trend continues, the average income * by 107% by 2020.",
      options: [
        { text: "will increase", isCorrect: false },
        { text: "will have increased", isCorrect: true },
        { text: "will be increasing", isCorrect: false },
      ],
      type: "future_tense_2",
    },
    {
      question:
        "You can base your geography assignment on * country  it doesn’t matter which.",
      options: [
        { text: "a", isCorrect: false },
        { text: "some", isCorrect: false },
        { text: "any", isCorrect: true },
      ],
      type: "countable_and_uncountable_nouns",
    },
    {
      question:
        "There aren’t * places left on the course so you’d better apply soon",
      options: [
        { text: "much", isCorrect: false },
        { text: "many", isCorrect: true },
        { text: "lots of", isCorrect: false },
      ],
      type: "countable_and_uncountable_nouns",
    },
  ],
};

const Quiz = () => {
  const [answerLabel, showAnswerLabel] = useState(false);
  const [answerIsCorrect, setAnswerIsCorrect] = useState(false);
  const [answer, setAnswer] = useState("");

  const dispatch = useDispatch();
  const { status, questions, currQuestIndex, quizTitle, rightAnswers } =
    useSelector((state) => state.quiz);

  const wrongAnswersTypes = useSelector(getWrongAnswersType);

  const handleAddQuiz = () => {
    dispatch(getQuestions(quiz));
  };

  const handleAnswer = ({ text, isCorrect }, qType, currentQInd) => {
    if (isCorrect) {
      dispatch(addToRightAnswer());
      setAnswerIsCorrect(true);
    } else {
      dispatch(addToWrongAnswers({ currentQInd, qType }));
      setAnswerIsCorrect(false);
    }

    setAnswer(text);
    showAnswerLabel(true);
  };

  const handleNext = () => {
    setAnswer("");
    showAnswerLabel(false);
    dispatch(nextQuestion());
  };

  const htmlElement = `<span class="px-2 bg-teal-100 rounded-md inline-block min-h-9 min-w-24 italic font-semibold">${answer}</span>`;

  const htmlString = questions[currQuestIndex]?.question.replace(
    "*",
    htmlElement
  );

  return (
    <div className="flex flex-wrap justify-center items-center min-h-screen h-screen w-full max-w-[1280px] mx-auto">
      <div
        onClick={handleAddQuiz}
        className={`${
          status !== "idle" && "hidden"
        } p-16 border-2 border-teal-600 rounded-md  md:h-1/3 w-54 text-2xl font-bold text-teal-600 flex justify-center items-center`}
      >
        Entry Test
      </div>
      {status === "succeeded" && (
        <div className="p-4 h-full w-full flex flex-col gap-6">
          <div className="py-3 px-4 bg-teal-600 text-white rounded-md flex justify-between items-center">
            <h1 className="text-xl font-semibold">{quizTitle} </h1>
            <p>
              {currQuestIndex + 1} of {questions.length}
            </p>
          </div>

          <div className="h-full w-full relative">
            <h2
              className="py-20 md:py-24 text-2xl text-teal-600 font-bold text-center flex flex-wrap items-center justify-center gap-2"
              dangerouslySetInnerHTML={{ __html: htmlString }}
            ></h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {questions[currQuestIndex]?.options.map((opt, i) => (
                <button
                  onClick={() =>
                    handleAnswer(
                      opt,
                      questions[currQuestIndex].type,
                      currQuestIndex
                    )
                  }
                  key={i}
                  disabled={answer === "" ? false : true}
                  className={
                    " border border-teal-600 text-teal-600 rounded-md p-4 hover:text-white hover:bg-teal-600 disabled:text-slate-400 disabled:border-slate-400"
                  }
                >
                  {opt.text}
                </button>
              ))}
            </div>
            <div
              className={`${!answerLabel && "hidden"} ${
                answerIsCorrect ? "bg-green-500" : "bg-red-300"
              } w-full absolute bottom-0 py-4 px-4  flex justify-between items-center rounded-md text-white`}
            >
              <span
                className={`${
                  answerIsCorrect ? "text-white" : "text-red-700"
                } font-semibold text-xl`}
              >
                {answerIsCorrect ? "Correct! Awesome!" : "You are Wrong !!!"}
              </span>
              <button
                onClick={handleNext}
                className={`${
                  answerIsCorrect ? "bg-green-600" : "bg-red-600"
                } flex justify-center items-center px-6 py-3 rounded-md`}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}
      {status === "finished" && (
        <div className="h-full w-full flex flex-col justify-center items-center p-4">
          <div
            className={`bg-teal-600 flex flex-col gap-8 justify-center items-center p-4 text-white rounded-md w-full`}
          >
            <h2 className="text-3xl font-bold w-full text-center">Results</h2>
            <sub className="text-lg w-1/2 text-center">
              <span className="font-bold text-2xl">{rightAnswers}</span> correct
              answers out of{" "}
              <span className="text-2xl">{questions.length} </span>
              questions
            </sub>
            <p>
              You shoud learn this grammar topic
              {wrongAnswersTypes.length > 1 && "s"} below:
            </p>
          </div>

          <div className="h-full w-full flex justify-center items-center">
            <ul className="flex flex-col gap-4 h-full w-full mt-6">
              {wrongAnswersTypes?.map((wAns, i) => (
                <li
                  key={i}
                  className="text-lg text-teal-600 border border-teal-600 rounded-md p-2 capitalize"
                >
                  {wAns.split("_").join(" ")}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
