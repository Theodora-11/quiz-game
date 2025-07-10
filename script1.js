//-------------------DIALOGS CONSTANTS---------------//
const domainDialog = document.querySelector('#domain-dialog');
const chooseBtn = document.querySelector('#choose-domain-btn');
const closeDomainBtn = document.querySelector('#btn-close-domain');
const instructionsDialog = document.querySelector('#dialog-instructions');
const instructionsBtn = document.querySelector('#instructions-btn'); 
const closeDialogBtn = document.querySelector('#btn-close-dialog');
const wrapperButtons = document.querySelector('#wrapper-buttons');
const finishGame = document.querySelector('#close-game-btn');


//-------------AUDIO EFFECTS--------------//
const wrongSound = document.querySelector('#wrong-answer');
const rightSound = document.querySelector('#right-answer');
const winSound = document.querySelector('#win-game');

//-----------PROGRESS COLOR-QUESTIONS-----------//
const wrapperColors = document.querySelector('#wrapper-colors');
const colorQuestion = [...wrapperColors.querySelectorAll('.color-question')];

//------------GAME BOARD--------------//
const gameDialog = document.querySelector('#dialog-game');
const playBtn = document.querySelector('#play-btn');
const closeGameBtn = document.querySelector('#btn-close-game');
const textQuestion = document.querySelector('#text-question');
const gameBoard = document.querySelector('#game-board');
const containerAnswers = document.querySelector('#container-answers');
const buttonsChildren = [...containerAnswers.querySelectorAll('button')];
const countNrQuestion = document.querySelector('#count-number');
const countText = document.querySelector('#count-text');
const nextQuestionBtn = document.querySelector('#next-question');
const score = document.querySelector('#score');
const scoreHigh = document.querySelector('#high-score');
const domainAlert = document.querySelector('#alert-message');
const closeAlertBtn = document.querySelector('#btn-close-alert');
const priviesScore = document.querySelector('#privies-score');


//-----------------BUTTONS GAME ANSWERS----------------//
const answer1Btn = document.querySelector('#btn-answer1');
const answer2Btn = document.querySelector('#btn-answer2');
const answer3Btn = document.querySelector('#btn-answer3');
const answer4Btn = document.querySelector('#btn-answer4');


//----------------INPUTS DOMAIN-----------------//
const biologyInput = document.querySelector('#biology'); 
const geographyInput = document.querySelector('#geography'); 
const historyInput = document.querySelector('#history');


//--------------CHECK VALUE INPUTS------------//
function checkInputs() {
	const containerInputs = document.querySelector('#container-inputs');
	const inputs = [...containerInputs.querySelectorAll('input')];
		inputs.forEach(e => e.addEventListener('click', (e) => {
		const inputChecked = inputs.findIndex(e => e.checked);
		const valueInput = inputs[inputChecked].value;
		chooseBtn.dataset.domain = valueInput;
	}))
}



//------------------EVENTS DIALOGS-------------------//
instructionsBtn.addEventListener('click', () => {instructionsDialog.showModal()});
closeDialogBtn.addEventListener('click', () => {instructionsDialog.close()});
chooseBtn.addEventListener('click', openDomainDialog);
closeDomainBtn.addEventListener('click', () => {domainDialog.close()});


function openInstructionsDialog() {instructionsDialog.showModal()};
function closeInstructionsDialog() {instructionsDialog.close()};
function alertMessage() {
	domainAlert.showModal();
}
function closeDomainAlert() {domainAlert.close()};
function openDomainDialog() {
	domainDialog.showModal();
	checkInputs();
}


//----------------DOMAINS FUNCTION-------------//
playBtn.addEventListener('click', hasChooseDomain);
let work; 

function hasChooseDomain() {
	closeGameBtn.addEventListener('click', alertMessage);
	closeAlertBtn.addEventListener('click', closeDomainAlert);
	
  if (chooseBtn.dataset.domain === biologyInput.value) {
		wrapperButtons.style.display = 'none';
		wrapperColors.style.display = 'flex';
	  gameDialog.showModal();
    startQuestionsGame(arrBiology);
		let callChangeQuestion = changeQuestion(arrBiology);
		work = callChangeQuestion;

  } else if (chooseBtn.dataset.domain === geographyInput.value) {
		wrapperButtons.style.display = 'none';
	  gameDialog.showModal();
    startQuestionsGame(arrGeography);
		let callChangeQuestion = changeQuestion(arrGeography);
		work = callChangeQuestion;

  } else if(chooseBtn.dataset.domain === historyInput.value) {
		wrapperButtons.style.display = 'none';
	  gameDialog.showModal();
    startQuestionsGame(arrHistory);

  } else {
    chooseBtn.focus();
    chooseBtn.style.cssText = 'outline:4px solid rgba(20, 152, 240, 0.97)';
    setTimeout(() => {
      chooseBtn.style.cssText = 'border-style: none';
    }, 700);
  }
}


const arrBiology = [
  {
    question: '1. What is the longest bone in the human body?',
    rightAnswer: 'Femur',
    wrongAnswer1: 'Tibia',
    wrongAnswer2: 'Humerus',
    wrongAnswer3: 'Scapula',
  },
  {
    question: '2. How many chambers does the human heart have?',
    rightAnswer: '4',
    wrongAnswer1: '2',
    wrongAnswer2: '3',
    wrongAnswer3: '5',
  },
  {
    question: '3. Which organ is responsible for filtering blood and producing urine?',
    rightAnswer: 'Kidney',
    wrongAnswer1: 'Liver',
    wrongAnswer2: 'Lungs',
    wrongAnswer3: 'Pancreas',
  },
  {
    question: '4. What type of joint connects the bones of the skull?',
    rightAnswer: 'Immovable joint (suture)',
    wrongAnswer1: 'Ball and socket',
    wrongAnswer2: 'Hinge',
    wrongAnswer3: 'Pivot',
  },
  {
    question: '5. Which muscle is primarily responsible for breathing?',
    rightAnswer: 'Diaphragm',
    wrongAnswer1: 'Biceps',
    wrongAnswer2: 'Trapezius',
    wrongAnswer3: 'Gluteus maximus',
  },
  {
    question: '6. What is the main function of red blood cells?',
    rightAnswer: 'Carry oxygen',
    wrongAnswer1: 'Fight infection',
    wrongAnswer2: 'Clot blood',
    wrongAnswer3: 'Carry nutrients',
  },
  {
    question: '7. Which part of the brain controls balance and coordination?',
    rightAnswer: 'Cerebellum',
    wrongAnswer1: 'Cerebrum',
    wrongAnswer2: 'Medulla',
    wrongAnswer3: 'Hippocampus',
  },
  {
    question: '8. The human body has how many pairs of ribs?',
    rightAnswer: '12',
    wrongAnswer1: '10',
    wrongAnswer2: '14',
    wrongAnswer3: '15',
  },
  {
    question: '9. What is the name of the largest artery in the human body?',
    rightAnswer: 'Aorta',
    wrongAnswer1: 'Vena cava',
    wrongAnswer2: 'Pulmonary artery',
    wrongAnswer3: 'Carotid artery',
  },
  {
    question: '10. Which gland regulates metabolism by producing thyroid hormones?',
    rightAnswer: 'Thyroid gland',
    wrongAnswer1: 'Adrenal gland',
    wrongAnswer2: 'Pituitary gland',
    wrongAnswer3: 'Pancreas',
  },
  {
    question: 'You finish the questions! Your brain refreshes its memory with every correct question!',
  }
];

const arrGeography = [ 
	{
		question: '1. Which of the following is a hot wind?',
		rightAnswer: 'Sirocco',
		wrongAnswer2: 'Squall',
		wrongAnswer1:' Icy',
		wrongAnswer3: 'Typhoon',
	},
	{
		question: '2. What is the largest island in the Caribbean?',
		wrongAnswer3: 'Sardinia',
		rightAnswer: 'Cuba',
		wrongAnswer2: 'Greenland',
		wrongAnswer1: 'Iceland',
	},
	{
		question: '3. What population predominantly lives in the Republic of Cyprus?',
		wrongAnswer3: 'Turks',
		rightAnswer: 'Greeks',
		wrongAnswer1: 'Spanish',
		wrongAnswer2: 'Italians',
	},
	{
		question: "4. How is Romania's position in Europe characterized?",
		wrongAnswer1: 'Northern position',
		rightAnswer: 'Southeastern position',
		wrongAnswer2: 'Western position',
		wrongAnswer3: 'Central position',
	},
	{
		question: '5. What are the two largest islands of Italy?',
		wrongAnswer1: 'Corsica si  Crete',
		rightAnswer: 'Sardinia si Seville',
		wrongAnswer2: 'Malta si Rhodos',
		wrongAnswer3: 'Majorca si Ibiza',
	},
	{
		question: '6. What is the capital of Croatia?',
		wrongAnswer1: 'Vienna',
		wrongAnswer2: ' Tallinn',
		wrongAnswer3: 'Brussels',
		rightAnswer: ' Zagreb',
	},
	{
		question: '7. On which water is river transport carried out in Romania?',
		wrongAnswer3: 'Olt',
		wrongAnswer2: 'Mores',
		rightAnswer: 'Danube',
		wrongAnswer1: 'Prut',
	},
	{
		question: '8. What is the largest river in Europe?',
		wrongAnswer3: 'Vistula',
		wrongAnswer2: 'Elba',
		rightAnswer: 'Volga',
		wrongAnswer1: 'Tajo',
	},
	{
		question: '9. What river flows through Austria?',
		wrongAnswer1: 'Volga',
		wrongAnswer2: ' Rhine',
		wrongAnswer3: 'Tisza',
		rightAnswer: 'Danube',
	},
	{
		question: '10. What is the capital of Finland?',
		wrongAnswer1: 'Copenhagen',
		wrongAnswer2: ' Budapest',
		wrongAnswer3: 'Dublin',
		rightAnswer: ' Helsinki',
	},
  {
		question: 'You finish the questions! Your brain refreshes its memory with every correct question!',

	}
]

//------------------RANDOM BUTTONS DOM---------------// 
function randomButtons() {
	for(let i = buttonsChildren.length - 1; i >= 0; i--) {
		let randomIndex = Math.floor(Math.random() * (i + 1));
		let origin =  buttonsChildren[i];
		buttonsChildren[i] = buttonsChildren[randomIndex];
		buttonsChildren[randomIndex] = origin;
	}
	buttonsChildren.forEach(button => containerAnswers.appendChild(button));
}


answer4Btn.addEventListener('click', () => {
	scoreNr++;
	lastScore = scoreNr;
	score.innerHTML = `${scoreNr}` + '0';
})


function safeSetNextQuestion() {
	if (chances > 0 && nr <= 10) {
		setTimeout(() => {
			nextQuestionBtn.style.display = 'block';
			nextQuestionBtn.onclick = work;
		}, 1500);
	} else {
		nextQuestionBtn.style.display = 'none';
		nextQuestionBtn.onclick = null;
	}
}



let nr = 0;
let count = 1;
let scoreNr = 0;
let lastScore = 0;
let chances = 3;

buttonsChildren.forEach(button => {
	button.disabled = false;
	button.removeEventListener('click', handleAnswerClick);
	button.addEventListener('click', handleAnswerClick);
})

function handleAnswerClick(e) {
	const btnTarget = e.target;
	const dataRightBtn = btnTarget.dataset.answer;

	if(dataRightBtn === 'right') {
		rightSound.currentTime = 0;
		rightSound.play();
		btnTarget.style.background = 'rgb(6, 194, 6)';
		buttonsChildren.forEach(button => {
			button.disabled = true;
			button.style.color = 'black';
		})
		
		safeSetNextQuestion();

	} else {
		chances--;
		wrongSound.play();
		btnTarget.dataset.answer = 'wrong';
		btnTarget.style.background = 'rgb(234, 23, 23)';
		buttonsChildren.forEach(button => {
			button.disabled = true;
			button.style.color = 'black';
		})

		setTimeout(() => { 
			answer4Btn.style.background = 'rgb(6, 194, 6)';
			if(!wrongSound.pause()) {
				wrongSound.pause();
				wrongSound.currentTime = 0;
				rightSound.play();
			}	
		}, 700);
		console.log(chances)

		safeSetNextQuestion();
	}

	if(chances === 0) {	
		setTimeout(() => {
			gameOver()
		}, 1000)
	}
	return

}


function startQuestionsGame(domain) {
	if (chances === 0) return;
	randomButtons();
	textQuestion.innerHTML = domain[nr].question;
	answer1Btn.innerHTML = domain[nr].wrongAnswer1;
	answer2Btn.innerHTML = domain[nr].wrongAnswer2;
	answer3Btn.innerHTML = domain[nr].wrongAnswer3;
	answer4Btn.innerHTML = domain[nr].rightAnswer;
	answer4Btn.dataset.answer = 'right';
		

	buttonsChildren.forEach(button => {
		button.disabled = false;
		button.style.color = '';
		button.removeEventListener('click', handleAnswerClick);
		button.addEventListener('click', handleAnswerClick);
	})

	let lastColor = (colorQuestion.length - 1) - nr;
	if(nr < 4) {
		colorQuestion[lastColor].style.background = 'rgb(217, 240, 7)';
	}

	if(nr === 4) colorQuestion[lastColor].style.backgroundImage =
		'linear-gradient(to bottom, rgb(6, 194, 6), rgb(217, 240, 7))';

	if(nr > 4 && nr < 10) colorQuestion[lastColor].style.background = 'rgb(6, 194, 6)';

  nr++;
	countNrQuestion.style.color = 'rgb(72, 118, 205)';
	countNrQuestion.innerHTML = Number(count++);
	if(nr === domain.length - 1) {
		nextQuestionBtn.innerHTML = 'Finish'
	}
	
	gameOver();	
}



finishGame.addEventListener('click', closeGameProgress);

function closeGameProgress() {
	gameOver();
	restartGame();
	wrapperColors.style.display = 'none';
	domainAlert.close();

}


function changeQuestion(x) {
  return function callChangeQuestion() {
    buttonsChildren.forEach((button) => { 
		button.style.background = "rgba(211, 211, 211, 0.42)"});
    nextQuestionBtn.style.display = 'none';
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

		scoreHigh.innerHTML = `High score: ${highScore}0`;
		priviesScore.innerHTML = `Current score: ${lastScore}0`;
		scoreHigh.classList.remove('pop-animation');
		void scoreHigh.offsetWidth;
		scoreHigh.classList.add('pop-animation');

		buttonsChildren.forEach((button) => {
			button.style.display = "none";
		})
		
		textQuestion.innerHTML = arrBiology[arrBiology.length -1].question;
		winSound.play();
		countNrQuestion.innerHTML = '0';
		wrapperColors.style.display = 'none';
		countText.style.display = 'none';
		score.innerHTML = `${lastScore}` + '0';
		nextQuestionBtn.onclick = null;
		chooseBtn.removeAttribute('data-domain');
		closeGameBtn.removeEventListener('click', alertMessage);
		closeGameBtn.addEventListener('click', restartGame);
  
	} 
}


function restartGame() {
	nr = 0;
  scoreNr = 0;
  lastScore = 0;
	count = 0;
	chances = 3;
	score.innerHTML = '00';

	answer1Btn.innerHTML = '';
	answer2Btn.innerHTML = '';
	answer3Btn.innerHTML = '';
	answer4Btn.innerHTML = '';

	countText.style.display = 'block';
	countNrQuestion.innerHTML = Number(count++);

	wrapperButtons.style.display = 'flex';
	wrapperColors.style.display = 'flex';
	gameDialog.close();
	const containerInputs = document.querySelector('#container-inputs');
	const inputs = [...containerInputs.querySelectorAll('input')];
	inputs.forEach(input => input.checked = false);
	colorQuestion.forEach(question => question.style.background = '');
	nextQuestionBtn.innerHTML = 'NEXT';
	

	buttonsChildren.forEach(button => {
		button.removeAttribute('data-answer');
		button.style.display = "block";
		button.style.backgroundColor = 'rgba(211, 211, 211, 0.42)';
	})

	nextQuestionBtn.onclick = null;
	nextQuestionBtn.style.display = 'none';
	playBtn.removeEventListener('click', hasChooseDomain);
	playBtn.addEventListener('click', hasChooseDomain);
	closeGameBtn.removeEventListener('click', restartGame);
	closeGameBtn.addEventListener('click', alertMessage);
}

        
















