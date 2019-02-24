import {createFilterHTML} from './filters.js';
import {createTaskHTML} from './cards.js';

const WEEK_DAYS = [`mo`, `tu`, `we`, `th`, `fr`, `sa`, `su`];
const CARD_COLORS = [`black`, `yellow`, `blue`, `green`, `pink`];

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

const addTasks = (count) => {
  const cardArray = [];
  for (let i = 0; i < count; i++) {
    cardArray.push({
      isEdit: true,
      isCardRepeat: true,
      isDeadline: false,
      text: `Here is a card with filling data`,
      imgUrl: `img/sample-img.jpg`,
      isImgEmpty: false,
      isDate: true,
      date: `23 September`,
      time: `11:15 PM`,
      isRepeat: true,
      hashtag: `#repeat`,
      color: `yellow`
    });
  }
  return cardArray;
};

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;


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

  tasks.forEach((task) => {
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
