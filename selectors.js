export const DOM = {
  // DIALOGS
  domainDialog: document.querySelector('#domain-dialog'),
  chooseBtn: document.querySelector('#choose-domain-btn'),
  closeDomainBtn: document.querySelector('#btn-close-domain'),
  instructionsDialog: document.querySelector('#dialog-instructions'),
  instructionsBtn: document.querySelector('#instructions-btn'),
  closeDialogBtn: document.querySelector('#btn-close-dialog'),
  wrapperButtons: document.querySelector('#wrapper-buttons'),
  finishGame: document.querySelector('#close-game-btn'),

  // AUDIO
  wrongSound: document.querySelector('#wrong-answer'),
  rightSound: document.querySelector('#right-answer'),
  winSound: document.querySelector('#win-game'),

  // COLOR PROGRESS
  wrapperColors: document.querySelector('#wrapper-colors'),
  colorQuestion: [...document.querySelectorAll('#wrapper-colors .color-question')],

  // GAME BOARD
  gameDialog: document.querySelector('#dialog-game'),
  playBtn: document.querySelector('#play-btn'),
  closeGameBtn: document.querySelector('#btn-close-game'),
  textQuestion: document.querySelector('#text-question'),
  containerAnswers: document.querySelector('#container-answers'),
  buttonsChildren: [...document.querySelectorAll('#container-answers button')],
  countNrQuestion: document.querySelector('#count-number'),
  countText: document.querySelector('#count-text'),
  nextQuestionBtn: document.querySelector('#next-question'),
  score: document.querySelector('#score'),
  scoreHigh: document.querySelector('#high-score'),
  domainAlert: document.querySelector('#alert-message'),
  closeAlertBtn: document.querySelector('#btn-close-alert'),
  priviesScore: document.querySelector('#privies-score'),
  containerChances: document.querySelector('.container-chances'),
  hearts: [...document.querySelectorAll('.container-chances span')],

  // ANSWER BUTTONS
  answer1Btn: document.querySelector('#btn-answer1'),
  answer2Btn: document.querySelector('#btn-answer2'),
  answer3Btn: document.querySelector('#btn-answer3'),
  answer4Btn: document.querySelector('#btn-answer4'),

  // DOMAIN INPUTS
  biologyInput: document.querySelector('#biology'),
  geographyInput: document.querySelector('#geography'),
  historyInput: document.querySelector('#history')
};
