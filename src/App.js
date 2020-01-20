//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeValue, newHomeValue] = useState(0);
  const [awayValue, newAwayValue] = useState(0);

  const [quarterValue, newQuarterValue] = useState(0);

  const [minutes, newMinutes] = useState('00:');
  const [seconds, newSeconds] = useState(30);
  console.log(newHomeValue);
  console.log(newAwayValue);

  setTimeout(() => {
    newMinutes(seconds < 61 && seconds > 10 ? '00:' : seconds < 11 && seconds > 0 ? '00:0' : '' );
    newSeconds(seconds > 0 ? seconds -1 : 'FINAL');
  }, 1000);
  
  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Wolves</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeValue}</div>
          </div>
          <div className="timer">{minutes}{seconds}</div>
          <div className="away">
            <h2 className="away__name">Birds</h2>
            <div className="away__score">{awayValue}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button onClick={() => newHomeValue(homeValue + 7)} className="homeButtons__touchdown">Home Touchdown</button>
          <button onClick={() => newHomeValue(homeValue + 3)} className="homeButtons__fieldGoal">Home Field Goal</button>
        </div>
        <div className="quarterButton">
          {/*BottomRow*/}
          <button onClick={() => newQuarterValue(quarterValue + 1)} className="quarterButton__change">New Quarter</button>
        </div>
        <div className="awayButtons">
          <button onClick={() => newAwayValue(awayValue + 7)} className="awayButtons__touchdown">Away Touchdown</button>
          <button onClick={() => newAwayValue(awayValue + 7)} className="awayButtons__fieldGoal">Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;
