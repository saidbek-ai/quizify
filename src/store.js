import { configureStore } from "@reduxjs/toolkit";
import quizSlice from "./features/quizSlice";

const store = configureStore({
  reducer: { quiz: quizSlice },
});

export default store;
