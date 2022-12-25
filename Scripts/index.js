// let m = {
//     an: 2,
//     sa: 3,
// };
// // alert(m.an);
// // alert(m.sa);
//
// let clone = Object.assign({}, m);
//
// alert(clone.an)
// alert(clone.sa)


// let name = {name: 'j'};
//
// Object.assign(name, {name: 'm'});
//
// alert(name.name)


// let list = {
//     order0: 0,
//     order1: 1200,
//     order2: 1300,
// };
//
// let ListClean = {
// }
//
// ListClean = Object.assign({}, list)
//
// alert(ListClean.order0)
// alert(ListClean.order1)
// alert(ListClean.order2)


// let user = {
//     Name1: 'Mark',
// };
//
// let user1 = {Name2: 'Anton'};
// let user2 = {Name3: 'Alex'};
//
// Object.assign(user, user1, user2);
// alert(user.Name1)
// alert(user.Name2)
// alert(user.Name3)



// let clothes = {
//     name: 'Mark',
//     sizes: {
//         height: 185,
//         mass: 70
//     }
// }
//
// let clone = Object.assign({}, clothes);
//
// clothes.sizes.mass++;
//
// alert(clone.sizes.mass);


// let user = {
//     name: 'alex',
//     age: 18
// };
//
// user.Sayhi = function () {
//     alert('Hi')
// };
//
// user.Sayhi();


// let user = {
//     name: 'alex',
//     age: 18
// };
//
// function Hi() {
//     alert('Hi')
// }
//
// user.Hi = Hi;
//
// user.Hi ();


// user = {
//     sayhi: function () {     //Стандартная запись как ключ и свойство
//         alert('hi');
//     }
// };
//
// user.sayhi()


// user = {
//     sayhi() { alert('hi'); }      //Сокращенная запись как функция, но в объекте --> Метод объекта
// };
//
// user.sayhi()


// let user = {
//     name: "John",
//     age: 30,
//
//     sayHi() {
//         alert( this.name ); // приведёт к ошибке
//     }
//
// };
//
//
// let admin = user;
// user = null; // перезапишем переменную для наглядности, теперь она не хранит ссылку на объект.
//
// alert(admin.name)
// admin.sayHi();



// let user = { name: "John" };
// let admin = { name: "Admin" };
//
// function sayHi() {
//     alert( this.name );
// }
//
// // используем одну и ту же функцию в двух объектах
// user.f = sayHi;
// admin.f = sayHi;
//
// // эти вызовы имеют  разное значение this
// // "this" внутри функции - это объект "перед точкой"
// user.f(); // John  (this == user)
// admin.f(); // Admin  (this == admin)
//
// admin['f'](); // Admin (нет разницы между использованием точки или квадратных скобок для доступа к объекту)


// let cals = {
//     sum() {
//         return this.a + this.b;
//     },
//     mul() {
//         return this.a * this.b;
//     },
//     read() {
//         this.a = +prompt('a?', 0);
//         this.b = +prompt('b?', 0);
//     }
// };
//
// cals.read()
//
// alert(cals.sum())
// alert(cals.mul())


// let stair = {
//     step: 0,
//     step_up() {
//         this.step++;
//     },
//     step_down() {
//         this.step--;
//     },
//     step_counter() {
//         alert(this.step);
//     }
// }
//
// stair.step_up();
// stair.step_up();
// stair.step_up();
// stair.step_up();
// stair.step_up();
// stair.step_up();
//
// stair.step_down();
//
// stair.step_counter();


// function User(name) {
//     this.name = name;
//     this.isAdmin = false;
// }
//
// let user = new User("Jack");
//
// alert(user.name); // Jack
// alert(user.isAdmin); // false


// let user = {};
//
// alert(user?.address);


// let name = Symbol("id");
//
// alert(name.toString(name));
            //ИЛИ МЫ МОЖЕМ ОБРРАТТИТЬСЯ К ОПИСАНИЮ//
// let id = Symbol('id');
//
// alert(id.description);





// let user = {
//     name: 'mark',
//     age: 18,
//     Sayhi: function() {
//         alert('hi');
//     }
// };
//
//
//
// user.birth = 13;
//
// alert(user.birth)
// user.Sayhi();


// let str = "bbbbb";
//
// alert(str.toUpperCase(str))

// let num = 1.22222;
//
// alert(num.toFixed(1));


// let min = 1e-2;
// console.log(min)


// function readNumber() {
//     let num;
//
//     do {
//         num = prompt("Введите число", 0);
//     } while ( !isFinite(num) );
//
//     if (num === null || num === '') return null;
//
//     return +num;
// }
//
// alert(`n: ${readNumber()}`)


// let i = 0;
// while (i != 10) {
//     i += 0.2;
// }



// let a = ' привет, скажи \' 4ina \' ';
// //
// // console.log(a)


// let a = 'asada';

// console.log(a.length);
//
// console.log(a.length - 1);
// console.log(a.at(-1));
//
// console.log(a[1]);
// console.log(a.at(1));
//
// console.log('Перебор строки');
//
// for (let char of a) {
//     console.log(char);
// };

// alert(a.codePointAt(1));
// alert( a.slice(4) );


// alert( String.fromCodePoint(90, 100, 12, 10, 9, 11, 123, 1) );


// function extractCurrencyValue(str) {
//     return +str.slice(1);
// }
//
//
// let a = '$1000';
//
// alert(extractCurrencyValue(a));













