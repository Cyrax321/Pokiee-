<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Yes or No</title>
  <style>
    /* Optional styling */
   body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background-color: lightpink;
        flex-direction:column;
    }
    button {
      padding: 10px 20px;
      margin: 10px;
      font-size: 16px;
      cursor: pointer;
    }
    #heading {
      font-size: 24px;
      margin-top: 20px;
    }
    #image {
      max-width: 150px;
      height: auto;
      margin-top: 20px;
    }
     #yesButton, #noButton{
    background: white;
    padding:8px 16px;
    border:none;
    border-radius:5px;
    }
   
  </style>
</head>
<body>
  <h1 id="heading">Hey my cutie pokiepie..
    Do you Love me?😊❤️</h1>
  <img id="image" src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNGJ0b2Ztdjh6MXNlMTVzZXZuaGd4bG9vYnhyMXV3aDM0MWZ3OHRoNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/c76IJLufpNwSULPk77/giphy.gif" alt="Placeholder Image">
  <div>
  <button id="yesButton">Yes</button>
  <button id="noButton" onmouseover="moveButton()">No</button> </div>
  
  
  <!-- Optional JavaScript for button functionality -->
  <script>
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
      noButton.style.display = "none";// Change image source if desired
    });
    
    noButton.addEventListener('click', () => {
      heading.textContent = "Sorry that you didn't like the image!";
      image.src = "https://via.placeholder.com/150"; // Reset image source if desired
    });
  </script>
</body>
</html>
