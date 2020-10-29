'use strict';
const fireballSize = 22;
const wizardSpeed = 3;
const wizardWidth = 70;


const getFireballSpeed = function (isMovingLeft) {
  return isMovingLeft ? 2 : 5;
};

const getWizardHeight = function () {
  return 1.337 * wizardWidth;
};

const getWizardX = function (fieldWidth) {
  return (fieldWidth - wizardWidth) / 2;
};

const getWizardY = function (fieldHeight) {
  return fieldHeight / 3;
};
