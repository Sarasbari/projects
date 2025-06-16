let randomnumber = Math.floor(Math.random() * 100) + 1;

const submit = document.querySelector("#subt");
const remaining = document.querySelector(".lastResult");
const loworhigh = document.querySelector(".lowOrHi");
const startover = document.querySelector(".resultParas");
const userinput = document.querySelector(".guessField");
const guessField = document.querySelector(".guesses");

const p = document.createElement("p");

let prevguesses = [];
let numofguesses = 1;
let Playgame = true;

if (Playgame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    let guess = Number(userinput.value);
    console.log(guess);
    validateguess(guess);
  });
}

function validateguess(guess) {
  if (isNaN(guess) || guess < 1 || guess > 100) {
    alert("Please enter a valid number between 1 and 100");
  } else {
    prevguesses.push(guess);
    if (numofguesses === 10 && guess !== randomnumber) {
      displayguess(guess);
      displaymsg(`Game over! Random number was ${randomnumber}`);
      endgame();
    } else {
      displayguess(guess);
      checkguess(guess);
    }
  }
}

function checkguess(guess) {
  if (guess === randomnumber) {
    displaymsg("🎉 Congratulations! You got it right!");
    endgame();
  } else if (guess < randomnumber) {
    displaymsg("📉 Your guess is too low!");
  } else {
    displaymsg("📈 Your guess is too high!");
  }
}

function displayguess(guess) {
  userinput.value = '';
  guessField.innerHTML += `${guess}, `;
  remaining.innerHTML = `${10 - numofguesses}`;
  numofguesses++;
}

function displaymsg(msg) {
  loworhigh.innerHTML = `<h2>${msg}</h2>`;
}

function endgame() {
  userinput.setAttribute('disabled', '');
  submit.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newgame">Start New Game</h2>`;
  startover.appendChild(p);
  Playgame = false;
  newgame();
}

function newgame() {
  const newgamebutton = document.querySelector('#newgame');
  newgamebutton.addEventListener('click', function () {
    randomnumber = Math.floor(Math.random() * 100) + 1;
    prevguesses = [];
    numofguesses = 1;
    Playgame = true;
    guessField.innerHTML = '';
    remaining.innerHTML = '10';
    userinput.removeAttribute('disabled');
    submit.removeAttribute('disabled');
    startover.removeChild(p);
    loworhigh.innerHTML = '';
  });
}
