import { useState } from "react";
import { feedbackAPI } from "../../API/feedback-form";
import {
  FeedbackConteiner,
  Button,
  Pinkhappy1,
  Pinkhappy2,
  TextArea,
  WorldBackground,
} from "../../styles";
import map from "../../img/map.png";

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
      <Pinkhappy1 />
      <Pinkhappy2 />
      <WorldBackground>
        <img src={map} alt="map" />
      </WorldBackground>
      <FeedbackConteiner>
        <h3>Reach out to us!</h3>
        <form onSubmit={postFeedback}>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Your name*"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            id="email"
            required
            placeholder="Your e-mail*"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextArea
            id="message"
            rows="3"
            required
            placeholder="Your message*"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></TextArea>

          <Button type="submit">Send message</Button>
        </form>
      </FeedbackConteiner>
    </div>
  );
}
