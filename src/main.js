'use strict';

// Constant template content Begin

const WEEK_DAYS = [`mo`, `tu`, `we`, `th`, `fr`, `sa`, `su`];
const CARD_COLORS = [`black`, `yellow`, `blue`, `green`, `pink`];

// Constant template content End


// HTML Generators Begin

const createFilterHTML = (name, count, isChecked = false) => {
  return `
<input
  type="radio"
  id="filter__${name.toLowerCase()}"
  class="filter__input visually-hidden"
  name="filter"
  ${isChecked ? `checked` : ``}
  ${count === 0 ? `disabled` : ``}
    />
<label for="filter__${name.toLowerCase()}" class="filter__label">
  ${name.toUpperCase()}
  <span class="filter__${name.toLowerCase()}-count">${count}</span>
</label>
`;
};

const createCardControlBtns = (name, isDisabled = false) => {
  return `
<button type="button" class="card__btn card__btn--${name.toLowerCase()} ${isDisabled ? `
card__btn--disabled` : ``}">
${name.toLowerCase()}
</button>
  `;
};

const createCardControlBar = () => {
  return `
<div class="card__color-bar">
  <svg class="card__color-bar-wave" width="100%" height="10">
    <use xlink:href="#wave"></use>
  </svg>
</div>
`;
};

const createCardTextArea = (card) => {
  return `
<div class="card__textarea-wrap">
  <label>
<textarea
  class="card__text"
  placeholder="Start typing your text here..."
  name="text">
${card.text}
</textarea>
  </label>
</div>
  `;
};

const createCardImg = (card) => {
  return `
<label class="card__img-wrap ${card.isImgEmpty ? `card__img-wrap--empty` : ``}">
  <input
    type="file"
    class="card__img-input visually-hidden"
    name="img"/>
  <img
    src="${card.imgUrl}"
    alt="task picture"
    class="card__img"/>
</label>
  `;
};

const createCardDates = (card) => {
  return `
<button class="card__date-deadline-toggle" type="button">
  date:
  <span class="card__date-satus">
    ${card.isDate ? `yes` : `no`}
  </span>
</button>
<fieldset class="card__date-deadline">
  <label class="card__input-deadline-wrap">
    <input
      class="card__date"
      type="text"
      placeholder="${card.date}"
      name="date"
      value="${card.date}"/>
  </label>
  <label class="card__input-deadline-wrap">
    <input
      class="card__time"
      type="text"
      placeholder="${card.time}"
      name="time"
      value="${card.time}"/>
  </label>
</fieldset>
  `;
};

const getWeekDays = (days) => {
  let getWeek = ``;
  for (let i = 0; i < days.length; i++) {
    getWeek += `
<input
  class="visually-hidden card__repeat-day-input"
  type="checkbox"
  id="repeat-${days[i]}-4"
  name="repeat"
  value="${days[i]}"/>
<label class="card__repeat-day" for="repeat-${days[i]}-4">
  ${days[i]}
</label> `;
  }
  return getWeek;
};

const createRepeatToggle = (card, days) => {
  return `
<button class="card__repeat-toggle" type="button">
  repeat:
  <span class="card__repeat-status">
    ${card.isRepeat ? `yes` : `no`}
  </span>
</button>
<fieldset class="card__repeat-days">
  <div class="card__repeat-days-inner">
    ${getWeekDays(days)}
  </div>
</fieldset>
  `;
};

const createHashtagList = (card) => {
  return `<div class="card__hashtag">
  <div class="card__hashtag-list">
<span class="card__hashtag-inner">
<input
  type="hidden"
  name="hashtag"
  value="repeat"
  class="card__hashtag-hidden-input"/>
<button type="button" class="card__hashtag-name">
${card.hashtag}
</button>
<button type="button" class="card__hashtag-delete">
delete
</button>
</span>
    <input type="text" class="card__hashtag-input" name="hashtag-input" placeholder="Type new hashtag here"/>
    </label>
  </div>
</div>
  `;
};

const getColors = (colors) => {
  let getColor = ``;
  for (let i = 0; i < colors.length; i++) {
    getColor += `
<input
  type="radio"
  id="color-${colors[i]}-4"
  class="card__color-input card__color-input--${colors[i]} visually-hidden"
  name="color"
  value="${colors[i]}" ${colors[i] === `yellow` ? `checked` : ``}/>
<label
  for="color-${colors[i]}-4"
  class="card__color card__color--${colors[i]}">${colors[i]}</label>
`;
  }
  return getColor;
};

const createCardColors = (colors) => {
  return `
<div class="card__colors-inner">
  <h3 class="card__colors-title">Color</h3>
  <div class="card__colors-wrap">
    ${getColors(colors)}
  </div>
</div>    
  `;
};

const createStatusBtns = () => {
  return `
<div class="card__status-btns">
  <button class="card__save" type="submit">save</button>
  <button class="card__delete" type="button">delete</button>
</div>
`;
};

const createTaskHTML = (item, days, colors) => {
  return `
<article
  class="card 
  ${item.isEdit ? `card--edit` : ``}
  ${item.isCardRepeat ? `card--repeat` : ``}
  card--${item.color}
  ${item.isDeadline ? `card--deadline` : ``}">
  <form class="card__form" method="get">
    <div class="card__inner">
      <div class="card__control">
      ${createCardControlBtns(`edit`)}
      ${createCardControlBtns(`archive`)}
      ${createCardControlBtns(`favorites`, true)}
      </div>
      ${createCardControlBar()}
      ${createCardTextArea(item)}
      <div class="card__settings">
        <div class="card__details">
          <div class="card__dates">
            ${createCardDates(item)}
            ${createRepeatToggle(item, days)}
          </div>
          ${createHashtagList(item)}
        </div>
        ${createCardImg(item)}
        ${createCardColors(colors)}
      </div>
      ${createStatusBtns()}
    </div>
  </form>
</article>
`;
};

// HTML Generators End

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
