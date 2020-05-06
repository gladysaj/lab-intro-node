class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a,b) => a-b);
    // make sure that the length property gets updated accordingly when new items are added to the list.
    this.length = this.items.length;
  }

  get(pos) {
    this.items.pos = [pos];
  }
  //fix this
    if(pos > this.items) {
      throw new Error("OutOfBounds");
}

  max() {
   this.items = Math.max(...items);
  }
  if( SortedList === null) {
    throw new Error('EmptySortedList');
  }

  min() {
    this.items = Math.min(...items);
  }
  if( SortedList === null) {
    throw new Error('EmptySortedList');
  }

  sum() {
    this.items.reduce((test) => {
      //complete
    }
  }

  avg() {}
  //sum
}

module.exports = SortedList;
