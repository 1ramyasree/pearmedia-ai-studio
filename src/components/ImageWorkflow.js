import React, { useState } from "react";
import { generateImage } from "../utils/api";

export default function ImageWorkflow() {
  const [file, setFile] = useState(null);
  const [analysis, setAnalysis] = useState("");
  const [image, setImage] = useState("");

  const handleUpload = (e) => {
    setFile(e.target.files[0]);
  };

  const handleAnalyze = async () => {
    // fake analysis (simple but realistic for 6 hrs)
    const text = "A colorful artistic scene with modern digital style";
    setAnalysis(text);
  };

  const handleGenerate = async () => {
    const img = await generateImage(analysis);
    setImage(img);
  };

  return (
    <div>
      <h2>Image to Variation</h2>

      <input type="file" onChange={handleUpload} />

      <button onClick={handleAnalyze}>Analyze</button>

      {analysis && (
        <>
          <p>{analysis}</p>
          <button onClick={handleGenerate}>Generate Variation</button>
        </>
      )}

      {image && <img src={image} alt="variation" />}
    </div>
  );
}