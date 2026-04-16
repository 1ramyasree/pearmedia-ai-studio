import React from "react";
import TextWorkflow from "./components/TextWorkflow";
import ImageWorkflow from "./components/ImageWorkflow";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Pear Media AI Studio</h1>

      <TextWorkflow />
      <hr />
      <ImageWorkflow />
    </div>
  );
}

export default App;