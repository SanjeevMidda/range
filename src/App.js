import { useState } from "react";
import "./index.css";

function App() {
  const [range, setRange] = useState(0);

  let colors = ["red", "green", "blue", "orange", "yellow"];

  let styles = {
    backgroundColor: colors[range],
  };

  console.log(range);

  return (
    <div className="App">
      <input
        type="range"
        min="0"
        max="4"
        value={range}
        onChange={(e) => setRange(e.target.value)}
        className="slider"
        style={styles}
      />

      <h1>{colors[range]}</h1>
    </div>
  );
}

export default App;
