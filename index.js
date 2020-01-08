
const button = document.querySelector('.submito');
texto = document.querySelector('.texto');
texto.focus();

const prev = "Previous guesses:";

let container = document.createElement('div');
container.className = 'container';

let correct = document.createElement('p');
correct.textContent = "Congratulations! You got it right!";
correct.className = 'correct';
container.appendChild(correct);

let wrong = document.createElement('p');
wrong.textContent = "Wrong!";
wrong.className = 'wrong';
container.appendChild(wrong);

let high = document.createElement('p');
high.textContent = "Last guess was too high!";
high.style.display = 'none';
container.appendChild(high);

let low = document.createElement('p');
low.textContent = "Last guess was too low!";
low.style.display = 'none';
container.appendChild(low);

let msg = document.createElement('p');
msg.textContent = prev;
container.appendChild(msg);

let div = document.createElement('div');
document.body.appendChild(div);
div.style.display = 'none';
div.className = 'div';
let resetButton = document.createElement('input');
resetButton.type = 'submit';
resetButton.value = 'start new game';
div.appendChild(resetButton);

container.appendChild(msg);
container.appendChild(correct);
container.appendChild(wrong);
container.appendChild(high);
container.appendChild(low);

let app = document.querySelector('.app');
const numTries = 10;
let tries = 0;
let prevValues;

button.addEventListener('click', () => {
	const answer = Math.floor((Math.random() * 10));
	console.log(answer);
	const num = (texto.value === '') ? 0 : parseInt(texto.value);
	texto.value = '';
	msg.style.display = 'block';

	if (tries <= numTries){
		msg.textContent = msg.textContent + appendResult(num);
		if (num === answer){
			correct.style.display = 'block';
			wrong.style.display = 'none';
			low.style.display = 'none';
      		low.style.display = 'none';
		} else {
			correct.style.display = 'none';
			wrong.style.display = 'block';
			if (num > answer){
				high.style.display = 'block';
				low.style.display = 'none';
				div.style.display = 'none';
			} else {
				low.style.display = 'block';
				high.style.display = 'none';
				div.style.display = 'none';
			}
		}
		tries++;
	} else {

		wrong.textContent = '!!!GAME OVER!!!';
		wrong.style.display = 'block';
		correct.style.display = 'none';
		texto.disabled = true;
		button.disabled = true;
		high.style.display = 'none';
		low.style.display = 'none';
		div.style.display = 'block';
		
	}

  	app.appendChild(container);
});

resetButton.addEventListener('click', () => {
	msg.textContent = prev;
	msg.style.display = 'none';
	wrong.style.display = 'none';
	div.style.display = 'none';
	button.disabled = false;
	texto.disabled = false;
	texto.focus();
	tries = 0;

})

appendResult = (answer) => {
	return ' ' + answer;
}

