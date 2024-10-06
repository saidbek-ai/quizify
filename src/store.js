import { configureStore } from "@reduxjs/toolkit";
import quizSlice from "./features/quiz/quizSlice";
import autSlice from "./features/auth/autSlice";

const store = configureStore({
  reducer: { auth: autSlice, quiz: quizSlice },
});

export default store;
