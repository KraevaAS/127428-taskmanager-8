'use strict';

const createFilterHTML = function (name, count, isChecked = false) {
  return `
<input type="radio"
      id="filter__${name.toLowerCase()}"
      class="filter__input visually-hidden"
      name="filter"
      ${isChecked ? ` checked` : ``}
      ${count === 0 ? ` disabled` : ``} />
<label for="filter__${name.toLowerCase()}" class="filter__label">
${name.toUpperCase()} <span class="filter__${name.toLowerCase()}-count">${count}</span>
</label>
      `;
};


const elem = document.querySelector(`.main__filter`);

elem.insertAdjacentHTML(`beforeEnd`, createFilterHTML(`all`, 15, true));
elem.insertAdjacentHTML(`beforeEnd`, createFilterHTML(`overdue`, 0));
elem.insertAdjacentHTML(`beforeEnd`, createFilterHTML(`today`, 0));
elem.insertAdjacentHTML(`beforeEnd`, createFilterHTML(`favorites`, 7));
elem.insertAdjacentHTML(`beforeEnd`, createFilterHTML(`repeating`, 2));
elem.insertAdjacentHTML(`beforeEnd`, createFilterHTML(`tag`, 6));
elem.insertAdjacentHTML(`beforeEnd`, createFilterHTML(`archive`, 115));
