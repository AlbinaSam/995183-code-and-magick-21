'use strict';

const WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
const WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
const WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
const WIZARD_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
const WIZARDS_NUMBER = 4;


const userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');


const similarWizardList = document.querySelector('.setup-similar-list');
const similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

const getRandomElement = function (arr) {

  const randomElement = Math.floor(Math.random() * arr.length);

  return randomElement;
};

const renderWizard = function () {
  let wizardElement = similarWizardTemplate.cloneNode(true);
  let randomName = getRandomElement(WIZARD_NAMES);
  let randomSurname = getRandomElement(WIZARD_SURNAMES);
  let randomCoatColor = getRandomElement(WIZARD_COAT_COLORS);
  let randomEyesColor = getRandomElement(WIZARD_EYES_COLORS);
  wizardElement.querySelector('.setup-similar-label').textContent = WIZARD_NAMES[randomName] + ' ' + WIZARD_SURNAMES[randomSurname];
  wizardElement.querySelector('.wizard-coat').style.fill = WIZARD_COAT_COLORS[randomCoatColor];
  wizardElement.querySelector('.wizard-eyes').style.fill = WIZARD_EYES_COLORS[randomEyesColor];

  return wizardElement;
};

const fragment = document.createDocumentFragment();

for (let i = 0; i < WIZARDS_NUMBER; i++) {
  fragment.appendChild(renderWizard());
}

similarWizardList.appendChild(fragment);

document.querySelector('.setup-similar').classList.remove('hidden');
