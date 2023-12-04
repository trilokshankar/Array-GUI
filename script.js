let array = [];
let lastDeletedElement = null;

function renderArray() {
  const arrayContainer = document.getElementById('arrayContainer');
  arrayContainer.innerHTML = '';

  array.forEach((element, index) => {
    const arrayElement = document.createElement('div');
    arrayElement.className = 'array-element';
    arrayElement.innerText = `${element} (${index})`;
    arrayContainer.appendChild(arrayElement);

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
  }
}

function updateLastDeletedElement() {
  const lastDeletedElementContainer = document.getElementById('lastDeletedElement');
  lastDeletedElementContainer.innerText = `Last Deleted Element: ${lastDeletedElement || 'None'}`;
}

renderArray();
updateLastDeletedElement();

function getElementAtIndex() {
  const indexInput = document.getElementById('indexInput');
  const index = parseInt(indexInput.value);

  if (!isNaN(index) && index >= 0 && index < array.length) {
    const elementAtIndexContainer = document.getElementById('elementAtIndex');
    elementAtIndexContainer.innerText = `Element at Index ${index}: ${array[index]}`;
  } else {
    alert('Invalid index. Please enter a valid index.');
  }
}

