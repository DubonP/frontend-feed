import React from "react";
import { FeedbackForm } from "./features/feedback-form";
import { AppHome } from "./styles";

function App() {
  return <AppHome className="App">{<FeedbackForm />}</AppHome>;
}

export default App;
