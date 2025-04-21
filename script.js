
function startAnalysis() {
    document.getElementById('analyzer').classList.remove('hidden');
    document.getElementById('aiResponse').innerText = '';
    document.getElementById('userInput').value = '';
}

function analyzeEmotion() {
    const input = document.getElementById('userInput').value.toLowerCase();
    const response = document.getElementById('aiResponse');
    response.innerText = "Analyzing...";
    
    setTimeout(() => {
        if (input.includes("stress") || input.includes("anxious") || input.includes("overwhelmed")) {
            response.innerText = "It sounds like you're feeling stressed. Let's take a deep breath together.";
        } else if (input.includes("happy") || input.includes("excited")) {
            response.innerText = "Great! Keep riding that positive wave.";
        } else if (input.includes("sad") || input.includes("tired")) {
            response.innerText = "It's okay to slow down. Your emotions matter.";
        } else {
            response.innerText = "Thank you for sharing. Self-awareness is powerful.";
        }
    }, 1000);
}
