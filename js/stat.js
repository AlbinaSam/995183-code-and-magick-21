'use strict';

const CLOUD_WIDTH = 420;
const CLOUD_HEIGHT = 270;
const CLOUD_X = 100;
const CLOUD_Y = 10;
const PADDING = 20;
const GAP = 50;
const TEXT_HEIGHT = 20;
const BAR_WIDTH = 40;
const MAX_BAR_HEIGHT = 150;

const renderRect = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

const getMaxElement = function (arr) {
  let maxElement = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {

  renderRect(ctx, 110, 20, `rgba(0, 0, 0, 0.7)`);
  renderRect(ctx, 100, 10, `#ffffff`);

  ctx.fillStyle = `#000000`;
  ctx.font = `16px PT Mono`;
  ctx.textBaseline = `hanging`;
  ctx.fillText(`Ура вы победили!`, CLOUD_X + PADDING, CLOUD_Y + PADDING);
  ctx.fillText(`Список результатов:`, CLOUD_X + PADDING, CLOUD_Y + PADDING + TEXT_HEIGHT);

  const maxTime = getMaxElement(times);

  for (let i = 0; i < names.length; i++) {


    ctx.fillText(Math.round(times[i]), CLOUD_X + GAP + (BAR_WIDTH + GAP) * i, CLOUD_Y + PADDING + TEXT_HEIGHT * 2 + (MAX_BAR_HEIGHT - (MAX_BAR_HEIGHT * times[i]) / maxTime));

    if (names[i] === `Вы`) {
      ctx.fillStyle = `rgba(255, 0, 0, 1)`;
    } else {
      ctx.fillStyle = 'hsl(240, ' + Math.floor(Math.random() * 100) + '%, 50%)';
    }

    ctx.fillRect(CLOUD_X + GAP + (BAR_WIDTH + GAP) * i, CLOUD_Y + PADDING + TEXT_HEIGHT * 3 + (MAX_BAR_HEIGHT - (MAX_BAR_HEIGHT * times[i]) / maxTime), BAR_WIDTH, (MAX_BAR_HEIGHT * times[i]) / maxTime);

    ctx.fillStyle = `#000000`;
    ctx.fillText(names[i], CLOUD_X + GAP + (BAR_WIDTH + GAP) * i, CLOUD_HEIGHT - PADDING);
  }

};
