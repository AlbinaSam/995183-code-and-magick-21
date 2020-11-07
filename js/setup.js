'use strict';

const WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
const WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
const WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
const WIZARD_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
const WIZARD_FIREBALL_COLORS = ['#ee4830',  '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
const WIZARDS_NUMBER = 4;

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

// открытие/закрытие попапа

const ESC_KEYCODE = 27;

const ENTER_KEYCODE = 13;

const setup = document.querySelector(`.setup`);
const setupOpen = document.querySelector(`.setup-open`);
const setupClose = setup.querySelector(`.setup-close`);

const onEscButtonPress = function (evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closePopup();
  }
};

const closePopup = function () {
  setup.classList.add(`hidden`);
  document.removeEventListener(`keydown`, onEscButtonPress);
};

const openPopup = function () {
  setup.classList.remove(`hidden`);
  document.addEventListener(`keydown`, onEscButtonPress);
};

setupOpen.addEventListener(`click`, function () {
  openPopup();
});

setupOpen.addEventListener(`keydown`, function (evt) {
  if (evt.key === 'Enter') {
    openPopup();
  }
});

setupClose.addEventListener(`click`, function () {
  closePopup();
});

setupClose.addEventListener(`keydown`, function (evt) {
  if (evt.key === 'Enter') {
    closePopup();
  }
});


const userNameInput = setup.querySelector('.setup-user-name');
userNameInput.addEventListener(`focus`, function () {
  document.removeEventListener(`keydown`, onEscButtonPress);
});

userNameInput.addEventListener(`blur`, function () {
  document.addEventListener(`keydown`, onEscButtonPress);
});


// изменение цветов по клику

const setupWizard = document.querySelector(`.setup-wizard`);
const wizardCoat = setupWizard.querySelector(`.wizard-coat`);
const wizardEyes = setupWizard.querySelector(`.wizard-eyes`);
const fireBall = document.querySelector(`.setup-fireball-wrap`);

const hiddenCoatColor = document.querySelector(`.setup-player input[name=coat-color]`);
const hiddenEyesColor = document.querySelector(`.setup-player input[name=eyes-color]`);
const hiddenFireBallColor = document.querySelector(`.setup-player input[name=fireball-color]`);

wizardCoat.addEventListener('click', function () {
  let color = WIZARD_COAT_COLORS[getRandomElement(WIZARD_COAT_COLORS)];
  wizardCoat.style.fill = color;
  hiddenCoatColor.value = color;
});

wizardEyes.addEventListener('click', function () {
  let color = WIZARD_EYES_COLORS[getRandomElement(WIZARD_EYES_COLORS)];
  wizardEyes.style.fill = color;
  hiddenEyesColor.value = color;
});

fireBall.addEventListener('click', function () {
  let color = WIZARD_FIREBALL_COLORS[getRandomElement(WIZARD_FIREBALL_COLORS)];
  console.log(color);
  fireBall.style.backgroundColor = color;
  hiddenFireBallColor.value = color;
});

