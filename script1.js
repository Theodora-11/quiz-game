import { arrBiology, arrGeography, arrHistory } from './domains.js';
import { DOM } from './selectors.js';



//--------------CHECK VALUE INPUTS------------//
function checkInputs() {
	const containerInputs = document.querySelector('#container-inputs');
	const inputs = [...containerInputs.querySelectorAll('input')];
		inputs.forEach(e => e.addEventListener('click', (e) => {
		const inputChecked = inputs.findIndex(e => e.checked);
		const valueInput = inputs[inputChecked].value;
		DOM.chooseBtn.dataset.domain = valueInput;
	}))
}


//------------------EVENTS DIALOGS-------------------//
DOM.instructionsBtn.addEventListener('click', () => {DOM.instructionsDialog.showModal()});
DOM.closeDialogBtn.addEventListener('click', () => {DOM.instructionsDialog.close()});
DOM.chooseBtn.addEventListener('click', openDomainDialog);
DOM.closeDomainBtn.addEventListener('click', () => {DOM.domainDialog.close()});


function openInstructionsDialog() {DOM.instructionsDialog.showModal()};
function closeInstructionsDialog() {DOM.instructionsDialog.close()};
function alertMessage() {
	DOM.domainAlert.showModal();
}
function closeDomainAlert() {DOM.domainAlert.close()};
function openDomainDialog() {
	DOM.domainDialog.showModal();
	checkInputs();
}


//----------------DOMAINS FUNCTION-------------//
DOM.playBtn.addEventListener('click', hasChooseDomain);
let work; 

function hasChooseDomain() {
	DOM.closeGameBtn.addEventListener('click', alertMessage);
	DOM.closeAlertBtn.addEventListener('click', closeDomainAlert);
	
  if (DOM.chooseBtn.dataset.domain === DOM.biologyInput.value) {
		DOM.wrapperButtons.style.display = 'none';
		DOM.wrapperColors.style.display = 'flex';
	  DOM.gameDialog.showModal();
    startQuestionsGame(arrBiology);
		let callChangeQuestion = changeQuestion(arrBiology);
		work = callChangeQuestion;

  } else if (DOM.chooseBtn.dataset.domain === DOM.geographyInput.value) {
		DOM.wrapperButtons.style.display = 'none';
		DOM.wrapperColors.style.display = 'flex';
	  DOM.gameDialog.showModal();
    startQuestionsGame(arrGeography);
		let callChangeQuestion = changeQuestion(arrGeography);
		work = callChangeQuestion;

  } else if(DOM.chooseBtn.dataset.domain === DOM.historyInput.value) {
		DOM.wrapperButtons.style.display = 'none';
		DOM.wrapperColors.style.display = 'flex';
	  DOM.gameDialog.showModal();
    startQuestionsGame(arrHistory);
		let callChangeQuestion = changeQuestion(arrHistory);
		work = callChangeQuestion;


  } else {
    DOM.chooseBtn.focus();
    DOM.chooseBtn.style.cssText = 'outline:3px solid rgba(20, 152, 240, 0.97)';
    setTimeout(() => {
      DOM.chooseBtn.style.cssText = 'border-style: none';
    }, 700);
  }
}


//------------------RANDOM BUTTONS DOM---------------// 
function randomButtons() {
	for(let i = DOM.buttonsChildren.length - 1; i >= 0; i--) {
		let randomIndex = Math.floor(Math.random() * (i + 1));
		let origin =  DOM.buttonsChildren[i];
		DOM.buttonsChildren[i] = DOM.buttonsChildren[randomIndex];
		DOM.buttonsChildren[randomIndex] = origin;
	}
	DOM.buttonsChildren.forEach(button => DOM.containerAnswers.appendChild(button));
}


DOM.answer4Btn.addEventListener('click', () => {
	scoreNr++;
	lastScore = scoreNr;
	DOM.score.innerHTML = `${scoreNr}` + '0';
})


function safeSetNextQuestion() {
	if (chances > 0 && nr <= 10) {
		setTimeout(() => {
			DOM.nextQuestionBtn.style.visibility = 'visible';
			DOM.nextQuestionBtn.onclick = work;
		}, 1500);
	} else {
		DOM.nextQuestionBtn.style.visibility = 'hidden';
		DOM.nextQuestionBtn.onclick = null;
	}
}



let nr = 0;
let count = 1;
let scoreNr = 0;
let lastScore = 0;
let chances = 3;


DOM.buttonsChildren.forEach(button => {
	button.disabled = false;
	button.removeEventListener('click', handleAnswerClick);
	button.addEventListener('click', handleAnswerClick);
})


function handleAnswerClick(e) {
	const btnTarget = e.target;
	const dataRightBtn = btnTarget.dataset.answer;

	if(dataRightBtn === 'right') {
		DOM.rightSound.currentTime = 0;
		DOM.rightSound.play();
		btnTarget.style.background = 'rgb(6, 194, 6)';
		DOM.buttonsChildren.forEach(button => {
			button.disabled = true;
			button.style.color = 'black';
		})
		
		safeSetNextQuestion();

	} else {
		chances--;
		DOM.hearts[chances].classList.add('lose-chance');
		DOM.wrongSound.play();
		btnTarget.dataset.answer = 'wrong';
		btnTarget.style.background = 'rgb(234, 23, 23)';
		DOM.buttonsChildren.forEach(button => {
			button.disabled = true;
			button.style.color = 'black';
		})

		setTimeout(() => { 
			DOM.answer4Btn.style.background = 'rgb(6, 194, 6)';
			if(!DOM.wrongSound.pause()) {
				DOM.wrongSound.pause();
				DOM.wrongSound.currentTime = 0;
				DOM.rightSound.play();
			}	
		}, 700);
		
		safeSetNextQuestion();
	}

	if(chances === 0) {	
		setTimeout(() => {
			gameOver()
		}, 1500)
	}
	return

}


function startQuestionsGame(domain) {
	if (chances === 0) return;
	randomButtons();
	DOM.textQuestion.innerHTML = domain[nr].question;
	DOM.answer1Btn.innerHTML = domain[nr].wrongAnswer1;
	DOM.answer2Btn.innerHTML = domain[nr].wrongAnswer2;
	DOM.answer3Btn.innerHTML = domain[nr].wrongAnswer3;
	DOM.answer4Btn.innerHTML = domain[nr].rightAnswer;
	DOM.answer4Btn.dataset.answer = 'right';
		

	DOM.buttonsChildren.forEach(button => {
		button.disabled = false;
		button.style.color = '';
		button.removeEventListener('click', handleAnswerClick);
		button.addEventListener('click', handleAnswerClick);
	})

	let lastColor = (DOM.colorQuestion.length - 1) - nr;
	if(nr < 4) {
		DOM.colorQuestion[lastColor].style.background = 'rgb(217, 240, 7)';
	}

	if(nr === 4) DOM.colorQuestion[lastColor].style.backgroundImage =
		'linear-gradient(to bottom, rgb(6, 194, 6), rgb(217, 240, 7))';

	if(nr > 4 && nr < 10) DOM.colorQuestion[lastColor].style.background = 'rgb(6, 194, 6)';

  nr++;
	DOM.countNrQuestion.style.color = 'rgb(72, 118, 205)';
	DOM.countNrQuestion.innerHTML = Number(count++);
	if(nr === domain.length - 1) {
		DOM.nextQuestionBtn.innerHTML = 'Finish'
	}
	
	gameOver();	
}



DOM.finishGame.addEventListener('click', closeGameProgress);

function closeGameProgress() {
	gameOver();
	restartGame();
	DOM.wrapperColors.style.display = 'none';
	DOM.domainAlert.close();

}


function changeQuestion(x) {
  return function callChangeQuestion() {
    DOM.buttonsChildren.forEach((button) => { 
		button.style.background = "rgba(211, 211, 211, 0.42)"});
    DOM.nextQuestionBtn.style.visibility = 'hidden';
    startQuestionsGame(x);
  }
}


function gameOver() {
	if(nr > 10 || chances === 0) {

		localStorage.setItem('lastScore', lastScore);
		let highScore = localStorage.getItem('highScore');
		if(!highScore) highScore = 0;
		if (lastScore > highScore) {
			localStorage.setItem('highScore', lastScore);
			highScore = lastScore;
		}

		DOM.scoreHigh.innerHTML = `High score: ${highScore}0`;
		DOM.priviesScore.innerHTML = `Current score: ${lastScore}0`;
		void DOM.scoreHigh.offsetWidth;
		DOM.scoreHigh.classList.add('pop-animation');
		DOM.priviesScore.classList.add('pop-animation');

		DOM.hearts.forEach(heart => heart.classList.remove('lose-chance'));
		DOM.containerChances.style.display = 'none';
		DOM.buttonsChildren.forEach((button) => {
			button.style.display = "none";
		})

		if(chances === 0) {DOM.textQuestion.innerHTML = arrBiology[arrBiology.length -1].finish2} 
		if(nr > 10) {DOM.textQuestion.innerHTML = arrBiology[arrBiology.length -1].finish1}
		
		DOM.winSound.play();
		DOM.countNrQuestion.innerHTML = '0';
		DOM.wrapperColors.style.display = 'none';
		DOM.countText.style.display = 'none';
		DOM.score.innerHTML = `${lastScore}` + '0';
		DOM.nextQuestionBtn.onclick = null;
		DOM.chooseBtn.removeAttribute('data-domain');
		DOM.closeGameBtn.removeEventListener('click', alertMessage);
		DOM.closeGameBtn.addEventListener('click', restartGame);
  
	} 
}


function restartGame() {
	nr = 0;
  scoreNr = 0;
  lastScore = 0;
	count = 0;
	chances = 3;
	DOM.score.innerHTML = '00';

	DOM.answer1Btn.innerHTML = '';
	DOM.answer2Btn.innerHTML = '';
	DOM.answer3Btn.innerHTML = '';
	DOM.answer4Btn.innerHTML = '';

	DOM.countText.style.display = 'block';
	DOM.containerChances.style.display = 'block';
	DOM.countNrQuestion.innerHTML = Number(count++);

	DOM.wrapperButtons.style.display = 'flex';
	DOM.wrapperColors.style.display = 'flex';
	DOM.gameDialog.close();
	DOM.hearts.forEach(heart => heart.classList.remove('lose-chance'));
	const containerInputs = document.querySelector('#container-inputs');

	const inputs = [...containerInputs.querySelectorAll('input')];
	inputs.forEach(input => input.checked = false);
	DOM.colorQuestion.forEach(question => question.style.background = '');
	DOM.nextQuestionBtn.innerHTML = 'NEXT';
	

	DOM.buttonsChildren.forEach(button => {
		button.removeAttribute('data-answer');
		button.style.display = "block";
		button.style.backgroundColor = 'rgba(211, 211, 211, 0.42)';
	})

	DOM.nextQuestionBtn.onclick = null;
	DOM.nextQuestionBtn.style.display = 'none';
	DOM.playBtn.removeEventListener('click', hasChooseDomain);
	DOM.playBtn.addEventListener('click', hasChooseDomain);
	DOM.closeGameBtn.removeEventListener('click', restartGame);
	DOM.closeGameBtn.addEventListener('click', alertMessage);
}

        
















