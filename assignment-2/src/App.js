import React, { useState } from "react";
import FirstComponent from "./FirstComponent";
import SecondComponent from "./SecondComponent";

function App() {
  const [isTrue, setIsTrue] = useState(true);

  console.log("App component is rendering"); // Debugging log

  return (
    <div>
      <h1>Conditional Rendering Example</h1>
      {isTrue ? <FirstComponent /> : <SecondComponent />}
      <button onClick={() => setIsTrue(!isTrue)}>Toggle Component</button>
    </div>
  );
}

export default App;
