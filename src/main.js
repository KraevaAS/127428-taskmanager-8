'use strict';

const elem = document.querySelector(`.main__filter`);

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

const filtersArray = [
  {name: `all`,
    count: 15,
    isChecked: true},
  {name: `overdue`,
    count: 0,
    isChecked: false},
  {name: `today`,
    count: 0,
    isChecked: false},
  {name: `favorites`,
    count: 7,
    isChecked: false},
  {name: `repeating`,
    count: 2,
    isChecked: false},
  {name: `tag`,
    count: 6,
    isChecked: false},
  {name: `archive`,
    count: 115,
    isChecked: false}
];


for (let i = 0; i < filtersArray.length; i++) {
  elem.insertAdjacentHTML(`beforeEnd`, createFilterHTML(filtersArray[i].name, filtersArray[i].count, filtersArray[i].isChecked));
}


