import React, { useState } from "react";

import "./App.css";
import Box from "./components/Box";
import Input from "./components/Input";

function App() {
  const [box, setBox] = useState({
    colors: [],
  });

  return (
    <div >
      <h1>Box Generator</h1>
      <Input setBox={setBox} box={box} />
      <div>
        {box.colors.map((color) => (
          <Box color={color} />
        ))}
      </div>
    </div>

  );
}

export default App;