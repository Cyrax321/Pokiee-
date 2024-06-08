const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const heading = document.getElementById('heading');
const image = document.getElementById('image');

function moveButton() {
  const newX = Math.floor(Math.random() * (window.innerWidth - noButton.offsetWidth));
  const newY = Math.floor(Math.random() * (window.innerHeight - noButton.offsetHeight));
  noButton.style.position = 'absolute';
  noButton.style.left = newX + 'px';
  noButton.style.top = newY + 'px';
}

yesButton.addEventListener('click', () => {
  heading.textContent = "Hehe, I knew it!😊";
  image.src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZXE0aWZlaDM3bnlqamZma3drcGU1MzVzc3FwMmt2c3E1bDQyYnA2dCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/bA5cblwksWXDOwSzUI/giphy.gif";
  yesButton.style.display = "none";
  noButton.style.display = "none";
});

noButton.addEventListener('click', () => {
  heading.textContent = "Sorry that you didn't like the image!";
  image.src = "https://via.placeholder.com/150";
});
