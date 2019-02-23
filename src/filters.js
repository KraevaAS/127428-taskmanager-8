export const createFilterHTML = (name, count, isChecked = false) => {
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
