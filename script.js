let count = 0;

function updateCounterDisplay() {
  const counterElement = document.getElementById("counter");
  if (counterElement) {
    counterElement.textContent = count;
  }
}

function counter() {
  count++;
  updateCounterDisplay();
}

function decreaseCounter() {
  count = Math.max(count - 1, 0); // prevents going below 0
  updateCounterDisplay();
}

// Add event listeners to "Add to Cart" buttons
document.querySelectorAll(".butty").forEach((button) => {
  button.addEventListener("click", () => {
    counter();
  });
});

// Add event listeners to "Delete" buttons — now only decreases counter
document.querySelectorAll(".buttson").forEach((button) => {
  button.addEventListener("click", () => {
    decreaseCounter(); // NO DOM removal anymore
  });
});
