import {createTaskHTML} from './cards.js';

const WEEK_DAYS = [`Mo`, `Tu`, `We`, `Th`, `Fr`, `Sa`, `Su`];
const CARD_COLORS = [`black`, `yellow`, `blue`, `green`, `pink`];

// const createElement = (template) => {
//   const newElement = document.createElement(`div`);
//   newElement.innerHTML = template;
//   return newElement.firstChild;
// };

export class Task {
  constructor(item) {
    this._days = WEEK_DAYS;
    this._colors = CARD_COLORS;
    this._task = item;
    // this._title = item.title;
    // this._picture = item.picture;
    // this._tags = item.tags;
    // this._dueDate = item.dueDate;
    // this._date = item.date;
    // this._time = item.time;
    // this._repeatingDays = item.repeatingDays;
    // this._isImg = item.isImg;
    // this._isDate = item.isDate;
    // this._isFavorite = item.isFavorite;
    // this._isDone = item.isDone;
    this._element = null;
    // this._state = {
    //   isEdit: false,
    // };
  }

  get element() {
    return this._element;
  }

  get template() {
    return createTaskHTML(this._task, this._days, this._colors);
  }

  render() {
    this._element = this.template;
    return this._element;
  }

  unrender() {
    this._element = null;
  }

}

