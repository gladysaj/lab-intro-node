class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a,b) => a-b);
    this.items = this.items.length
    //continue
  }

  get(pos) {}
if() {
  throw new Error("OutOfBounds");
}


  max() {}

  min() {}

  sum() {}
//reduce
  avg() {}
  //sum
}

module.exports = SortedList;
