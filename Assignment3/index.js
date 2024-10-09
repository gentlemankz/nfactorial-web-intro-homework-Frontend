let user = {};

user.name = prompt("Ваше имя?"); 
user.age = prompt("Ваш возраст?"); 
user.gender = prompt("Вы мужчина или женщина?"); 
console.log(user);

/*
user.isMale = confirm("Вы мужчина? (OK - да, Отмена - нет)");

через confirm можно также сделать
*/

//Работа с операторами
let number = prompt("Введите ваше число:");

if (number === null || number === "") {
    alert("Вы еще не ввели ваше число");
} else {
    number = Number(number);
    if (isNaN(number)) {
        alert("Это не число");
    } else if (number > 0) {
        alert(`Ваша число ${number} положительное`);
    } else if (number < 0) {
        alert(`Ваша число ${number} отрицательное`);
    } else {
        alert("Вы ввели ноль");
    }
}
/*
Второй метод
let number = prompt("Введите ваше число:"); 
number = Number(number); 
if (number > 0) {
  alert(`${number} положительное`);
} else if (number < 0) {
  alert(`${number} отрицательное`);
} else if (number === 0) {
  alert(`${number} является нулем`);
} else {
  alert("Это не число.");
}
*/

//Переписать на switch 

let a = +prompt('a?', '');

switch (a) {
  case 0:
    alert(0);
    break;

  case 1:
    alert(1);
    break;

  case 2:
  case 3:
    alert('2,3');
    break;

  default:
    alert('Не правильный a');
}

// for, while,

let sum = 0;
for (let i = 2; i <= 100; i += 2) {
    sum += i;
}
console.log(`Сумма четных чисел от 1 до 100: ${sum}`);


for (let i = 0; i < 3; i++) {
    alert(`number ${i}!`);
  }

  
let i = 0;

while (i < 3) {
  alert(`number ${i}!`);
  i++;
}


