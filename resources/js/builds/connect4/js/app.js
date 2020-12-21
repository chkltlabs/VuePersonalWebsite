const gaem = new Game();

/**
 * Listens for click on `#begin-game` and calls startGame() on game object
 */
$('#begin-game').click(function () {
    gaem.startGame();
    this.style.display = 'none';
    document.getElementById('play-area').style.opacity = '1';
});

/**
 * Listens for keydown events, and calls the handler function
 */
document.addEventListener('keydown', function(event){
    gaem.handleKeydown(event); //outputs a string naming the pressed key
});