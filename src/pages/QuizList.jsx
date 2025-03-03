import QuizCard from "../components/QuizCard";
import grammarTest from "./../data/grammar.json";
import vocabularyTest from "./../data/vocabulary.json";
import testData from "./../data/test.json";

const tests = [grammarTest, vocabularyTest];

const QuizList = () => {
  console.log(tests);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 h-full">
      {tests.map((test, i) => (
        <QuizCard key={i} {...test} quizTitle={test.testTitle} />
      ))}
    </div>
  );
};

export default QuizList;
