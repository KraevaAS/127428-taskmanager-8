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

const createCardTextArea = (item) => {
  return `
<div class="card__textarea-wrap">
  <label>
<textarea
  class="card__text"
  placeholder="Start typing your text here..."
  name="text">
${item.title}
</textarea>
  </label>
</div>
  `;
};

const createCardImg = (item) => {
  return `
<label class="card__img-wrap ${item.isImg ? `` : `card__img-wrap--empty`}">
  <input
    type="file"
    class="card__img-input visually-hidden"
    name="img"/>
  <img
    src="${item.picture}"
    alt="task picture"
    class="card__img"/>
</label>
  `;
};

const createCardDates = (item) => {
  return `
<button class="card__date-deadline-toggle" type="button">
  date:
  <span class="card__date-satus">
    ${item.isDate ? `yes` : `no`}
  </span>
</button>
<fieldset class="card__date-deadline">
  <label class="card__input-deadline-wrap">
    <input
      class="card__date"
      type="text"
      placeholder="${item.date}"
      name="date"
      value="${item.date}"/>
  </label>
  <label class="card__input-deadline-wrap">
    <input
      class="card__time"
      type="text"
      placeholder="${item.time}"
      name="time"
      value="${item.time}"/>
  </label>
</fieldset>
  `;
};

const getWeekDays = (day, isChecked) => {
  return `
  <input
  class="visually-hidden card__repeat-day-input"
  type="checkbox"
  id="repeat-${day}-4"
  name="repeat"
  value="${day}"
  ${isChecked ? `checked` : ``}/>
  <label class="card__repeat-day" for="repeat-${day}-4">
  ${day}
</label> 
  `;
};

const getIsRepeat = (repeatingDays) => Object
  .values(repeatingDays)
  .filter((day) => day)
  .length > 1;

const createRepeatToggle = (repeatingDays, days) => {
  return `
<button class="card__repeat-toggle" type="button">
  repeat:
  <span class="card__repeat-status">
    ${getIsRepeat(repeatingDays) ? `yes` : `no`}
  </span>
</button>
<fieldset class="card__repeat-days">
  <div class="card__repeat-days-inner">
    ${days.map((day) => getWeekDays(day, repeatingDays[day])).join(``)}
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
${hashtags.map((tag) => createHashtagInner(tag)).join(``)}
    <input type="text" class="card__hashtag-input" name="hashtag-input" placeholder="Type new hashtag here"/>
    </label>
  </div>
</div>
  `;
};

const getColors = (item, color) => {
  return `
<input
  type="radio"
  id="color-${color}-4"
  class="card__color-input card__color-input--${color} visually-hidden"
  name="color"
  value="${color}" ${color === item.colors ? `checked` : ``}/>
<label
  for="color-${color}-4"
  class="card__color card__color--${color}">${color}</label>
`;
};

const createCardColors = (item, colors) => {
  return `
<div class="card__colors-inner">
  <h3 class="card__colors-title">Color</h3>
  <div class="card__colors-wrap">
    ${colors.map((color) => getColors(item, color)).join(``)}
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

export const createTaskHTML = (item, days, color) => {
  return `
<article
  class="card 
  ${item.isEdit ? `card--edit` : ``}
  ${getIsRepeat(item) ? `card--repeat` : ``}
  card--${item.colors}
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
            ${createRepeatToggle(item.repeatingDays, days)}
          </div>
          ${createHashtagList(item.tags)}
        </div>
        ${createCardImg(item)}
        ${createCardColors(item, color)}
      </div>
      ${createStatusBtns()}
    </div>
  </form>
</article>
`;
};

