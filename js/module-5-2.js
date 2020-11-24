// // exmaple, array
// // найти уникальные числа
//         //   0  1  2
// const arr = [1, 2, 2, 3, 2, 2, 2, 2, 3, 3, 3, 3];
// const isUniq = (element, index, arr) => arr.indexOf(element) === index;

// function filter(arr, callback) {
//   for (let i = 0; i < arr.length; i += 1) {
//     if (callback(arr[i], i, arr)) {
//       // 0 === 0
//       // 1 === 1
//       // 1 === 2 // false
//     }
//   }
// }

// console.log(arr.filter(isUniq));

// ---------------------------------------------------------------
function Human(name) {
    this.name = name;
}

Human.prototype.walk = function () {
    console.log('walk');
}

const bobby = new Human('Bobby');
const peter = new Human('Peter');

console.log(bobby);
console.log(peter);

console.log(Human.prototype === bobby.__proto__);
console.log(Human.prototype.walk === bobby.__proto__.walk);

function Doctor(name) {
    Human.call(this, name);

    this.heal = function () {
        console.log(`${this.name} is healing`);
    }
}

Doctor.prototype = Object.create(Human.prototype);
Doctor.prototype.constructor = Doctor;

const house = new Doctor('dr.House');
console.log(house);
house.heal();
house.walk();

Human.prototype.talk = function () {
    console.log(`${this.name} is talking`);
}

house.talk();

// ---------------------------------------------------------
let salaries = {
    'John': 100,
    'Pete': 300,
    'Mary': 250,
};

function sumSalaries(salaries) {
    let sum = 0;
    const values = Object.values(salaries);
    for (const value of values) {
        sum += value;
    }
    return sum;
}

console.log(sumSalaries(salaries));

// --------------------------------------------------------
// Приватные свойства и методы
class Auto {
  #speed = 0; // Приватные свойства

    // эту функцию нельзя вызвать извне, только внутри класса
  #sayHello() {
    console.log('Hello');
  }

  constructor(initialSpeed) {
    this.#speed = initialSpeed;
  }

  set speed(value) {
    if (value > 100) {
      this.#speed = 100;
    } else {
      this.#speed = value;
    }
  }

  get speed() {
    this.#sayHello();
    return `${this.#speed} km/h`;
  }
}

const kopeyka = new Auto(50);
console.log(kopeyka);

kopeyka.speed = 500;

console.log(kopeyka);
console.log(kopeyka.speed);

