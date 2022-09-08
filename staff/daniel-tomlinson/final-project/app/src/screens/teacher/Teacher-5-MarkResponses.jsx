// import "./ScreenTemplate.1.css";
// import "./ScreenTemplate.1.scss";
// import Spinner from "./Spinner";
// import CountdownTimer from "./CountdownTimer";

// const handleLeaveClick = () => {};

const handleFormSubmit = () => {};

function Teacher5MarkResponses({
  pin,
  nameOfClass,
  handleScreenChangeT5,
  response,
  // question,
  // responsesReceived: [responsesReceived],
}) {
  // const responseString = response.response;
  const onButtonClick = () => {
    debugger;
    handleScreenChangeT5("Teacher6ResponseStats");
  };
  return (
    <div className="game-screen">
      <main className="game-screen-main flex--spaced">
        <div className="grouped-elements">
          <p className="info--bold">
            PIN: {pin} <br></br>
            Class: {nameOfClass}
          </p>
        </div>
        <div className="grouped-elements">
          <p className="paragraph--bold">Click to mark correct or incorrect.</p>
          <p className="info correct">
            TODO: create these inputs by mapping student responses
          </p>
          <p className="info incorrect">{response}</p>
          <p className="info">Student response 2</p>
          <p className="info">Student response 3</p>
          <p className="info">Student response 4</p>
        </div>
        <button className="footer-button" onClick={onButtonClick}>
          send
        </button>
      </main>

      <footer className="game-screen-footer"></footer>
    </div>
  );
}

export default Teacher5MarkResponses;
