import { createSlice } from "@reduxjs/toolkit";
import { postFeedback } from "../../event/feedback-form";

const initialState = {
  name: "",
  email: "",
  message: "",
  feedback: [],
};

export const feedbackSlice = createSlice({
  name: "feedbackForm",
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setMessage: (state, action) => {
      state.message = action.payload;
    },
    submitFeedback: (state) => {
      state.feedback.push({
        name: state.name,
        email: state.email,
        message: state.message,
      });
      postFeedback(state.feedback);
    },
  },
});

export const { setName, setEmail, setMessage, submitFeedback } =
  feedbackSlice.actions;

export default feedbackSlice.reducer;
