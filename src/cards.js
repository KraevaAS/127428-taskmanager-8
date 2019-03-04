const createCardControlBtns = (name, isDisabled = false) => {
  return `
<button type="button" class="card__btn card__btn--${name.toLowerCase()} ${isDisabled ? `
card__btn--disabled` : ``}">
${name.toLowerCase()}
</button>
  `;
};

const createCardColorBar = () => {
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
${card.title}
</textarea>
  </label>
</div>
  `;
};

const createCardImg = (card) => {
  return `
<label class="card__img-wrap ${card.isImg ? `` : `card__img-wrap--empty`}">
  <input
    type="file"
    class="card__img-input visually-hidden"
    name="img"/>
  <img
    src="${card.picture}"
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

const getIsRepeat = (item) => Object
  .values(item.repeatingDays)
  .filter((day) => day === true)
  .length > 1;

const createRepeatToggle = (item, days) => {
  return `
<button class="card__repeat-toggle" type="button">
  repeat:
  <span class="card__repeat-status">
    ${getIsRepeat(item) ? `yes` : `no`}
  </span>
</button>
<fieldset class="card__repeat-days">
  <div class="card__repeat-days-inner">
    ${getWeekDays(days)}
  </div>
</fieldset>
  `;
};

const createHashtagInner = (tag) => {
  return `
<span class="card__hashtag-inner">
  <input
      type="hidden"
      name="hashtag"
      value="repeat"
      class="card__hashtag-hidden-input"/>
  <button type="button" class="card__hashtag-name">
  #${tag}
  </button>
  <button type="button" class="card__hashtag-delete">
    delete
  </button>
</span>
   `;
};

const createHashtagList = (hashtags) => {
  return `<div class="card__hashtag">
  <div class="card__hashtag-list">
${Array.from(hashtags).map((tag) => createHashtagInner(tag)).join(``)}
    <input type="text" class="card__hashtag-input" name="hashtag-input" placeholder="Type new hashtag here"/>
    </label>
  </div>
</div>
  `;
};

const getColors = (item) => {
  let getColor = ``;
  for (let i = 0; i < item.colors.length; i++) {
    getColor += `
<input
  type="radio"
  id="color-${item.colors[i]}-4"
  class="card__color-input card__color-input--${item.colors[i]} visually-hidden"
  name="color"
  value="${item.colors[i]}" ${item.colors[i] === `yellow` ? `checked` : ``}/>
<label
  for="color-${item.colors[i]}-4"
  class="card__color card__color--${item.colors[i]}">${item.colors[i]}</label>
`;
  }
  return getColor;
};

const createCardColors = (item) => {
  return `
<div class="card__colors-inner">
  <h3 class="card__colors-title">Color</h3>
  <div class="card__colors-wrap">
    ${getColors(item)}
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

export const createTaskHTML = (item, days) => {
  return `
<article
  class="card 
  ${item.isEdit ? `card--edit` : ``}
  ${getIsRepeat(item) ? `card--repeat` : ``}
  card--yellow
  ${item.dueDate > Date.now() ? `card--deadline` : ``}">
  <form class="card__form" method="get">
    <div class="card__inner">
      <div class="card__control">
      ${createCardControlBtns(`edit`)}
      ${createCardControlBtns(`archive`)}
      ${createCardControlBtns(`favorites`, true)}
      </div>
      ${createCardColorBar()}
      ${createCardTextArea(item)}
      <div class="card__settings">
        <div class="card__details">
          <div class="card__dates">
            ${createCardDates(item)}
            ${createRepeatToggle(item, days)}
          </div>
          ${createHashtagList(item.tags)}
        </div>
        ${createCardImg(item)}
        ${createCardColors(item)}
      </div>
      ${createStatusBtns()}
    </div>
  </form>
</article>
`;
};

