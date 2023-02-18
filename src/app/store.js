import { configureStore } from "@reduxjs/toolkit";
import feedbackReducer from "../features/feedback-form/feedbackSlice";

export const store = configureStore({
  reducer: {
    feedbackForm: feedbackReducer,
  },
});
