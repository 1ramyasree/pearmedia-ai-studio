// TEXT ENHANCEMENT (no API)
export const enhancePrompt = async (input) => {
  return input + ", high quality, cinematic lighting, ultra detailed, 4k";
};

// IMAGE GENERATION (Hugging Face)
export const generateImage = async (prompt) => {
  try {
    // Using free image placeholder API based on prompt
    const url = `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}`;
    return url;
  } catch (err) {
    console.error("Image error:", err);
  }
};