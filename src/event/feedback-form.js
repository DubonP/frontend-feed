import { feedbackAPI } from "../API/feedback-form";

export function postFeedback(e) {
  e.preventDefault();
  feedbackAPI.baseURL.post("/register", {
    name: e.name,
    email: e.email,
    message: e.message,
  });
}
