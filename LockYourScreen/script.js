const img = document.querySelector("img");
const heading = document.querySelector("h1");
const timer = document.querySelector("#timer");

let start = Date.now();
setInterval(
  () => (timer.textContent = Math.floor((Date.now() - start) / 1000)),
  1000
);

function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

// Your code here
fetch("images.json")
  .then(response => response.json())
  .then(images => {
    const randomImg = getRandomElement(images)

    heading.textContent = randomImg.title
    img.src = randomImg.src
    img.alt = randomImg.al
  })
