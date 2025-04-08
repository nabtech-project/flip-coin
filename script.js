function flipCoin() {
    const coin = document.getElementById("coin");
    const coinSide = document.getElementById("coin-side");

    const headsLabel = document.getElementById("heads-input").value;
    const tailsLabel = document.getElementById("tails-input").value;

    const result = Math.random() < 0.5 ? headsLabel : tailsLabel;

    coin.style.transform = "rotateY(1800deg)";

    setTimeout(() => {
        coin.style.transform = "rotateY(0deg)";
        coinSide.textContent = result;

        const congratsMessage = document.getElementById("congrats-message");
        const winnerSide = document.getElementById("winner-side");
        winnerSide.textContent = result;
        congratsMessage.classList.remove("hidden");

        triggerCrackers();
    }, 500);
}

function toggleCustomization() {
    const customizationSection = document.getElementById("customization-section");

    customizationSection.classList.toggle("hidden");
}

function triggerCrackers() {
    const fireworksContainer = document.getElementById("fireworks-container");

    fireworksContainer.innerHTML = '';

    for (let i = 0; i < 10; i++) {
        const cracker = document.createElement("div");
        cracker.classList.add("cracker");
        fireworksContainer.appendChild(cracker);
    }

    fireworksContainer.classList.remove("hidden");

    setTimeout(() => {
        fireworksContainer.classList.add("hidden");
    }, 1000);
}
