// A Vector Type

class Vec {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  plus(value) {
    return new Vec(this.x + value.x, this.y + value.y);
  }

  subtract(value) {
    return new Vec(this.x - value.x, this.y - value.y);
  }

  get length() {
    return Math.sqrt(this.x ** 2 + this.y ** 2);
  }
}

console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// → Vec{x: 3, y: 5}
console.log(new Vec(1, 2).subtract(new Vec(2, 3)));
// → Vec{x: -1, y: -1}
console.log(new Vec(3, 4).length);
// → 5

//  GROUPS

class Group {
  constructor() {
    this.members = [];
  }

  add(value) {
    if (!this.has(value)) {
      this.members.push(value);
    }
  }

  delete(value) {
    if (this.has(value)) {
      this.members = this.members.filter((member) => member !== value);
    }
  }

  has(value) {
    return this.members.includes(value);
  }

  static from(obj) {
    let group = new Group();

    for (const element of obj) {
      group.add(element);
    }

    return group;
  }

  [Symbol.iterator]() {
    let index = 0;
    let members = this.members;

    return {
      next() {
        if (index < members.length) {
          return { value: members[index++], done: false };
        }

        return { done: true };
      },
    };
  }
}

let group = Group.from([10, 20]);
console.log(group.members);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false

console.log(group.members);
