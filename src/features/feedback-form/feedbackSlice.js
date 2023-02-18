import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  message: "",
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
  },
});

export const { setName, setEmail, setMessage, submitFeedback } =
  feedbackSlice.actions;

export default feedbackSlice.reducer;
