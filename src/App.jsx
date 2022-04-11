import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCount]=useState(
    {
      Score: 76,
      Wicket: 2,
      Ball: 50
    }
  )
  var status="";
  const runs = (val) => {
    setCount((previousSate) => {
      return {...previousSate, Score: counter.Score+val};
    });
  };
  const wick = () => {
    if(counter.wick+1>=12)
      return;
    setCount((previousSate) => {
      return {...previousSate, Wicket: counter.Wicket+1};
    });
  };
  const over = () => {
    setCount((previousSate) => {
      return {...previousSate, Ball: counter.Ball+1};
    });
  };
  return (
    <div className="App">
      <h3>India:</h3>
      <div className="banner">
        <div>
          Score:{" "}
          <h1 className="scoreCount">
            {
              // show "score" here
              counter.Score
            }
          </h1>
        </div>
        <div>
          Wicket:{" "}
          <h1 className="wicketCount">
            {
              // show wicket here
              counter.Wicket
            }
          </h1>
        </div>

        <div>
          Over:{" "}
          <h1 className="overCount">
            {
              // Show Over here in the format: "over.ball" eg: 4.5 means 4th over and 5th ball
              // if 1 more ball is thrown then over is now 5.0
              // you have to write logic to form this string from current ball number.
              Math.floor(counter.Ball/6)+"."+counter.Ball%6
            }
          </h1>
        </div>
      </div>

      <div className="addScore">
        Add Score
        {/* these buttons should add the respective amount in the score */}
        <button className="addScore1" onClick={() => runs(1)}>Add 1</button>
        <button className="addScore4" onClick={() => runs(4)}>Add 4</button>
        <button className="addScore6" onClick={() => runs(6)}>Add 6</button>
      </div>

      <div className="addWicket">
        Add Wicket
        {/* Increase the count of wicket */}
        <button onClick={wick}>Add 1 wicket</button>
      </div>

      <div className="addBall">
        Add ball
        {/* Increase the total number of balls thrown here. */}
        <button onClick={over}>Add 1</button>
      </div>
      {/* If score reaches greater than 100, show text "India Won" without quotes in h1 tag with class name 'status' */}
      <h1 className="status">{counter.Score>100? "India Won": ""}</h1>
    </div>
  );
}

export default App;