const inputText = document.getElementById("inputText");
const wordCountDisplay = document.getElementById("wordCount");

inputText.addEventListener("input", updateWordCount);

function updateWordCount() {
  const text = inputText.value.trim();
  const words = text === "" ? 0 : text.split(/\s+/).length;
  wordCountDisplay.textContent = `Word count: ${words}`;
}