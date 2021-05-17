const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const refs = {
    btnStartEl: document.querySelector('[data-action="start"]'),
    btnEndEl: document.querySelector('[data-action="stop"]'),
    body: document.body,
}

const DELAY = 1000;
let intervalId = null;

refs.btnStartEl.addEventListener('click', onColorSwitchStartBtn);

function onColorSwitchStartBtn(evt) {
    intervalId = setInterval(() => {
        const indexColors = randomIntegerFromInterval(0, colors.length - 1);
        refs.body.style.backgroundColor = colors[indexColors];
        }, DELAY);
   evt.target.disabled = true; 
}

refs.btnEndEl.addEventListener('click', onColorSwitchEndBtn);

function onColorSwitchEndBtn() {
    refs.btnStartEl.disabled = false;
    clearInterval(intervalId);
}