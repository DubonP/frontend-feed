import {
  setName,
  setEmail,
  setMessage,
  submitFeedback,
} from "../../features/feedback-form/feedbackSlice";
import { useDispatch } from "react-redux";

export function CardFeedback() {
  const dispatch = useDispatch();

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Feedback</h5>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter name"
              onChange={(e) => dispatch(setName(e.target.value))}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email"
              onChange={(e) => dispatch(setEmail(e.target.value))}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              className="form-control"
              id="message"
              rows="3"
              onChange={(e) => dispatch(setMessage(e.target.value))}
            ></textarea>
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={(e) => {
              e.preventDefault();
              dispatch(submitFeedback());
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
