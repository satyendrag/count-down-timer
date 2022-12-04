import "./App.css";
import CountDownTimer from "./components/countDownTimer";
function App() {
  const THREE_DAYS_IN_MS = 30 * 1000;
  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;
  return (
    <div className="App">
      <h1>Timer</h1>
      <CountDownTimer targetDate={dateTimeAfterThreeDays} />
    </div>
  );
}

export default App;
