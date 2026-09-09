const chatBox = document.getElementById("chatBox");
const userInput = document.getElementById("userInput");

function sendMessage() {
  const userText = userInput.value.trim();

  if (userText === "") {
    return;
  }

  // Display user message
  const userMessage = document.createElement("div");
  userMessage.classList.add("message", "user-message");
  userMessage.textContent = userText;

  chatBox.appendChild(userMessage);
  chatBox.scrollTop = chatBox.scrollHeight;

  // Clear input
  userInput.value = "";

  // Generate bot response
  setTimeout(() => {
    const botReply = document.createElement("div");
    botReply.classList.add("message", "bot-message");
    botReply.textContent = getBotResponse(userText);

    chatBox.appendChild(botReply);
    chatBox.scrollTop = chatBox.scrollHeight;
  }, 600);
}

function getBotResponse(input) {
  input = input.toLowerCase();

  if (
    input.includes("hello") ||
    input.includes("hi") ||
    input.includes("hey")
  ) {
    return "Hello! 👋 How are you doing today?";
  }

  if (input.includes("your name")) {
    return "I'm ChatBot, your friendly assistant 🤖";
  }

  if (input.includes("time")) {
    return "The current time is " + new Date().toLocaleTimeString();
  }

  if (input.includes("date")) {
    return "Today's date is " + new Date().toLocaleDateString();
  }

  if (input.includes("help")) {
    return "Sure! 😊 I can answer basic questions, tell you the time or date, and have a simple conversation.";
  }

  if (input.includes("bye")) {
    return "Goodbye! 👋 Have a great day!";
  }

  if (input.includes("thank")) {
    return "You're welcome! 😊";
  }

  return "I'm not sure about that, but I'm learning every day! 💡";
}

// Enter key support
userInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    sendMessage();
  }
});
