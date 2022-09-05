// import "./ScreenTemplate.1.css";
// import "./ScreenTemplate.1.scss";
import Spinner from "../Spinner";
// import CountdownTimer from "./CountdownTimer";

// const handleLeaveClick = () => {};

const handleFormSubmit = () => {};

function ScreenStudent5WaitingForFeedback({
  gameHeader,
  gameMain,
  gameFooter,
}) {
  return (
    <div className="game-screen">
      <main className="game-screen-main flex--space-around">
        <p className="info">Waiting for all responses to be sent...</p>
        <Spinner />
      </main>

      <footer className="game-screen-footer">
        {/* <button className="footer-button">Start Game</button> */}
      </footer>
    </div>
  );
}

export default ScreenStudent5WaitingForFeedback;
