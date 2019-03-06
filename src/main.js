import {createFilterHTML} from './filters.js';
import {filtersArray} from './data.js';
import {task} from './data.js';
import {Task} from './task.js';
import {TaskEdit} from './task.js';

const tasksContainer = document.querySelector(`.board__tasks`);
const taskComponent = new Task(task);
const editTaskComponent = new TaskEdit(task);

tasksContainer.appendChild(taskComponent.render());

taskComponent.onEdit = () => {
  editTaskComponent.render();
  tasksContainer.replaceChild(editTaskComponent.element, taskComponent.element);
  taskComponent.unrender();
};

editTaskComponent.onSubmit = () => {
  taskComponent.render();
  tasksContainer.replaceChild(taskComponent.element, editTaskComponent.element);
  editTaskComponent.unrender();
};

const filtersContainer = document.querySelector(`.main__filter`);
filtersArray.forEach((filter) => {
  filtersContainer.insertAdjacentHTML(`beforeEnd`, createFilterHTML(filter.name, filter.count, filter.isChecked));
});
