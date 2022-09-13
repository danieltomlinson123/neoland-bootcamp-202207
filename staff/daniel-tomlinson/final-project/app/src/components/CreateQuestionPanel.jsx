// import "./ScreenTemplate.1.css";
// import "./ScreenTemplate.1.scss";
// import Spinner from "./Spinner";
// import CountdownTimer from "./CountdownTimer";

// import "./timeSelect.scss";

import Loggito from "../utils/Loggito";
import createQuestion from "../logic/createQuestion";

import withContext from "../utils/withContext";
// const handleLeaveClick = () => {};

function CreateQuestionPanel({
  //   pin,
  //   nameOfClass,
  //   handleScreenChangeT3,
  //   socket,
  //   host,
  handleReturn,
  context: { handleFeedback },
}) {
  const logger = new Loggito("Create Question");

  const onReturn = () => {
    handleReturn();
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const form = event.target;

    const questionInput = form.question;
    const timeLimitInput = form.timeLimit;
    const publicPrivateInput = form.public_private;
    const suggestedAnswerInput = form.suggestedAnswer;

    const question = questionInput.value;
    const timeLimit = timeLimitInput.value;
    const publicPrivate = publicPrivateInput.value;
    let suggestedAnswer = suggestedAnswerInput.value;

    if (!suggestedAnswer) suggestedAnswer = "";

    form.reset();

    try {
      createQuestion(
        sessionStorage.token,
        question,
        suggestedAnswer,
        timeLimit,
        publicPrivate,
        (error) => {
          if (error) {
            handleFeedback({ message: error.message, level: "error" });

            logger.warn(error.message);

            return;
          }

          // loadNotes();
          handleReturn();
        }
      );
    } catch (error) {
      handleFeedback({ message: error.message, level: "error" });

      logger.warn(error.message);
    }

    // socket.to("1").emit("T3", {
    /* socket.emit("T3", {
      gameScreen: "Student3GetReady",
      timeLimit: { timeLimit },
      question: { question },
      host: { host },
      publicPrivate: { publicPrivate },
      suggestedAnswer: { suggestedAnswer },
    }); */

    // handleScreenChangeT3("Teacher3BGetReady", question, timeLimit);
  };

  return (
    <div className="game-screen">
      <span
        className="material-symbols-outlined button-icon"
        onClick={onReturn}
      >
        arrow_back_ios_new
      </span>
      <main className="game-screen-main flex--spaced">
        {/* <div className="grouped-elements">
          <p className="info--bold">
            PIN: {pin} <br></br>
            Class: {nameOfClass}
          </p>
        </div> */}
        <form
          action=""
          className="form form--spread"
          onSubmit={handleFormSubmit}
        >
          <div className="grouped-elements flex-row">
            <select id="timeLimit">
              <option value="30000">Time limit...</option>
              <option value="10000">10 seconds</option>
              <option value="20000">20 seconds</option>
              <option value="30000">30 seconds</option>
              <option value="45000">45 seconds</option>
              <option value="50000">1 minute</option>
              <option value="60000">1 min 30 sec</option>
              <option value="70000">2 mins</option>
              <option value="80000">no limit</option>
            </select>
            <select id="public_private">
              <option value="public">Public</option>
              <option value="private">Private</option>
            </select>
          </div>
          <div className="form-field">
            <label htmlFor="question" className="input-label">
              Question:
            </label>
            <input
              type="text"
              placeholder="Write your question..."
              name="question"
              id="question"
              className="input-field"
            />
          </div>
          <div className="form-field">
            <label htmlFor="suggestedAnswer" className="input-label">
              Suggested answer:
            </label>
            <input
              type="text"
              placeholder="Write a suggested answer..."
              name="suggestedAnswer"
              id="suggestedAnswer"
              className="input-field"
            />
          </div>

          <button href="" type="submit" className="footer-button">
            Send
          </button>
        </form>
      </main>

      <footer className="game-screen-footer">
        {/* <button className="footer-button">Start Game</button> */}
      </footer>
    </div>
  );
}

export default withContext(CreateQuestionPanel);
