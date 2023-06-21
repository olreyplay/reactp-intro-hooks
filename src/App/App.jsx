import React, { useState } from "react";
import "../index.css";

const App = () => {
  const [value, setValue] = useState(100);

  const handleClick = () => {
    setValue(value + 1);
  };

  return (
    <div>
      <p>You clicked {value} times</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
};

export default App;
