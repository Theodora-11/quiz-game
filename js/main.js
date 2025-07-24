import { arrCSS, arrJavaScript, arrReact } from './domains.js';
import { DOM } from './selectors.js';
import { checkInputs } from './inputs.js';


//-------------CHANGE THEME MOD-----------//
DOM.btnTheme.addEventListener('click', (e) => {
	if(e.target.classList.contains('btn-theme')) {
		document.body.classList.toggle('dark');
		console.log('is dark');
	}
});


checkInputs();

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


//----------------DOMAINS GAME-------------//
DOM.playBtn.addEventListener('click', hasChooseDomain);
let work; 


function hasChooseDomain() {
	DOM.closeGameBtn.addEventListener('click', alertMessage);
	DOM.closeAlertBtn.addEventListener('click', closeDomainAlert);
	
  if (DOM.chooseBtn.dataset.domain === DOM.cssInput.value) {
		playBackMusic();
		DOM.wrapperButtons.style.display = 'none';
		DOM.wrapperColors.style.display = 'flex';
	  DOM.gameDialog.showModal();
    startQuestionsGame(arrCSS);
		let callChangeQuestion = changeQuestion(arrCSS);
		work = callChangeQuestion;
		
  } else if (DOM.chooseBtn.dataset.domain === DOM.jsInput.value) {
		playBackMusic();
		DOM.wrapperButtons.style.display = 'none';
		DOM.wrapperColors.style.display = 'flex';
	  DOM.gameDialog.showModal();
    startQuestionsGame(arrJavaScript);
		let callChangeQuestion = changeQuestion(arrJavaScript);
		work = callChangeQuestion;
		
  } else if(DOM.chooseBtn.dataset.domain === DOM.reactInput.value) {
		playBackMusic();
		DOM.wrapperButtons.style.display = 'none';
		DOM.wrapperColors.style.display = 'flex';
	  DOM.gameDialog.showModal();
    startQuestionsGame(arrReact);
		let callChangeQuestion = changeQuestion(arrReact);
		work = callChangeQuestion;


  } else {
    DOM.chooseBtn.focus();
    DOM.chooseBtn.style.cssText = 'outline:3px solid rgba(20, 152, 240, 0.97)';
    setTimeout(() => {
      DOM.chooseBtn.style.cssText = 'border-style: none';
    }, 700);
  }
}

//---------------PLAY BACKGROUND MUSIC-----------//

function playBackMusic() {
	DOM.backSound.play();
	DOM.backSound.addEventListener('timeupdate', () => {
		if (DOM.backSound.currentTime > DOM.backSound.duration - 0.4) {
			DOM.backSound.currentTime = 0;
			DOM.backSound.play();
		}
	});
}

//------------------RANDOM BUTTONS IN DOM---------------// 
function randomButtons() {
	for(let i = DOM.buttonsChildren.length - 1; i >= 0; i--) {
		let randomIndex = Math.floor(Math.random() * (i + 1));
		let origin =  DOM.buttonsChildren[i];
		DOM.buttonsChildren[i] = DOM.buttonsChildren[randomIndex];
		DOM.buttonsChildren[randomIndex] = origin;
	}
	DOM.buttonsChildren.forEach(button => DOM.containerAnswers.appendChild(button));
}

// -------------INCREASE SCORE------------//

DOM.answer4Btn.addEventListener('click', () => {
	scoreNr++;
	lastScore = scoreNr;
	DOM.score.innerHTML = `${scoreNr}` + '0';
})



//---------ADD NEXT QUESTION-----//

function safeSetNextQuestion() {
	if (chances > 0 && nr <= 10) {
		setTimeout(() => {
			DOM.nextQuestionBtn.style.display = 'block';
			DOM.nextQuestionBtn.onclick = work;
		}, 1500);
	} else {
		DOM.nextQuestionBtn.style.display = 'none';
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

//-------------- HANDLE ANSWER CLICK-------------//

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

		DOM.wrongSound.onended = () => { 
			DOM.answer4Btn.style.background = 'rgb(6, 194, 6)';
			DOM.rightSound.currentTime = 0;
			DOM.rightSound.play();
		}
		
		safeSetNextQuestion();
	}

	if(chances === 0) {	
		setTimeout(() => {
			gameOver()
		}, 1500)
	}
	return

}


//---------------START QUIZ-----------// 

function startQuestionsGame(domain) {
	DOM.gameDialog.style.textAlign = 'center';

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

//---------------CLOSE GAME PROGRESS------------// 

function closeGameProgress() {
	gameOver();
	restartGame();
	DOM.wrapperColors.style.display = 'none';
	DOM.domainAlert.close();
}

//------------CHANGE QUESTION DOMAIN -------------//

function changeQuestion(x) {
  return function callChangeQuestion() {
    DOM.buttonsChildren.forEach((button) => { 
		button.style.background = "rgba(211, 211, 211, 0.42)"});
    DOM.nextQuestionBtn.style.display = 'none';
    startQuestionsGame(x);
  }
}

//----------------SHOW LOSE MESSAGE -----------//
function shoeMessageLoseChances() {
	if(DOM.chooseBtn.dataset.domain === DOM.cssInput.value) {
		DOM.textQuestion.innerHTML = arrCSS[arrCSS.length -1].finish2;

	} else if( DOM.chooseBtn.dataset.domain === DOM.jsInput.value) {
		DOM.textQuestion.innerHTML = arrJavaScript[arrJavaScript.length -1].finish2;

	} else if(DOM.chooseBtn.dataset.domain === DOM.reactInput.value) {
		DOM.textQuestion.innerHTML = arrReact[arrReact.length -1].finish2;
	}
}


//----------------SHOW WIN MESSAGE -----------//
function showMessageWin() {
	if(DOM.chooseBtn.dataset.domain === DOM.cssInput.value) {
		DOM.textQuestion.innerHTML = arrCSS[arrCSS.length -1].finish1;

	} else if( DOM.chooseBtn.dataset.domain === DOM.jsInput.value) {
		DOM.textQuestion.innerHTML = arrJavaScript[arrJavaScript.length -1].finish1;

	} else if(DOM.chooseBtn.dataset.domain === DOM.reactInput.value) {
		DOM.textQuestion.innerHTML = arrReact[arrReact.length -1].finish1;
	}
}


//---------------GAME OVER-------------//
function gameOver() {
	if(nr > 10 || chances === 0) {
		DOM.backSound.pause();
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

		DOM.gameDialog.classList.add('rotate-game');
		void DOM.gameDialog.offsetWidth;
		DOM.gameDialog.classList.add('active');

		if(chances === 0 ) {
			DOM.loseSound.play();
			shoeMessageLoseChances();
		}

		if(nr > 10) {
			DOM.winSound.play();
			showMessageWin();
			confetti({
				particleCount: 200,
    		spread: 70,
    		origin: { y: 0.6 }
			});
			DOM.results.innerHTML = `Right answers: <span class="nrQ">${lastScore}</span> from 10`;
			DOM.mistakes.innerHTML = `Wrong answers: <span class="nrW">${10 - lastScore}</span>`;
		}

	
		DOM.countNrQuestion.innerHTML = '0';
		DOM.wrapperColors.style.display = 'none';
		DOM.countText.style.display = 'none';
		DOM.results.style.display = 'block';
		DOM.mistakes.style.display = 'block';
		DOM.gameDialog.style.textAlign = 'left';
		DOM.score.innerHTML = `${lastScore}` + '0';
		DOM.nextQuestionBtn.onclick = null;
		DOM.chooseBtn.removeAttribute('data-domain');
		DOM.closeGameBtn.removeEventListener('click', alertMessage);
		DOM.closeGameBtn.addEventListener('click', restartGame);
	} 
}


//-------------RESTART GAME------------//

function restartGame() {
	DOM.backSound.pause();
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

	DOM.results.style.display = 'none';
	DOM.mistakes.style.display = 'none';
	DOM.countText.style.display = 'block';
	DOM.containerChances.style.display = 'block';
	DOM.gameDialog.style.textAlign = 'left';
	DOM.countNrQuestion.innerHTML = Number(count++);

	DOM.wrapperButtons.style.display = 'flex';
	DOM.wrapperColors.style.display = 'flex';
	DOM.gameDialog.classList.remove('rotate-game');
	DOM.gameDialog.classList.remove('active');
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

        
















