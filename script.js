const input = document.querySelector('#colorInput');

input.addEventListener('input', () => {
const color = input.value.trim().toLowerCase();
const testDiv = document.createElement('div');
testDiv.style.color = color;

if (testDiv.style.color) {
    document.body.style.backgroundColor = color;
} else {
    document.body.style.backgroundColor = 'white';
}
});