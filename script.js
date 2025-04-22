
async function sendToGPT() {
    const input = document.getElementById("userInput").value;
    const responseArea = document.getElementById("responseArea");
    responseArea.innerText = "Thinking...";

    const apiKey = "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";

    try {
        const gptResponse = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + apiKey
            },
            body: JSON.stringify({
                model: "gpt-4",
                messages: [{ role: "user", content: input }],
                max_tokens: 150
            })
        });

        const data = await gptResponse.json();
        responseArea.innerText = data.choices[0].message.content;
    } catch (error) {
        responseArea.innerText = "Something went wrong. Please try again.";
    }
}

function showChat() {
    document.getElementById("chatSection").classList.remove("hidden");
    document.getElementById("responseArea").innerText = "";
    document.getElementById("userInput").value = "";
}
