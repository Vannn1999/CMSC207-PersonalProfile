// button from html
const factButton = document.getElementById('factBtn');
const factDisplay = document.getElementById('factDisplay');

factButton.addEventListener('click', function() {
    
    // fun fact display
    factDisplay.textContent = "Fun fact: I love playing video games! In my free time, I play a lot of video games on my PC - FPS, MOBA, story games, you name it!" ;
    
    // button display after click
    factButton.textContent = "Fact Revealed!";
    factButton.style.backgroundColor = "#2a27c4"; 
    factButton.style.color = "#fdfdfd";
    factButton.disabled = true; 
});