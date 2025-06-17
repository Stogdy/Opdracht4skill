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
  count = Math.max(count - 1, 0); 
  updateCounterDisplay();
}


document.querySelectorAll(".butty").forEach((button) => {
  button.addEventListener("click", () => {
    counter();
  });
});


document.querySelectorAll(".buttson").forEach((button) => {
  button.addEventListener("click", () => {
    decreaseCounter();
  });
});


let nujabesCard1 = [
  "Samurai Champloo Music Record: Departure",
  "by Nujabes & Fat Jon",
  "€19,99",
  "images/Samurai-Champloo-Music-Record-Departure_vinyl_black.webp",
  "description",
  true
]

let nujabesCard2 = [
  "Modal Soul",
  "by Nujabes",
  "€19,99",
  "images/Modal Soul.webp",
  "description",
  false
]

let nujabesCard3 = [
  "Luv(Sic) Hexalogy",
  "by Nujabes & Shing02",
  "€19,99",
  "images/Luv Sic.webp",
  "description",
  false
]

let NujabesCards = [
  nujabesCard1,
  nujabesCard2,
  nujabesCard3
]

let html = "";
for (let i = 0; i < NujabesCards.length; i++) {
  let card = NujabesCards[i]
  
  let header = card[0]
  let artist = card[1]
  let price = card[2]
  let img = card[3]
  let description = card[4]
  let isAvailable = card[5]

  let availableText;
  if (isAvailable) {
    availableText = "is beschikbaar"
  }
  else {
    availableText = "is niet beschikbaar"
  }

  html += `
      <li class="nujabes-card">
        <h1>
          <br>${header}<br>
          ${artist}
        </h1>

        <br>
        ${availableText}
        <h2>${price}</h2>

        </br>

        <img src="${img}" alt="${description}" />

        <button class="card__button butty" onclick="counter()">
          Add to Cart
        </button>

        <button class="butty" onclick="decreaseCounter()">Remove from cart</button>
        
      </li>`
}

document.getElementById("products").innerHTML = html;
