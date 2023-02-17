import { createSlice } from "@reduxjs/toolkit";

export const feedbackFormSlice = createSlice({
  name: "feedbackForm",
  initialState: {
    name: "",
    email: "",
    message: "",
    feedbackSubmitted: false,
  },
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
      state.feedbackSubmitted = true;
    },
  },
});

export const { setName, setEmail, setMessage, submitFeedback } =
  feedbackFormSlice.actions;

export const selectName = (state) => state.feedbackForm.name;
export const selectEmail = (state) => state.feedbackForm.email;
export const selectMessage = (state) => state.feedbackForm.message;
export const selectFeedbackSubmitted = (state) =>
  state.feedbackForm.feedbackSubmitted;

export default feedbackFormSlice.reducer;
