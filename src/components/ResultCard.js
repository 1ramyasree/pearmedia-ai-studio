import React from "react";

export default function ResultCard({ title, content, image }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", marginTop: "10px" }}>
      <h3>{title}</h3>

      {content && <p>{content}</p>}

      {image && (
        <img
          src={image}
          alt="result"
          style={{ width: "250px", marginTop: "10px" }}
        />
      )}
    </div>
  );
}