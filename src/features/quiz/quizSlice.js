import { createSlice } from "@reduxjs/toolkit";

const initialState = () => {
  return {
    quizTitle: null,
    questions: [],
    quizType: "",
    currQuestIndex: 0,
    rightAnswers: 0,
    wrongAnswers: [],
    scoring: [],
    score: 0,
    status: "idle",
  };
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    getQuestions(state, action) {
      state.status = "succeeded";
      state.quizTitle = action.payload.title;
      state.questions = action.payload.questions;
      state.quizType = action.payload.type;
      state.scoring = action.payload.scoring;
    },
    nextQuestion(state) {
      if (state.currQuestIndex < state.questions.length - 1) {
        state.currQuestIndex++;
      } else {
        state.status = "finished";
      }
    },
    addToRightAnswer(state, action) {
      state.rightAnswers++;
      state.score += action.payload;
    },
    addToWrongAnswers(state, action) {
      state.wrongAnswers.push({
        index: action.payload.index,
        level: action.payload.level,
        userOption: action.payload.userOption,
      });
    },
  },
});

export const getWrongAnswersType = (state) => {
  const wAnswers = new Set();

  state.quiz.wrongAnswers?.map((wAns) => wAnswers.add(wAns.qType));

  return wAnswers ? Array.from(wAnswers) : null;
};

export const {
  addToRightAnswer,
  addToWrongAnswers,
  getQuestions,
  nextQuestion,
  status,
  questions,
  currQuestIndex,
  rightAnswers,
  wrongAnswers,
  quizTitle,
} = quizSlice.actions;
export default quizSlice.reducer;
