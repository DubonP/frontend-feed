import {
  setName,
  setEmail,
  setMessage,
  submitFeedback,
} from "../../features/feedback-form/feedbackSlice";
import { useDispatch } from "react-redux";
export function CardFeedback() {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(submitFeedback());
  };
  return (
    <div className="">
      {
        <div className="">
          <h5 className="">Feedback</h5>
          <form onSubmit={handleSubmit}>
            <div className="">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className=""
                id="name"
                onChange={(e) => dispatch(setName(e.target.value))}
              />
            </div>
            <div className="">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                className=""
                id="email"
                onChange={(e) => dispatch(setEmail(e.target.value))}
              />
            </div>
            <div className="">
              <label htmlFor="message">Message</label>
              <textarea
                className=""
                id="message"
                rows="3"
                onChange={(e) => dispatch(setMessage(e.target.value))}
              ></textarea>
            </div>
            <button type="submit" className="">
              Submit
            </button>
          </form>
        </div>
      }
    </div>
  );
}
