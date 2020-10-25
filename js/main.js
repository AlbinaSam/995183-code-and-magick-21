var fireballSize = 22;
var wizardSpeed = 3;
var wizardWidth = 70;


var getFireballSpeed = function (isMovingLeft) {
    return isMovingLeft ? 2 : 5;
}

var getWizardHeight = function () {
   return 1.337 * wizardWidth;
}

var getWizardX = function (fieldWidth) {
    return (fieldWidth - wizardWidth) / 2;
}

var getWizardY = function (fieldHeight) {
  return  fieldHeight / 3;
}