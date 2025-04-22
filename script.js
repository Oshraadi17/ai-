
function start() {
  document.querySelector("button").style.display = "none";
  document.getElementById("chatSection").style.display = "block";
}
async function sendMessage() {
  const message = document.getElementById("userInput").value;
  const response = await fetch("/api/analyze", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message }),
  });
  const data = await response.json();
  document.getElementById("responseText").innerText = data.reply || "משהו השתבש, אנא נסה שוב.";
}
