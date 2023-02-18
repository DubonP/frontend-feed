import { useState } from "react";
import { feedbackAPI } from "../../API/feedback-form";

export function CardFeedback() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function postFeedback(e) {
    e.preventDefault();
    fetch(`${feedbackAPI.baseURL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        message: message,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.statusCode === 400) {
          alert(data.message);
        } else if (data.statusCode === 500) {
          alert("Something went wrong");
        } else {
          alert("Thank you " + data.name + " for your feedback!");
        }
        console.log(data.message);
        console.log(data);
      });
  }

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Feedback</h5>
        <form onSubmit={postFeedback}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea
              className="form-control"
              id="message"
              rows="3"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
