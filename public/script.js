const socket = io();

function sendMessage() {
    const message = document.getElementById("message-input").value;
    socket.emit("chat message", message);
    document.getElementById("message-input").value = "";
}

socket.on("chat message", (msg) => {
    const messageContainer = document.getElementById("messages");
    const messageElement = document.createElement("div");
    messageElement.textContent = msg;
    messageContainer.appendChild(messageElement);
});
