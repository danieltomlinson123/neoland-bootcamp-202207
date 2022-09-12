// import "./ScreenTemplate.1.css";
// import "./ScreenTemplate.1.scss";
// import Spinner from "./Spinner";
// import CountdownTimer from "./CountdownTimer";

// const handleLeaveClick = () => {};

import { useState } from "react";

const handleFormSubmit = () => {};

function Teacher5MarkResponses({
  pin,
  nameOfClass,
  handleScreenChangeT5,
  responses,
  host,
  socket,
  // question,
}) {
  // const responseString = response.response;

  let correct = 0;
  let incorrect = 0;

  const onButtonClick = () => {
    debugger;

    responses.forEach((response) => {
      let element = document.getElementById(response.socketId);

      if (element.className === "info response-list-item correct") {
        socket.emit("T5", {
          gameScreen: "Student6Correct",
          socketId: response.socketId,
          host: host,
        });
        console.log("Emitted 'correct' to:");
        console.log(response.socketId);
        correct += 1;
      } else if (element.className === "info response-list-item incorrect") {
        socket.emit("T5", {
          gameScreen: "Student7Incorrect",
          socketId: response.socketId,
          host: host,
        });
        console.log("Emitted 'incorrect' to:");
        console.log(response.socketId);
        incorrect += 1;
      }
    });

    handleScreenChangeT5("Teacher6ResponseStats", correct, incorrect);
  };

  const [responsesMarked, setResponsesMarked] = useState([]);

  const handleMarkResponse = (event) => {
    console.log("handleMarkResponse clicked");
    console.log(event.target.innerHTML);
    // console.log(event.target.key);
    console.log(event.target.className);
    console.log(event.target.dataset.id);
    // console.log(event.target.dataset.clicks);
    console.log(event.target);

    const markedResponse = {};
    if (event.target.className === "info response-list-item")
      event.target.className = "info response-list-item correct";
    else if (event.target.className === "info response-list-item correct")
      event.target.className = "info response-list-item incorrect";
    else if (event.target.className === "info response-list-item incorrect")
      event.target.className = "info response-list-item correct";
  };

  console.log("Responses received at T5 Mark Responses");
  console.log(responses);

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

          {responses.map((responseData) => {
            return (
              <p
                className="info response-list-item"
                key={responseData.socketId}
                onClick={handleMarkResponse}
                data-Id={responseData.socketId}
                id={responseData.socketId}
                // data-clicks={0}
              >
                {responseData.response}
              </p>
            );
          })}
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
