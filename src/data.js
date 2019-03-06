export const filtersArray = [
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

export const task = {
  isEdit: true,
  isImg: true,
  isDate: true,
  isFavorite: false,
  isDone: false,
  title: [
    `Изучить теорию`,
    `Сделать домашку`,
    `Пройти интенсив на соточку`
  ][Math.floor(Math.random() * 3)],
  picture: `http://picsum.photos/100/100?r=${Math.random()}`,
  dueDate: [
    Date.now() + 1 + Math.floor(Math.random() * 7) * 24 * 60 * 60 * 1000,
    Date.now() - Math.floor(Math.random() * 7) * 24 * 60 * 60 * 1000
  ][Math.floor(Math.random() * 2)],
  date: `4 March`,
  time: `11:15 PM`,
  color: `yellow`,
  tags: Array.from(new Set([
    `homework`,
    `theory`,
    `practice`,
    `intensive`,
    `keks`
  ])).sort(function compareRandom() {
    return Math.random() - 0.5;
  }).slice(0, Math.floor(Math.random() * (3))),
  repeatingDays: {
    'Mo': true,
    'Tu': false,
    'We': true,
    'Th': false,
    'Fr': false,
    'Sa': true,
    'Su': false
  },
  colors: [
    `black`,
    `yellow`,
    `blue`,
    `green`,
    `pink`
  ][Math.floor(Math.random() * 5)]
};
