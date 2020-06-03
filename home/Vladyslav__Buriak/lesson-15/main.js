// // task 1
// const showName = (name) => {
//     return name;
// }

// const res = showName(prompt('введите ваше имя'));
// alert(`Hello ${res}`);

// task 2
// const showAge = (year) => {
//     return year;
// }

// const res2 = showAge(prompt('введите год вашего рождения'));
// alert(`ваш возраст ${2020 - res2}`)


// task3
// const drawSquare = (side, num) => {
//     return side * num;
// }

// const res3 = drawSquare(prompt('введите сторону квадрата'), 4);
// alert(res3);

// let res = prompt(' введите число');
// alert(`площадь окружности ${res * Math.pow(Math.PI, 2)}`);


// task 4
// const showCircle = () => {
//     let res = prompt() * Math.pow(Math.PI, 2);
//     return res;
// }
// alert(showCircle());

// task 5
// const showV = (s, t) => {
//     let v = s / t;
//     return v;
// }
// alert('скорость = ' + showV(prompt('введите расстояние'), prompt('введите примерное время')) + 'км/ч')


// task 6
// const showCurrency = (currency, euro) => {
//     let res = Math.floor(currency * euro);
//     return res;
// }

// const exchange = showCurrency(prompt('введите сумму в USD'), 0.92);
// alert('вы получаете ' + exchange + ' EURO ');

// task 7
// const showMemory = (gigabyte, megabyte) => {
//     let res = Math.floor(gigabyte / megabyte);
//     return res;
// }
// const memory = showMemory(prompt('укажите обьем флешки в ГБ'), 0.82);
// alert('можно поместить ' + memory + ' файлов')

// task 8
// const getMod = (money, choco) => {
//     let res = Math.floor(money / choco);
//     let res2 = money % choco;
//     let data = [res, res2];
//     return data;
// }
// const mod = getMod(prompt('Введите количество денег в кошельке'), (prompt('введите цену шоколадки')));
// alert('вы можете купить ' + mod);


// task 10
// const showSum = (promt, procent, divide, multi) => {
//     return promt * procent / divide * multi
// }

// alert(showSum(prompt('Введите сумму депозита'), 0.05, 12, 2));