export class Task {
  constructor(item) {
    this._title = item.title;
    this._picture = item.picture;
    this._tags = item.tags;
    this._dueDate = item.dueDate;
    this._date = item.date;
    this._time = item.time;
    this._repeatingDays = item.repeatingDays;
    this._isImg = item.isImg;
    this._isDate = item.isDate;
    this._isFavorite = item.isFavorite;
    this._isDone = item.isDone;
    this._element = null;
    this._state = {
      isEdit: false,
    };
  }
}
