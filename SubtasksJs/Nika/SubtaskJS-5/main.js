const formInputStringID = 'inputStringForm';
const formInputString = document.getElementById(formInputStringID);
const distributionStringsIntoFormID = 'distributionStringsIntoForm';
const distributionStringsIntoForm = document.getElementById(
  distributionStringsIntoFormID
);
const enteredValuesStringID = 'form--input-data';
const numberOfGroupsID = 'form--distribution-data';
const resultsBlockInputID = 'resultsBlockInput';
const resultsBlockDistributionID = 'resultsBlockDistribution';
const resultsBlockDistribution = document.getElementById(
  resultsBlockDistributionID
);
const resultsInputClassName = '.result-input--box';
const stringListClassName = '.string--list';
const clearButtonID = 'clear';
const clearButton = document.getElementById(clearButtonID);

const generateeRandomTitleButtonID = 'generate--random-titles_btn';
const generateRandomTitleButton = document.getElementById(
  generateeRandomTitleButtonID
);

const writeTitleButtonID = 'write--titles_btn';
const writeTitleButton = document.getElementById(writeTitleButtonID);

const errorBoxClassName = '.error--box';

const headingSheetClassName = '.heading-sheet';
const buttonHeadersEntryClassName = '.btn--headers-entry';

function createError(parentSelector, text) {
  const errorBox = parentSelector.querySelector(errorBoxClassName);
  if (!errorBox.firstChild) {
    const error = document.createElement('span');
    error.className = 'error';
    error.innerHTML = text;
    errorBox.append(error);
  }
}

function clearErrorbox(parentSelector) {
  const errorBox = parentSelector.querySelector(errorBoxClassName);
  if (errorBox.firstChild) {
    errorBox.innerHTML = '';
  }
}

function createResultInputBox(resultInput) {
  const resultsBlockInput = document.getElementById(resultsBlockInputID);
  const resultInputBox = document.createElement('div');
  resultInputBox.className = 'result-input--box';
  resultInputBox.innerHTML = resultInput;
  resultsBlockInput.append(resultInputBox);
}

function clearResultInputBox() {
  if (document.querySelector(resultsInputClassName)) {
    document.querySelector(resultsInputClassName).remove();
  }
}

function clearHeadingSheet() {
  if (document.querySelector(headingSheetClassName)) {
    document.querySelector(headingSheetClassName).remove();
  }
}

function shuffleArrayEnteredStrings(arrayEnteredStrings) {
  for (let i = arrayEnteredStrings.length - 1; i > 0; i--) {
    const randomIndexEnteredString = Math.floor(Math.random() * (i + 1));
    const randomEnteredString = arrayEnteredStrings[randomIndexEnteredString];
    arrayEnteredStrings[randomIndexEnteredString] = arrayEnteredStrings[i];
    arrayEnteredStrings[i] = randomEnteredString;
  }
  return arrayEnteredStrings;
}

function distributeIntoGroupsRemainderOfJumbledArrayEnteredStrings(
  jumbledArrayEnteredStringsCopy,
  arrayWithSubarraysEnteredStrings
) {
  const remainderOfJumbledArrayEnteredStrings =
    jumbledArrayEnteredStringsCopy.length;

  for (let i = 0; i < remainderOfJumbledArrayEnteredStrings; i++) {
    arrayWithSubarraysEnteredStrings[i].push(jumbledArrayEnteredStringsCopy[i]);
  }
}

function splitAnArrayIntoSubarrays(
  jumbledArrayEnteredStrings,
  initialLengthOfSubarray,
  numberOfGroups,
  arrayWithSubarraysEnteredStrings
) {
  clearErrorbox(distributionStringsIntoForm);
  const jumbledArrayEnteredStringsCopy = jumbledArrayEnteredStrings.slice();

  if (jumbledArrayEnteredStringsCopy.length % numberOfGroups === 0) {
    while (jumbledArrayEnteredStringsCopy.length > 0) {
      const subArrayEnteredStrings = jumbledArrayEnteredStringsCopy.splice(
        0,
        initialLengthOfSubarray
      );
      arrayWithSubarraysEnteredStrings.push(subArrayEnteredStrings);
    }

    return arrayWithSubarraysEnteredStrings;
  }

  if (numberOfGroups > jumbledArrayEnteredStringsCopy.length) {
    numberOfGroups = +jumbledArrayEnteredStringsCopy.length;
    createError(
      distributionStringsIntoForm,
      `Кол-во групп, которое Вы ввели, превышает кол-во элементов, было сформировано максимальное кол-во групп: ${numberOfGroups}`
    );
  }
  for (let i = 0; i < numberOfGroups; i++) {
    const subArrayEnteredStrings = jumbledArrayEnteredStringsCopy.splice(
      0,
      initialLengthOfSubarray
    );

    arrayWithSubarraysEnteredStrings.push(subArrayEnteredStrings);
  }

  distributeIntoGroupsRemainderOfJumbledArrayEnteredStrings(
    jumbledArrayEnteredStringsCopy,
    arrayWithSubarraysEnteredStrings
  );

  return arrayWithSubarraysEnteredStrings;
}

function clearStringList() {
  document.querySelectorAll(stringListClassName).forEach(item => item.remove());
}

function createGroupRows(arrayWithSubarraysEnteredStrings) {
  for (const subArrayEnteredStrings of arrayWithSubarraysEnteredStrings) {
    const stringList = document.createElement('ul');
    stringList.className = 'string--list';

    for (const enteredString of subArrayEnteredStrings) {
      let stringListItem = document.createElement('li');
      stringListItem.className = 'string-list--item';
      stringListItem.textContent = enteredString.trim();
      stringList.append(stringListItem);
    }
    resultsBlockDistribution.append(stringList);
  }
}

function calculateInitialLengthOfSubarray(
  jumbledArrayEnteredStrings,
  numberOfGroups
) {
  return Math.floor(jumbledArrayEnteredStrings.length / numberOfGroups);
}

function createInputsForHeaders(arrayWithSubarraysEnteredStrings) {
  clearHeadingSheet();
  const headingSheet = document.createElement('div');
  headingSheet.classList.add('heading-sheet');
  distributionStringsIntoForm.append(headingSheet);

  for (let i = 0; i < arrayWithSubarraysEnteredStrings.length; i++) {
    const headingItem = document.createElement('input');
    headingItem.classList.add('heading-item', 'form--data');
    headingItem.placeholder = `заголовок для группы ${i + 1}`;
    headingSheet.append(headingItem);
  }

  const buttonHeadersEntry = document.createElement('button');
  buttonHeadersEntry.classList.add('btn--headers-entry', 'form--btn');
  buttonHeadersEntry.innerHTML = 'Добавить заголовки';
  headingSheet.append(buttonHeadersEntry);
}

function setGroupHeaders() {
    clearErrorbox(distributionStringsIntoForm);
    const headingItems = document.querySelectorAll(`${headingSheetClassName} input`);
    let groupsArr = [];
    const groups = document.querySelectorAll('.string--list');
    for (let i = 0; i < headingItems.length; i++){
      const headerBox = document.createElement('h4');
      headerBox.classList.add('group--title');
      if (headingItems[i].value == '') {
        groupsArr = [];
        return createError(distributionStringsIntoForm, 'Введите не пустые значения заголовков!');    
      }
      headerBox.textContent = headingItems[i].value;
      groupsArr.push(headerBox);  
    }
    for (let i = 0; i < groups.length; i++){
      groups[i].prepend(groupsArr[i])
    }  
    clearHeadingSheet();
}

formInputString.addEventListener('submit', function (e) {
  e.preventDefault();
  clearErrorbox(formInputString);

  const enteredValuesString = document.getElementById(
    enteredValuesStringID
  ).value;

  if (enteredValuesString == '') {
    return createError(formInputString, 'Введите не пустое значение!');
  }

  const resultsInput = document.querySelector(resultsInputClassName);

  if (!resultsInput) {
    createResultInputBox(enteredValuesString);
  } else {
    resultsInput.insertAdjacentHTML('beforeend', `, ${enteredValuesString}`);
  }

  document.getElementById(enteredValuesStringID).value = '';
  clearButton.disabled = false;
});

distributionStringsIntoForm.addEventListener('submit', function (e) {
  e.preventDefault();
  clearStringList();
  clearErrorbox(distributionStringsIntoForm);

  const arrayWithSubarraysEnteredStrings = [];

  const numberOfGroups = document.getElementById(numberOfGroupsID).value;

  if (
    numberOfGroups == '' ||
    numberOfGroups == 0 ||
    !Number.isInteger(+numberOfGroups) ||
    !(typeof +numberOfGroups != Number)
  ) {
    return createError(
      distributionStringsIntoForm,
      'Введите целое числовое значение > 0!'
    );
  }

  if (document.querySelector(resultsInputClassName) == null) {
    return createError(formInputString, 'Введите строки!');
  }

  const arrayEnteredStrings = document
    .querySelector(resultsInputClassName)
    .textContent.split(',');

  const jumbledArrayEnteredStrings =
    shuffleArrayEnteredStrings(arrayEnteredStrings);

  const initialLengthOfSubarray = calculateInitialLengthOfSubarray(
    jumbledArrayEnteredStrings,
    numberOfGroups
  );

  splitAnArrayIntoSubarrays(
    jumbledArrayEnteredStrings,
    initialLengthOfSubarray,
    numberOfGroups,
    arrayWithSubarraysEnteredStrings
  );

  createInputsForHeaders(arrayWithSubarraysEnteredStrings);

  document.querySelector(buttonHeadersEntryClassName).addEventListener('click', (e) => {
    e.preventDefault();
    setGroupHeaders();
  });

  createGroupRows(arrayWithSubarraysEnteredStrings);

  document.getElementById(numberOfGroupsID).value = '';
});

clearButton.addEventListener('click', function (e) {
  e.preventDefault();
  clearResultInputBox();
  clearStringList();
  clearHeadingSheet();
  clearErrorbox(distributionStringsIntoForm);
  clearErrorbox(formInputString);
  clearButton.disabled = true;
});