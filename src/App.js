import "./App.css";
import Timer from "./pages/timer/Timer";

function App() {
  return (
    <>
      <h1 className="title">RESAT CHALLENGE</h1>
      <div className="day">
        <h2>Day 1</h2>
        <Timer />
      </div>
    </>
  );
}

export default App;
