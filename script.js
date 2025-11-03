const box = document.querySelector('#box');
const coords = document.querySelector('#coords');

box.addEventListener('mousemove', (event) => {

const rect = box.getBoundingClientRect();
const x = event.clientX - rect.left;
const y = event.clientY - rect.top;

coords.innerText = `X: ${Math.round(x)}, Y: ${Math.round(y)}`;
});

box.addEventListener('mouseleave', () => {
  coords.innerText = 'Курсор вне блока';
});