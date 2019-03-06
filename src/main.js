import {createFilterHTML} from './filters.js';
// import {createTaskHTML} from './cards.js';
import {filtersArray} from './data.js';
import {task} from './data.js';
import {Task} from './task.js';

//
// const WEEK_DAYS = [`Mo`, `Tu`, `We`, `Th`, `Fr`, `Sa`, `Su`];
// const CARD_COLORS = [`black`, `yellow`, `blue`, `green`, `pink`];

const tasksContainer = document.querySelector(`.board__tasks`);
const taskComponent = new Task(task);

tasksContainer.insertAdjacentHTML(`beforeend`, taskComponent.render());

// const addTasks = (count) => {
//   return Array.from({length: count}).map(() => task);
// };
// const removeExistingTasksFromHTML = () => {
//   const elem = document.querySelector(`.board__tasks`);
//   let child = elem.firstChild;
//
//   if (!elem) {
//     return;
//   }
//
//   while (child) {
//     elem.removeChild(child);
//     child = elem.firstChild;
//   }
// };

// const fillNewCards = (tasks, days, colors) => {
//   const tasksContainer = document.querySelector(`.board__tasks`);
//
//   removeExistingTasksFromHTML();
//
//   tasks.forEach(() => {
//     tasksContainer.insertAdjacentHTML(`beforeEnd`, createTaskHTML(task, days, colors));
//   });
// };

const filtersContainer = document.querySelector(`.main__filter`);
filtersArray.forEach((filter) => {
  filtersContainer.insertAdjacentHTML(`beforeEnd`, createFilterHTML(filter.name, filter.count, filter.isChecked));
});

// const initFilterButtons = (filters, days, colors) => {
//   const filtersContainer = document.querySelector(`.main__filter`);
//
//   filters.forEach((filter) => {
//     filtersContainer.insertAdjacentHTML(`beforeEnd`, createFilterHTML(filter.name, filter.count, filter.isChecked));
//   });
//
//   const filterBtns = document.querySelectorAll(`.filter__input`);
//
//   filterBtns.forEach((button) => {
//
//     button.addEventListener(`click`, () => {
//       const newCardArray = addTasks(Math.floor(Math.random() * (20)) + 1);
//
//       fillNewCards(newCardArray, days, colors);
//     });
//   });
// };
//
// initFilterButtons(filtersArray, WEEK_DAYS, CARD_COLORS);
//
// const cardArray = addTasks(7);
//
// fillNewCards(cardArray, WEEK_DAYS, CARD_COLORS);
