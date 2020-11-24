/* Сделать класс Model nа основе класса Car.
 Добавить туда еще марку авто и свойство, которое утилизирует 
 авто( сбрасывает все настройки в ноль)- обязательно 
 использование в конструкторе и в свойствах super()...
Но и создать новый автомобиль через класс Model и проделать 
все теже манипуляции что и с мустангом, плюс утилизировать его */

class Car {
  
    static getSpecs(car) {
        return `maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, price: ${car.price}`;
    }
    
    constructor({ speed = 0, price, maxSpeed, isOn = false, distance = 0, }) {
        this.speed = speed;
        this._price = price;
        this.maxSpeed = maxSpeed;
        this.isOn = isOn;
        this.distance = distance;
    }
    
    get price() {
        return this._price;
    }
    
    set price(value) {
        this._price = value;
    }
    
    turnOn() {
        this.isOn = true;
    }
    
    turnOff() {
        this.speed = 0;
        this.isOn = false;
    }
    
    accelerate(value) {
        return this.speed + value <= this.maxSpeed
            ? this.speed += value
            : this.speed = this.maxSpeed;
    }
    
    decelerate(value) {
        return this.speed - value >= 0
            ? this.speed -= value
            : this.speed = 0;
    }
    
    drive(hours) {    
        if (this.turnOn) {
            this.distance += this.speed * hours;
        }  
        return this.distance;
    }
    
}

class Model extends Car {
    constructor({ speed, price, maxSpeed, isOn, distance }, brand) {
        super({ speed, price, maxSpeed, isOn, distance });

        this._brand = brand;
    }

    reset() {
        super.turnOff();
        return `speed: ${this.speed}, isOn: ${this.isOn}, distance: ${this.distance = 0}`;
    }

    get brand() {
        return this._brand;
    }

    set brand(newBrand) {
        this._brand = newBrand;
    }
}

 
const mustang = new Car({ maxSpeed: 200, price: 2000 });
console.log(mustang);

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

console.log(Car.getSpecs(mustang));
// 'maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000'

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

console.log(Car.getSpecs(mustang));
// 'maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000'

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000


const blackVolga = new Model({ maxSpeed: 120, price: 500 }, 'Волга');
console.log(blackVolga);
console.log(blackVolga.reset());

blackVolga.turnOn();
blackVolga.accelerate(70);
blackVolga.drive(3);

console.log(Car.getSpecs(blackVolga));

console.log(blackVolga.brand);
blackVolga.brand = 'ГАЗ-3102';
console.log(blackVolga.brand);

blackVolga.decelerate(20);
blackVolga.drive(1);
blackVolga.turnOff();

console.log(Car.getSpecs(blackVolga));

console.log(blackVolga.price); 
blackVolga.price = 1500;
console.log(blackVolga.price); 