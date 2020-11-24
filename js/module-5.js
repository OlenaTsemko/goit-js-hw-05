// Процедурное программирование
// const baseSalary = 30000;
// const overtime = 10;
// const rate = 20;

// const getWage = (baseSalary, overtime, rate) => {
//   return baseSalary + overtime * rate;
// };

// console.log(getWage(baseSalary, overtime, rate));

// //-------------------------------------------------------------

// // Объектно-ориентированное программирование (ООП)
// const employee = {
//   baseSalary: 30000,
//   overtime: 10,
//   rate: 20,
//   getWage() {
//     return this.baseSalary + this.overtime * this.rate;
//   },
// };

// console.log(employee.getWage());

// // -------------------------------------------------------------

// var dogs = {
//     Fido: 'Mutt',
//     Hunter: 'Doberman',
//     Snoopie: 'Beagle'
// };

// var myDog = 'Hunter';
// console.log(myDog);
// var myBreed = dogs[myDog];
// console.log(myBreed);

// // ---------------------------------------------------------------
// const arr = [1,2,42,3];
// const brr = [];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === 42) {    
//     // arr.splice(i, 1);
//     i++;
//     // continue;
//     // i += 1;
//   }
//   brr.push(arr[i]);
// }

// console.log(brr); // должно быть [1, 2, 3]
// // --------------------------------------------------------------

// const Hotel = function(name, stars, capacity) {
//   this.name = name;
//   this.stars = stars;
//   this.capacity = capacity;
// };

// // В результате вызова
// const hotel = new Hotel('Resort Hotel', 5, 100);
// // Получаем такой объект
// console.log(hotel);
// // Hotel {name: "Resort Hotel", stars: 5, capacity: 100}

// const motel = new Hotel('Sunlight Motel', 4, 300);
// console.log(motel);
// // Hotel {name: "Sunlight Motel", stars: 4, capacity: 300}

// // -----------------------------------------------------------
// const Hotel = function(name, stars, capacity) {
//   this.name = name;
//   this.stars = stars;
//   this.capacity = capacity;
//   this.guestCount = 0;

//   this.greet = function(guestName) {
//     console.log(`Hello ${guestName}, wellcome to ${this.name}`);
//   };

//   this.addGuests = function(amount) {
//     this.guestCount += amount;
//   };

//   this.removeGuests = function(amount) {
//     this.guestCount -= amount;
//   };
// };

// const hotel = new Hotel('Sunrise Hotel', 5, 100);

// console.log(hotel);
// // Hotel {name: "Sunrise Hotel", greet: ƒ, addGuests: f, removeGuests: f}
// hotel.greet('Mango'); // Hello Mango, wellcome to Sunrise Hotel

// hotel.addGuests(50);
// console.log(hotel);
// hotel.removeGuests(50);
// console.log(hotel);

// // -------------------------------------------------------------
// const mango = {
//   name: 'Mango',
//   sales: 5,
//   sell(product) {
//     this.sales += 1;
//     return `Manager ${this.name} sold ${product}.`;
//   },
// };

// console.log(mango.sales); // 5
// console.log(mango.sell('TV')); // Manager Mango sold TV
// console.log(mango.sell('Microwave')); // Manager Mango sold Microwave
// console.log(mango.sales); // 7

// const poly = {
//   name: 'Poly',
//   sales: 10,
//   sell(product) {
//     this.sales += 1;
//     return `Manager ${this.name} sold ${product}.`;
//   },
// };

// console.log(poly.sales); // 10
// console.log(poly.sell('TV')); // Manager Poly sold TV
// console.log(poly.sell('Microwave')); // Manager Poly sold Microwave
// console.log(poly.sales); // 12

// --------------------------------------------------------------
// const Manager = function (name = 'manager', sales = 0) {
//   this.name = name;
//   this.sales = sales;

//   this.sell = function (product) {
//     this.sales += 1;
//     return `Manager ${this.name} sold ${product}.`;
//   };
// };

// const mango = new Manager('Mango', 5);
// console.log(mango.sales); // 5
// console.log(mango.sell('TV')); // Manager Mango sold TV
// console.log(mango.sell('Microwave')); // Manager Mango sold Microwave
// console.log(mango.sales); // 7

// const poly = new Manager('Poly', 10);
// console.log(poly.sales); // 10
// console.log(poly.sell('TV')); // Manager Poly sold TV
// console.log(poly.sell('Microwave')); // Manager Poly sold Microwave
// console.log(poly.sales); // 12

// --------------------------------------------------------
// var a = {};
// (function b(a) {
//   a.a = 10;
//   a.a = null;
// })(a);
// console.log(a);

// ------------------------------------------------------
// var a = {};
// function b(a) {
//   a.a = 10;
//   a.a = null;
// };

// b(a);

// console.log(a);


// ------------------------------------------------------------
// var obj = {
//   a: {},
//   prop: 1
// };

// obj.a.prop = 2;
// console.log(obj.a.prop);

// ------------------------------------------------------------
// const animal = { eats: true };
// const dog = { barks: true };

// dog.__proto__ = animal;

// // В dog можно найти оба свойства
// console.log(dog.barks); // true
// console.log(dog.eats); // true
// console.log(dog);

// ----------------------------------------------------------
// const animal = { eats: true };
// const dog = { barks: true, eats: false };

// dog.__proto__ = animal;

// console.log(dog.barks); // true
// console.log(dog.eats); // false, свойство взято из dog

// -----------------------------------------------------------
// const animal = { eats: true };
// const dog = Object.create(animal);
// dog.barks = true;

// console.log(dog.barks); // true
// console.log(dog.eats); // true

// --------------------------------------------------------------
// const animal = { eats: true };
// const dog = Object.create(animal);
// dog.barks = true;

// for (const key in dog) {
//   if (!dog.hasOwnProperty(key)) continue;

//   console.log(key); // barks
// }

// ------------------------------------------------------------
// const animal = { eats: true };
// const dog = Object.create(animal);
// dog.barks = true;

// const dogKeys = Object.keys(dog);

// console.log(dogKeys); // ['barks']

// ---------------------------------------------------------------
// const Guest = function(name, room) {
//   this.name = name;
//   this.room = room;
// };

// console.log(Guest.prototype); // {constructor: ƒ}

// Guest.prototype.showGuestInfo = function() {
//   console.log(`name: ${this.name}, room: ${this.room}`);
// };

// const mango = new Guest('Mango', 28);
// const poly = new Guest('Poly', 36);

// mango.showGuestInfo(); // name: Mango, room: 28
// poly.showGuestInfo(); // name: Poly, room: 36

// console.log(mango);

// ------------------------------------------------------------
// const Hero = function(name, xp) {
//   this.name = name;
//   this.xp = xp;
// };

// /*
//  * Теперь у нас есть конструктор базового класса героя,
//  * добавим в prototype какой-то метод.
//  */
// Hero.prototype.gainXp = function(amount) {
//   console.log(`${this.name} gained ${amount} experience points`);
//   this.xp += amount;
// };

// const mango = new Hero('Mango', 1000);
// console.log(mango); // Hero { name: 'Mango', xp: 1000 }

// // Так как mango это экземпляр Hero, то ему доступны методы из Hero.prototype
// mango.gainXp(500); // Mango gained 500 experience points
// console.log(mango); // Hero { name: 'Mango', xp: 1500 }

// const Warrior = function(name, xp, weapon) {
//   /*
//    * Во время выполнения функции Warrior вызываем функцию Hero
//    * в контексте объекта создающегося в Warrior, а так же передаем
//    * аргументы для инициализации полей this.name и this.xp
//    *
//    * this это будущий экземпляр Warrior
//    */
//   Hero.call(this, name, xp);

//   // Тут добавляем новое свойство - оружие
//   this.weapon = weapon;
// };

// /*
//  * Используем Object.create() для того чтобы изначально записать
//  * в Warrior.prototype пустой объект, в __proto__ которого будет
//  * ссылка на Hero.prototype. Это необходимо сделать до того
//  * как добавлять методы
//  */
// Warrior.prototype = Object.create(Hero.prototype);

// // Не забываем добавить в Warrior.prototype свойство constructor
// Warrior.prototype.constructor = Warrior;

// // Добавим метод для атаки
// Warrior.prototype.attack = function() {
//   console.log(`${this.name} attacks with ${this.weapon}`);
// };

// const poly = new Warrior('Poly', 200, 'sword');

// console.log(poly); // Warrior {name: "Poly", xp: 200, weapon: "sword"}
// poly.attack(); // Poly attacks with sword

// poly.gainXp(300); // Poly gained 300 experience points
// console.log(poly);

// -------------------------------------------------------------
// const toString = Object.prototype.toString;
// console.log(toString);
// const result = toString.call([]);
// console.log(result);

// --------------------------------------------------------------
// //class declaration
// class Guest {
//   constructor(name = 'guest', roomNumber = 0) {
//     this.name = name;
//     this.roomNumber = roomNumber;
//   }

//    // Аналог Guest.prototype.getFullInfo
//   getFullInfo() {
//     console.log(`
//     Guest ${this.name}
//     Room number ${this.roomNumber}
//     `);
//   }
// }

// // Под капотом класс это функция-конструктор с прототипом
// console.log(typeof Guest); // "function"
// console.log(Guest.prototype); // {constructor: ƒ}

// const guest = new Guest();
// console.log(guest); // Guest {}

// const mango = new Guest('Mango', 26);

// console.log(mango); // {name: Mango, roomNumber: 26}
// console.log(mango instanceof Guest); // true
// console.log(mango instanceof Object); // true

// mango.getFullInfo();
// // Guest Mango
// // Room number 26

// ------------------------------------------------------------
// class Guest {
//   // Собственные свойства класса размещаем в конструкторе
//   constructor(name, roomNumber) {
//     this._name = name;
//     this._roomNumber = roomNumber;
//   }

//   // Используем геттеры и сеттеры для описания интерфейса доступа к свойствам
//   get name() {
//     return this._name;
//   }

//   set name(value) {
//     this._name = value;
//   }
// }

// const mango = new Guest('Mango', 26);

// // обращение к get и set не требует вызова - т.е. без ()
// console.log(mango.name); // Mango

// mango.name = 'Mango the Fluffy';
// console.log(mango.name); // Mango the Fluffy

// // -------------------------------------------------------------
// // Класс со статическими свойствами и методами
// class Calc {
//   // Класс-калькулятор для двух аргументов
//   constructor() {}

//   // Метод как замена свойству
//   static get PI() {
//     return 3.14;
//   }

//   // Статический метод +
//   static add(...args) {
//     return args.reduce((acc, next) => acc + next, 0);
//   }

//   // Статический метод *
//   static mult(...args) {
//     return args.reduce((acc, next) => acc * next, 1);
//   }
// }

// console.log(Calc.PI); // 3.14
// console.log(Calc.add(2, 3, 4)); // 9
// console.log(Calc.mult(12, 3, 4)); // 144

// // ------------------------------------------------------------
// class Animal {
//   constructor(name) {
//     this.name = name;
//   }

//   move() {
//     console.log(`I, ${this.name}, am moving!`);
//   }
// }

// class Dog extends Animal {
//   constructor(name, breed) {
//     // Вызвать конструктор Animal с аргументом name
//     super(name);
//     this.breed = breed;
//   }

//   bark() {
//     console.log('woof!');
//   }

//   moveAndMakeSound() {
//     super.move();
//     this.bark();
//   }
// }

// const dog = new Dog('Mango', 'shepherd');

// dog.move(); // I, Mango, am moving!
// dog.bark(); // woof!
// dog.moveAndMakeSound(); // I, Mango, am moving! woof!

// ----------------------------------------------------------------
// // методы animal
// let animal = {
// isSleeping: 2,   
//   sleep() {
//     this.isSleeping += 5;
//   }
// };
// let rabbit = {
//   __proto__: animal
// };
// // модифицирует rabbit.isSleeping
// rabbit.sleep();
// console.log(rabbit.isSleeping); // 7
// console.log(animal.isSleeping); // 2

// console.log(animal);
// animal.sleep();
// console.log(animal);

