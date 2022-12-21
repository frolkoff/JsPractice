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

