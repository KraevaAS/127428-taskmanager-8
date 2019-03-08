import {createTaskHTML} from './cards.js';
import {createElement} from './create-element';

const WEEK_DAYS = [`Mo`, `Tu`, `We`, `Th`, `Fr`, `Sa`, `Su`];
const CARD_COLORS = [`black`, `yellow`, `blue`, `green`, `pink`];

class Component {
  constructor() {
    if (new.target === Component) {
      throw new Error(`Can't instantiate BaseComponent, only concrete one.`);
    }

    this._element = null;
  }

  get element() {
    return this._element;
  }

  get template() {
    throw new Error(`You have to define template.`);
  }

  bind() {}

  unbind() {}

  render() {
    this._element = createElement(this.template);
    this.bind();
    return this._element;
  }

  unrender() {
    this.unbind();
    this._element.remove();
    this._element = null;
  }

}


export class Task extends Component {
  constructor(item) {
    super();
    this._days = WEEK_DAYS;
    this._colors = CARD_COLORS;
    this._task = item;
    this._isEdit = false;
    this._element = null;
    this._onEdit = null;
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

}

export class TaskEdit extends Component {
  constructor(item) {
    super();
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

}

