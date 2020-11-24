/* Создать класс животные (Animals), куда передать параметрами объект:
- имя (name);
- возраст (age);
- количество лап (legs), по дефолту 4;
- цвет глаз (eyes);


Классу Animals прописать методы:
- desribe - перечислить все свойства в формате ключ: значение в шаблонной строке 
используя \n для переноса строки
- день рождения (birthday), при вызове которого возраст увеличивается на 1 и
возвращает строку '(имя) постарел и теперь ему (возраст) лет'

- разговаривает (talk), которому прилетают параметры (sound), 
возвращает шаблонную строку 'меня зовут (name) и я говорю - (sound)'


создать классы Сats и Dogs, которые наследуют класс Animals, параметрами 
им передать: 
для Cats:
- шерсть (fur); 
метод:
- changeFur, если коту больше 10 лет изменить шерсть на седую и облезшую и 
и вывести сообщение 'теперь шерсть у (имя) (седая и облезшая), но мы все равно его
любим', если младше 10 '(имя) - (шерсть) и в рассвете сил'
- changeDescribe - к родительскому методу describe добавить параметр с шерстью

для Dogs:
- порода (breed)
метод:
- changeEyes, если порода собаки - это хаски, и если возраст старше 2-ух 
лет, то цвет глаз изменится на голубой, если это другая порода, но возраст
старше 2-ух лет, то цвет глаз станет темно+(цвет глаз начальный), в остальных 
случаях цвет не изменится. вернуть строку `Меня зовут (имя) и у меня (цвет глаз) глаза`;
- changeDescribe - к родительскому методу describe добавить параметр c породой
*/


class Animals {
    constructor({ name, age, legs = 4, eyes }) {
        this.name = name;
        this.age = age;
        this.legs = legs;
        this.eyes = eyes;
    }

    describe() {
        this.describeMessage = `name: ${this.name}\nage: ${this.age}\nlegs: ${this.legs}\neyes: ${this.eyes}`;
        return this.describeMessage;
    }

    birthday() {
        this.age += 1;
        return `${this.name} постарел и теперь ему ${this.age} лет`;
    }

    talk(sound) {
        return `меня зовут ${this.name} и я говорю - ${sound}`;
    }
}

class Cats extends Animals {
    constructor({ name, age, legs, eyes }, fur) {
        super({ name, age, legs, eyes });

        this.fur = fur;
    }

    changeFur() {
        if (this.age >= 10) {
            this.fur = 'седая и облезшая';
            return `теперь шерсть у ${this.name} ${this.fur}, но мы все равно его любим`;
        }
        return `${this.name} - ${this.fur} и в рассвете сил`;     
    }

    changeDescribe() {
        super.describe();
        return this.describeMessage += `\nfur: ${this.fur}`;
    }
}

const cat = new Cats({ name: 'Масик', age: 9, eyes: 'желто-зеленые' }, 'пушистый');
console.log(cat); // Cats {name: "Масик", age: 9, legs: 4, eyes: "желто-зеленые", fur: "пушистый"}

console.log(cat.describe());
/* 
name: Масик
age: 9
legs: 4
eyes: желто-зеленые 
*/
console.log(cat.changeDescribe());
/*
name: Масик
age: 9
legs: 4
eyes: желто-зеленые
fur: пушистый
*/
console.log(cat.changeFur()); // Масик - пушистый и в рассвете сил
console.log(cat.birthday()); // Масик постарел и теперь ему 10 лет
console.log(cat.changeFur()); // теперь шерсть у Масик седая и облезшая, но мы все равно его любим
console.log(cat.talk('Мяу')); // меня зовут Масик и я говорю - Мяу

class Dogs extends Animals {
    constructor({ name, age, legs, eyes }, breed) {
        super({ name, age, legs, eyes });

        this.breed = breed;
    }

    changeEyes() {
        if (this.breed === 'хаски' && this.age >= 2) {
            this.eyes = 'голубые';     
        } else if (this.age >= 2) {
            this.eyes = 'темно-' + this.eyes;
        }  
        return `Меня зовут ${this.name} и у меня ${this.eyes} глаза`;
            
    }

    changeDescribe() {
        super.describe();
        return this.describeMessage += `\nbreed: ${this.breed}`;
    }
}

const dog = new Dogs({ name: 'Топик', age: 1, eyes: 'серые' }, 'хаски');
console.log(dog); // Dogs {name: "Топик", age: 1, legs: 4, eyes: "серые", breed: "хаски"}

console.log(dog.describe());
/*
name: Топик
age: 1
legs: 4
eyes: серые
*/
console.log(dog.changeDescribe());
/*
name: Топик
age: 1
legs: 4
eyes: серые
breed: хаски
*/
console.log(dog.changeEyes()); // Меня зовут Топик и у меня серые глаза
console.log(dog.birthday()); // Топик постарел и теперь ему 2 лет
console.log(dog.changeEyes()); // Меня зовут Топик и у меня голубые глаза
console.log(dog.talk('Гав')); // меня зовут Топик и я говорю - Гав

const dog2 = new Dogs({ name: 'Баксик', age: 5, eyes: 'коричневые' }, 'мопс');
console.log(dog2); // Dogs {name: "Баксик", age: 5, legs: 4, eyes: "коричневые", breed: "мопс"}
console.log(dog2.changeDescribe());
/*
name: Баксик
age: 5
legs: 4
eyes: коричневые
breed: мопс
*/
console.log(dog2.changeEyes()); // Меня зовут Баксик и у меня темно-коричневые глаза
console.log(dog2.changeDescribe());
/*
name: Баксик
age: 5
legs: 4
eyes: темно-коричневые
breed: мопс
*/

