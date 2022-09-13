// import "./ScreenTemplate.1.css";
// import "./ScreenTemplate.1.scss";
// import Spinner from "./Spinner";
import CountdownTimer from "../CountdownTimer";
import { useEffect } from "react";

// const handleLeaveClick = () => {};

function Student4ResponseInput({
  question,
  timeLimit,
  socket,
  handleScreenChangeS4,
  host,
}) {
  const questionString = question.question;
  const timeLimitSeconds = Math.floor(timeLimit.timeLimit);
  const timeLimitNumber = timeLimit.timeLimit;

  const handleFormSubmit = (event) => {
    event.preventDefault();

    clearTimeout(timeout);

    const form = event.target;

    const responseInput = form.response;

    const response = responseInput.value;

    // const response = String(responseValue.rersponse);

    const socketId = socket.id;

    socket.emit("S4", { response, socketId, host });

    handleScreenChangeS4("Student5WaitingForFeedback");
  };

  const handleFormSubmit2 = () => {
    // event.preventDefault();

    const button = document.getElementsByClassName("response-submit-button");

    debugger;

    button[0].click();
  };

  /* const handleFormSubmit2 = () => {

    const form = document.getElementsByClassName("form");

    const responseInput = form[0].response;

    const response = responseInput.value;

    const socketId = socket.id;

    socket.emit("S4", { response, socketId, host });

    handleScreenChangeS4("Student5WaitingForFeedback");
  }; */

  socket.on("T4", () => {
    console.log("T4 received by client");
    handleFormSubmit2();
  });

  // useEffect(() => {

  let timeout = setTimeout(handleFormSubmit2, timeLimitNumber);

  /*   setTimeout(() => {
    handleFormSubmit2();
  }, timeLimitNumber); */

  // }, [])
  return (
    <div className="game-screen">
      <main className="game-screen-main">
        <div className="grouped-elements">
          {/* <CountdownTimer timeLimit={timeLimitSeconds} /> */}
          <p className="paragraph--bold">Question: </p>
          <p className="info">{questionString}</p>
        </div>

        <form
          action=""
          className="form form--spread"
          onSubmit={handleFormSubmit}
        >
          <div className="form-field">
            <label htmlFor="answer" className="input-label input-label--bold">
              Write your answer:
            </label>
            <input
              type="text"
              placeholder="Write your answer here..."
              name="response"
              id="response"
              className="input-field"
            />
          </div>

          <button
            href=""
            type="submit"
            className="footer-button response-submit-button"
          >
            Submit
          </button>
        </form>
      </main>

      <footer className="game-screen-footer">
        {/* <button className="footer-button">Start Game</button> */}
      </footer>
    </div>
  );
}

export default Student4ResponseInput;
