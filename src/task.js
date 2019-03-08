import {createTaskHTML} from './cards.js';
import {createElement} from './create-element';

const WEEK_DAYS = [`Mo`, `Tu`, `We`, `Th`, `Fr`, `Sa`, `Su`];
const CARD_COLORS = [`black`, `yellow`, `blue`, `green`, `pink`];

export class Task {
  constructor(item) {
    this._days = WEEK_DAYS;
    this._colors = CARD_COLORS;
    this._task = item;
    this._isEdit = false;
    this._element = null;
    this._onEdit = null;
  }

  get element() {
    return this._element;
  }

  _onEditButtonClick() {
    if (typeof this._onEdit === `function`) {
      this._onEdit();
    }
  }

  set onEdit(fn) {
    this._onEdit = fn;
  }

  get template() {
    return createTaskHTML(this._task, this._days, this._colors, this._isEdit);
  }

  bind() {
    this._element.querySelector(`.card__btn--edit`)
      .addEventListener(`click`, this._onEditButtonClick.bind(this));
  }

  unbind() {
    this._element.querySelector(`.card__btn--edit`)
      .removeEventListener(`click`, this._onEditButtonClick.bind(this));
  }

  render() {
    this._element = createElement(this.template);
    this.bind();
    return this._element;
  }

  unrender() {
    this.unbind();
    this._element = null;
  }

}

export class TaskEdit {
  constructor(item) {
    this._days = WEEK_DAYS;
    this._colors = CARD_COLORS;
    this._task = item;
    this._isEdit = true;
    this._element = null;
    this._onSubmit = null;
  }

  _onSubmitButtonClick(event) {
    event.preventDefault();
    if (typeof this._onSubmit === `function`) {
      this._onSubmit();
    }
  }

  set onSubmit(fn) {
    this._onSubmit = fn;
  }

  get element() {
    return this._element;
  }

  get template() {
    return createTaskHTML(this._task, this._days, this._colors, this._isEdit);
  }

  bind() {
    this._element.querySelector(`.card__form`)
      .addEventListener(`submit`, this._onSubmitButtonClick.bind(this));
  }

  unbind() {
    this._element.querySelector(`.card__form`)
      .removeEventListener(`click`, this._onSubmitButtonClick.bind(this));
  }

  render() {
    this._element = createElement(this.template);
    this.bind();
    return this._element;
  }

  unrender() {
    this.unbind();
    this._element = null;
  }

}

