
// task 1
// function showAge() {
//     let age = prompt('введите ваш возраст');
//     if (age >= 0 && age <= 2) {
//         alert('ребенок')
//     } else if (age >= 12 && age < 18) {
//         alert('подросток')
//     } else if (age >= 18 && age < 60) {
//         alert('взрослый')
//     } else if (age >= 60) {
//         alert('пенсионер')
//     } else alert('введите число из диапазона')
// }

// showAge();

// task 2
// function getSymbol(symbol, mas) {
//     mas.forEach(el => {
//         if (symbol == el[0]) alert(el[1]);
//     })
// }
// getSymbol(prompt('введите цифру'), [
//     [1, '!'],
//     [2, '@'],
//     [3, '#'],
//     [4, '$'],
//     [5, '%'],
//     [6, '^'],
//     [7, '&'],
//     [8, '*'],
//     [9, '('],
//     [0, ')']
// ]);

// task 4
// function getYear(year) {
//     if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) return 'высокосный'
//     else return 'не высокосный'
// }
// alert(getYear(prompt('введите год')));

// task 5
// function showPalindrom(str) {
//     let str2 = str.split('').reverse().join('');
//     return str == str2 ? true : false;
// }
// alert(showPalindrom(prompt('введите слово')));

// task 6
// function showCurrency() {
//     let options = document.querySelectorAll('.s-6 option');
//     let input = document.querySelector('.i-6').value;

//     for (let i = 0; i < options.length; i++) {
//         if (options[i].selected) {
//             let value = options[i].dataset.id;
//             let res = Math.floor(value * input);
//             return res + options[i].value;
//         }
//     }
// }

// document.querySelector('.btn-6').onclick = function () {
//     document.querySelector('.out-6').innerHTML = showCurrency();
// }

// task 7
// function getSum(sale) {

//     if (sale >= 200) {
//         let discount = sale * 0.03;
//         return discount.toFixed(2);

//     } else if (sale >= 300) {
//         let discount = sale * 0.05;
//         return discount.toFixed(2);
//     }
//     else if (sale >= 500) {
//         let discount = sale * 0.07;
//         return discount.toFixed(2);
//     } else {
//         return 'Введите сумму из списка'
//     }
// }

// const sum = getSum(prompt('Введите сумму покупки'));
// alert(`Ваша скидка ${sum} UAH`);

// task 8
// function getCircleLength(side, circle) {
//     let square = side * 4;
//     alert('все стороны квадрата = ' + square);
//     alert('окружность круга = ' + circle);
//     return side / 2 >= circle ? true : false
// }
// alert(getCircleLength(+prompt('введите сторону квадрата'), +prompt('введите длину окружности')));

// task 9
// document.querySelector('.btn-9').onclick = innitQuestions;
// function innitQuestions() {
//     document.querySelectorAll('.o1').forEach(el => {
//         if (el.selected) {
//             if (el.dataset.a) {
//                 res = +el.dataset.a
//             }
//             if (el.dataset.b) {
//                 res2 = +el.dataset.b;
//             }
//             if (el.dataset.c) {
//                 res3 = +el.dataset.c;
//             }
//         }
//     })

//     document.querySelector('.out-9').innerHTML = ` Вы набрали  ${res + res2 + res3} очков `;
// }

// task 10
// let day = + prompt('введите день');
// let mounth = +prompt('введите месяц');
// let year = + prompt('введите год');

// let data = [
//     [1, 'January '],
//     [2, 'February'],
//     [3, 'March '],
//     [4, 'April'],
//     [5, 'May'],
//     [6, 'June'],
//     [7, 'July'],
//     [8, 'Augost'],
//     [9, 'September'],
//     [10, 'October'],
//     [11, 'November'],
//     [12, 'December']


// ]


// for (let i = 0; i < data.length; i++) {

//     if (data[i][0] == mounth) {
//         mounth = data[i][1];
//     }


// }

// if (day > 31) {
//     day = 1;
//     data[0][1] = data[0][1]++
// }

// console.log(day, mounth, year, day + 1, mounth, year)