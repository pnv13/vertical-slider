console.log(
  'Основной функционал: небесконечный слайдер +10; Обязательный дополнительный: бесконечный слайдер +10; Доп. функционал: пролистывания слайдера горизонтально +10'
);
const leftSlides = document.querySelectorAll('.left-slide-item');
const rightSlides = document.querySelectorAll('.right-slide-item');
const upButton = document.querySelector('.up-button');
const downButton = document.querySelector('.down-button');
const leftButton = document.querySelector('.left-button');
const rightButton = document.querySelector('.right-button');
const switchMode = document.querySelector('.switchMode');
const orientation = document.querySelector('.orientation');

let activeLeftSlideIndex = 3;
let activeRightSlideIndex = 0;
let isEnabled = true;

switchMode.addEventListener('click', () => {
  if (orientation.getAttribute('href') === 'verticalStyle.css') {
    orientation.href = 'horizontalStyle.css';
  } else {
    orientation.href = 'verticalStyle.css';
  }
});

function changeActiveLeftSlideIndex(n) {
  activeLeftSlideIndex = (n + leftSlides.length) % leftSlides.length;
}

function changeActiveRightSlideIndex(n) {
  activeRightSlideIndex = (n + rightSlides.length) % rightSlides.length;
}

function hideLeftItem(direction) {
  isEnabled = false;
  leftSlides[activeLeftSlideIndex].classList.add(direction);
  leftSlides[activeLeftSlideIndex].addEventListener('animationend', function () {
    this.classList.remove('active', direction);
  });
}

function hideRightItem(direction) {
  isEnabled = false;
  rightSlides[activeRightSlideIndex].classList.add(direction);
  rightSlides[activeRightSlideIndex].addEventListener('animationend', function () {
    this.classList.remove('active', direction);
  });
}

function showLeftItem(direction) {
  leftSlides[activeLeftSlideIndex].classList.add('next', direction);
  leftSlides[activeLeftSlideIndex].addEventListener('animationend', function () {
    this.classList.remove('next', direction);
    this.classList.add('active');
    isEnabled = true;
  });
}

function showRightItem(direction) {
  rightSlides[activeRightSlideIndex].classList.add('next', direction);
  rightSlides[activeRightSlideIndex].addEventListener('animationend', function () {
    this.classList.remove('next', direction);
    this.classList.add('active');
    isEnabled = true;
  });
}

function nextLeftItem(n) {
  if (orientation.getAttribute('href') === 'verticalStyle.css') {
    hideLeftItem('to-up');
    changeActiveLeftSlideIndex(n + 1);
    showLeftItem('from-down');
  } else {
    hideLeftItem('to-left');
    changeActiveLeftSlideIndex(n + 1);
    showLeftItem('from-right');
  }
}
function nextRightItem(n) {
  if (orientation.getAttribute('href') === 'verticalStyle.css') {
    hideRightItem('to-down');
    changeActiveRightSlideIndex(n + 3);
    showRightItem('from-up');
  } else {
    hideRightItem('to-right');
    changeActiveRightSlideIndex(n + 3);
    showRightItem('from-left');
  }
}
function previousLeftItem(n) {
  if (orientation.getAttribute('href') === 'verticalStyle.css') {
    hideLeftItem('to-down');
    changeActiveLeftSlideIndex(n - 1);
    showLeftItem('from-up');
  } else {
    hideLeftItem('to-right');
    changeActiveLeftSlideIndex(n - 1);
    showLeftItem('from-left');
  }
}
function previousRightItem(n) {
  if (orientation.getAttribute('href') === 'verticalStyle.css') {
    hideRightItem('to-up');
    changeActiveRightSlideIndex(n - 3);
    showRightItem('from-down');
  } else {
    hideRightItem('to-left');
    changeActiveRightSlideIndex(n - 3);
    showRightItem('from-right');
  }
}

upButton.addEventListener('click', function () {
  if (isEnabled) {
    previousLeftItem(activeLeftSlideIndex);
    previousRightItem(activeRightSlideIndex);
  }
});

downButton.addEventListener('click', function () {
  if (isEnabled) {
    nextLeftItem(activeLeftSlideIndex);
    nextRightItem(activeRightSlideIndex);
  }
});

leftButton.addEventListener('click', function () {
  if (isEnabled) {
    previousLeftItem(activeLeftSlideIndex);
    previousRightItem(activeRightSlideIndex);
  }
});

rightButton.addEventListener('click', function () {
  if (isEnabled) {
    nextLeftItem(activeLeftSlideIndex);
    nextRightItem(activeRightSlideIndex);
  }
});
