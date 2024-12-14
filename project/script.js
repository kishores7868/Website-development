const arrayContainer = document.getElementById('array-container');
const generateArrayButton = document.getElementById('generate-array');
const sortArrayButton = document.getElementById('sort-array');

let array = [];

// Generate a new random array
function generateArray() {
    array = Array.from({ length: 20 }, () => Math.floor(Math.random() * 100) + 10);
    renderArray();
}

// Render the array as bars
function renderArray() {
    arrayContainer.innerHTML = '';
    array.forEach(value => {
        const bar = document.createElement('div');
        bar.classList.add('bar');
        bar.style.height = `${value * 3}px`;
        bar.textContent = value;
        arrayContainer.appendChild(bar);
    });
}

// Bubble Sort with visualization
async function bubbleSort() {
    const bars = document.getElementsByClassName('bar');
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            bars[j].classList.add('highlight');
            bars[j + 1].classList.add('highlight');

            if (array[j] > array[j + 1]) {
                // Swap values in the array
                [array[j], array[j + 1]] = [array[j + 1], array[j]];

                // Swap bar heights
                await new Promise(resolve => setTimeout(resolve, 100));
                bars[j].style.height = `${array[j] * 3}px`;
                bars[j].textContent = array[j];
                bars[j + 1].style.height = `${array[j + 1] * 3}px`;
                bars[j + 1].textContent = array[j + 1];
            }

            bars[j].classList.remove('highlight');
            bars[j + 1].classList.remove('highlight');
        }
    }
}

// Event Listeners
generateArrayButton.addEventListener('click', generateArray);
sortArrayButton.addEventListener('click', bubbleSort);

// Initialize
generateArray();
