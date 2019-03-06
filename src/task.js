import {createTaskHTML} from './cards.js';
import {task} from './data.js';

const WEEK_DAYS = [`Mo`, `Tu`, `We`, `Th`, `Fr`, `Sa`, `Su`];
const CARD_COLORS = [`black`, `yellow`, `blue`, `green`, `pink`];

export class Task {
  constructor(item) {
    this._title = item.title;
    this._picture = item.picture;
    this._tags = item.tags;
    this._dueDate = item.dueDate;
    this._date = item.date;
    this._time = item.time;
    this._repeatingDays = item.repeatingDays;
    this._isImg = item.isImg;
    this._isDate = item.isDate;
    this._isFavorite = item.isFavorite;
    this._isDone = item.isDone;
    this._element = null;
    this._state = {
      isEdit: false,
    };
  }

  get template() {
    return createTaskHTML(task, WEEK_DAYS, CARD_COLORS);
  }
}
