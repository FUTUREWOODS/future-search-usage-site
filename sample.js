class MyIterator {
  constructor(data) {
    this.data = data;
  }

  [Symbol.iterator]() {
    let current = 0;
    let that = this;
    console.log(this, that, this.data.length, that.data.length)
    return  {
      next() {
        console.log(this.data)
        return current < that.data.length ?  {
          value: that.data[current++], done: false,
        } : {done: true};
      }
    }
  }
}

let x = false

if (x) {
  console.log('hoge')
} else {
  console.log('foo')
}

x ? console.log('hoge') : console.log('foo')
