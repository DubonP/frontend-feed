import { feedbackAPI } from "../API/feedback-form";

export const postFeedback = (feedback) => {
  fetch(`${feedbackAPI.baseURL}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(feedback),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
};
