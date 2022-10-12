function clipboardFN(text) {
  navigator.clipboard.writeText(text);
}

const copyBtn = document.querySelector(".copy-btn");
const pasteBtn = document.querySelector(".paste-btn");

const input = document.querySelector(".input");

let inputValue;

input.addEventListener("input", (e) => {
  inputValue = e.target.value;
});

copyBtn.addEventListener("click", () => {
  clipboardFN(inputValue || "");
  input.value = "";
});

pasteBtn.addEventListener("click", async () => {
  const text = await navigator.clipboard.readText();
  input.value = text;
});
