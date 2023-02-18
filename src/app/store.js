import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import feedbackReducer from "../features/feedback-form/feedbackSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    feedbackForm: feedbackReducer,
  },
});
