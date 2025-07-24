export const DOM = {
  // DIALOGS
  chooseBtn: document.querySelector('#choose-domain-btn'),
  closeDomainBtn: document.querySelector('#btn-close-domain'),
  closeDialogBtn: document.querySelector('#btn-close-dialog'),
  domainDialog: document.querySelector('#domain-dialog'),
  finishGame: document.querySelector('#close-game-btn'),
  instructionsDialog: document.querySelector('#dialog-instructions'),
  instructionsBtn: document.querySelector('#instructions-btn'),
  wrapperButtons: document.querySelector('#wrapper-buttons'),

  // AUDIO
  rightSound: document.querySelector('#right-answer'),
  wrongSound: document.querySelector('#wrong-answer'),
  winSound: document.querySelector('#win-game'),
  loseSound: document.querySelector('#lose-game'),
  backSound: document.querySelector('#back-sound'),

  // COLOR PROGRESS
  colorQuestion: [...document.querySelectorAll('#wrapper-colors .color-question')],
  wrapperColors: document.querySelector('#wrapper-colors'),
  btnTheme: document.querySelector('.wrapper-btn-theme'),


  // GAME BOARD
  buttonsChildren: [...document.querySelectorAll('#container-answers button')],
  closeAlertBtn: document.querySelector('#btn-close-alert'),
  closeGameBtn: document.querySelector('#btn-close-game'),
  countNrQuestion: document.querySelector('#count-number'),
  containerAnswers: document.querySelector('#container-answers'),
  countText: document.querySelector('#count-text'),
  containerChances: document.querySelector('.container-chances'),
  domainAlert: document.querySelector('#alert-message'),
  gameDialog: document.querySelector('#dialog-game'),
  hearts: [...document.querySelectorAll('.container-chances span')],
  mistakes: document.querySelector('.mistakes'),
  nextQuestionBtn: document.querySelector('#next-question'),
  playBtn: document.querySelector('#play-btn'),
  priviesScore: document.querySelector('#privies-score'),
  results: document.querySelector('.results'),
  score: document.querySelector('#score'),
  scoreHigh: document.querySelector('#high-score'),
  textQuestion: document.querySelector('#text-question'),
  userResults: document.querySelector('.nrQ'),

  // ANSWER BUTTONS
  answer1Btn: document.querySelector('#btn-answer1'),
  answer2Btn: document.querySelector('#btn-answer2'),
  answer3Btn: document.querySelector('#btn-answer3'),
  answer4Btn: document.querySelector('#btn-answer4'),

  // DOMAIN INPUTS
  cssInput: document.querySelector('#css'),
  jsInput: document.querySelector('#js'),
  reactInput: document.querySelector('#react')
};
