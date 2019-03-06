import {createFilterHTML} from './filters.js';
import {createTaskHTML} from './cards.js';

const WEEK_DAYS = [`Mo`, `Tu`, `We`, `Th`, `Fr`, `Sa`, `Su`];
const CARD_COLORS = [`black`, `yellow`, `blue`, `green`, `pink`];

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const filtersArray = [
  {
    name: `all`,
    count: 15,
    isChecked: true,
  },
  {
    name: `overdue`,
    count: 0,
    isChecked: false,
  },
  {
    name: `today`,
    count: 0,
    isChecked: false,
  },
  {
    name: `favorites`,
    count: 7,
    isChecked: false,
  },
  {
    name: `repeating`,
    count: 2,
    isChecked: false,
  },
  {
    name: `tag`,
    count: 6,
    isChecked: false,
  },
  {
    name: `archive`,
    count: 115,
    isChecked: false,
  },
];

const task = {
  isEdit: true,
  isImg: true,
  isDate: true,
  isFavorite: false,
  isDone: false,
  title: [
    `Изучить теорию`,
    `Сделать домашку`,
    `Пройти интенсив на соточку`
  ][Math.floor(Math.random() * 3)],
  picture: `http://picsum.photos/100/100?r=${Math.random()}`,
  dueDate: [
    Date.now() + 1 + Math.floor(Math.random() * 7) * 24 * 60 * 60 * 1000,
    Date.now() - Math.floor(Math.random() * 7) * 24 * 60 * 60 * 1000
  ][Math.floor(Math.random() * 2)],
  date: `4 March`,
  time: `11:15 PM`,
  color: `yellow`,
  tags: Array.from(new Set([
    `homework`,
    `theory`,
    `practice`,
    `intensive`,
    `keks`
  ])).sort(function compareRandom() {
    return Math.random() - 0.5;
  }).slice(0, getRandomInt(0, 3)),
  repeatingDays: {
    'Mo': true,
    'Tu': false,
    'We': true,
    'Th': false,
    'Fr': false,
    'Sa': true,
    'Su': false
  },
  colors: [
    `black`,
    `yellow`,
    `blue`,
    `green`,
    `pink`
  ][Math.floor(Math.random() * 5)]
}

const addTasks = (count) => {
  return Array.from({length: count}).map(() => task);
};

const removeExistingTasksFromHTML = () => {
  const elem = document.querySelector(`.board__tasks`);
  let child = elem.firstChild;

  if (!elem) {
    return;
  }

  while (child) {
    elem.removeChild(child);
    child = elem.firstChild;
  }
};

const fillNewCards = (tasks, days, colors) => {
  const tasksContainer = document.querySelector(`.board__tasks`);

  removeExistingTasksFromHTML();

  tasks.forEach(() => {
    tasksContainer.insertAdjacentHTML(`beforeEnd`, createTaskHTML(task, days, colors));
  });
};

const initFilterButtons = (filters, days, colors) => {
  const filtersContainer = document.querySelector(`.main__filter`);

  filters.forEach((filter) => {
    filtersContainer.insertAdjacentHTML(`beforeEnd`, createFilterHTML(filter.name, filter.count, filter.isChecked));
  });

  const filterBtns = document.querySelectorAll(`.filter__input`);

  filterBtns.forEach((button) => {

    button.addEventListener(`click`, () => {
      const newCardArray = addTasks(getRandomInt(1, 20));

      fillNewCards(newCardArray, days, colors);
    });
  });
};

initFilterButtons(filtersArray, WEEK_DAYS, CARD_COLORS);

const cardArray = addTasks(7);

fillNewCards(cardArray, WEEK_DAYS, CARD_COLORS);
