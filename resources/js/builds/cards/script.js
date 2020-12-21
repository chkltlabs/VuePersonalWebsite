const question  = document.getElementById('question');
const answer    = document.getElementById('answer');
const button    = document.getElementById('next');
const select      = document.getElementById('select');

document.addEventListener('keypress', function(e){
    if(e.key.toString() === 'Enter' || e.key.toString() === ' '){
        buttonToggle();
    }
});

button.addEventListener('click', buttonToggle);

function buttonToggle() {
    if(button.textContent === "Next Flashcard" || button.textContent === "Let's Begin!"){
        getRandFact();
        button.textContent = 'Show Answer';
        answer.style.display = 'none';
    } else {
        button.textContent = "Next Flashcard";
        answer.style.display = 'block';
    }
}

function getRandFact() {
    let url = select.options[select.selectedIndex].value + '.json';
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            let data = JSON.parse(this.responseText);
            let randQ = Math.floor(Math.random() * data.q.length);
            question.firstElementChild.innerHTML = data.q[randQ];
            answer.firstElementChild.innerHTML = data.a[randQ];
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}