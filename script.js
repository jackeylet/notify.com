document.addEventListener('DOMContentLoaded', function () {
    // Get the Start button and the options div
    const startButton = document.getElementById('startButton');
    const optionsDiv = document.getElementById('options');
  
    // Add event listener to Start button
    startButton.addEventListener('click', function () {
      // Hide the Start button
      startButton.style.display = 'none';
  
      // Show the options (Anime, Games, Movies, Cartoons)
      optionsDiv.style.display = 'block';
    });
  });
  