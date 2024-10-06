import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  quizTitle: null,
  questions: [],
  currQuestIndex: 0,
  rightAnswers: 0,
  wrongAnswers: [],
  status: "idle",
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    getQuestions(state, action) {
      state.status = "succeeded";
      state.quizTitle = action.payload.title;
      state.questions = action.payload.questions;
    },
    nextQuestion(state) {
      if (state.currQuestIndex < state.questions.length - 1) {
        state.currQuestIndex++;
      } else {
        state.status = "finished";
      }
    },
    addToRightAnswer(state) {
      state.rightAnswers++;
    },
    addToWrongAnswers(state, action) {
      state.wrongAnswers.push({
        q: action.payload.currentQInd,
        qType: action.payload.qType,
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
