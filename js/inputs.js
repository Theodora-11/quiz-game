import { DOM } from './selectors.js';


export function checkInputs() {
  const containerInputs = document.querySelector('#container-inputs');
  const inputs = [...containerInputs.querySelectorAll('input')];
    inputs.forEach(e => e.addEventListener('click', (e) => {
    const inputChecked = inputs.findIndex(e => e.checked);
    const valueInput = inputs[inputChecked].value;
    DOM.chooseBtn.dataset.domain = valueInput;
  }))
}
