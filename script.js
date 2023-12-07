let array = [];
let lastDeletedElement = null;
let displayedElementIndex = null;

function renderArray() {
  const arrayContainer = document.getElementById('arrayContainer');
  arrayContainer.innerHTML = '';

  array.forEach((element, index) => {
    const arrayElement = document.createElement('div');
    arrayElement.className = 'array-element';
    arrayElement.innerText = `${element} (${index})`;
    arrayContainer.appendChild(arrayElement);

    // Trigger the animation by adding the 'show' class after a short delay
    setTimeout(() => {
      arrayElement.classList.add('show');
    }, 100 * index);
  });

  updateArraySize();
}

function updateArraySize() {
  const arraySizeSpan = document.getElementById('arraySize');
  arraySizeSpan.innerText = array.length;
}

function insertElement() {
  const elementInput = document.getElementById('elementInput');
  const newElement = elementInput.value.trim();

  if (newElement !== '') {
    array.push(newElement);
    renderArray();
    elementInput.value = '';
  }
}

function deleteElement() {
  if (array.length > 0) {
    // Store the last deleted element
    lastDeletedElement = array.pop();
    renderArray();
    updateLastDeletedElement();
    resetDisplayedElement();
  }
}

function updateLastDeletedElement() {
  const lastDeletedElementContainer = document.getElementById('lastDeletedElement');
  lastDeletedElementContainer.innerText = `Last Deleted Element: ${lastDeletedElement || 'None'}`;
}

function displayElementAtIndex() {
  const indexInput = document.getElementById('indexInput');
  const index = parseInt(indexInput.value);

  if (!isNaN(index) && index >= 0 && index < array.length) {
    displayedElementIndex = index;
    updateDisplayedElement();
  } else {
    alert('Invalid index. Please enter a valid index.');
  }
}

function updateDisplayedElement() {
  const displayedElementContainer = document.getElementById('displayedElement');
  displayedElementContainer.innerText = `Displayed Element: ${array[displayedElementIndex]}`;
}



function resetDisplayedElement() {
  displayedElementIndex = null;
  const displayedElementContainer = document.getElementById('displayedElement');
  displayedElementContainer.innerText = 'Displayed Element: None';
}

renderArray();
updateLastDeletedElement();
resetDisplayedElement();

function deleteDisplayedElement() {
  if (displayedElementIndex !== null) {
    // Store the last deleted element
    lastDeletedElement = array.splice(displayedElementIndex, 1)[0];
    renderArray();
    updateDisplayedElement();
    updateLastDeletedElement();
    resetDisplayedElement();
  }
}

