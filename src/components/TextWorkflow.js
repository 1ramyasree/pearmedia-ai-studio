import React, { useState } from "react";
import { enhancePrompt, generateImage } from "../utils/api";

export default function TextWorkflow() {
  const [input, setInput] = useState("");
  const [enhanced, setEnhanced] = useState("");
  const [image, setImage] = useState("");

  const handleEnhance = async () => {
    const result = await enhancePrompt(input);
    setEnhanced(result);
  };

  const handleGenerate = async () => {
    const img = await generateImage(enhanced);
    setImage(img);
  };

  return (
    <div>
      <h2>Text to Image</h2>

      <textarea
        placeholder="Enter prompt..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={handleEnhance}>Enhance</button>

      {enhanced && (
        <>
          <textarea
            value={enhanced}
            onChange={(e) => setEnhanced(e.target.value)}
          />
          <button onClick={handleGenerate}>Generate Image</button>
        </>
      )}

      {image && <img src={image} alt="result" />}
    </div>
  );
}