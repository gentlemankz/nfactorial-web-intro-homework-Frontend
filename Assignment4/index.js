

// 1. Переписать фукнцию ? и ||

/* 
function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      return confirm('Родители разрешили?');
    }
  }
*/

  function checkAge(age) {
    return age > 18 ? true : confirm('Родители разрешили?');
  }

  function checkAge(age) {
    return age > 18 || confirm('Родители разрешили?');
  }
  
/* 2. Напишите функцию pow(x,n), которая возвращает x в степени n. 
Иначе говоря, умножает x на себя n раз и возвращает результат.

pow(3, 2) = 3*3 = 9
pow(3, 3) = 3*3*3 = 27
pow(1, 100) = 1*1 * ...* 1 = 1
*/

function pow(x, n) {
    return Math.pow(x, n);
  }
  console.log(pow(3, 2));
  console.log(pow(3, 3));  
  console.log(pow(1, 100)); 

/* ### [**Перепишите с использованием функции-стрелки**]
(https://learn.javascript.ru/arrow-functions-basics#perepishite-s-ispolzovaniem-funktsii-strelki)
Замените код Function Expression стрелочной функцией:

function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Вы согласны?",
  function() { alert("Вы согласились."); },
  function() { alert("Вы отменили выполнение."); }
);
*/

//тут кар раз тернарный оператор юзнул как в задаче выше

const ask = (question, yes, no) => confirm(question) ? yes() : no();

ask(
  "Вы согласны?",
  () => alert("Вы согласились."),
  () => alert("Вы отменили выполнение.")
);

//Сортировать в порядке по убыванию

let arr = [5, 2, 1, -10, 8];

arr.sort((a, b) => b - a);

alert( arr ); // 8, 5, 2, 1, -10 

/* ### Т[**рансформировать в массив имён**]
(https://learn.javascript.ru/array-methods#transformirovat-v-massiv-imyon)

У вас есть массив объектов `user`, и в каждом из них есть `user.name`. 
Напишите код, который преобразует их в массив имён.
*/

//Данную задачу нужно будет из комментария вытащить потому что снизу идентичный код 
/*
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [vasya, petya, masha];

let names = users.map(user => user.name);

alert(names); // Вася, Петя, Маша
*/

/* 
### [**Трансформировать в объекты**](https://learn.javascript.ru/array-methods#transformirovat-v-obekty)
У вас есть массив объектов `user`, и у каждого из объектов есть `name`, `surname` и `id`.
Напишите код, который создаст ещё один массив объектов с параметрами 
`id` и `fullName`, где `fullName` – состоит из `name` и `surname`.
*/

let vasya2 = { name: "Вася", surname: "Пупкин", id: 1 };
let petya2 = { name: "Петя", surname: "Иванов", id: 2 };
let masha2 = { name: "Маша", surname: "Петрова", id: 3 };

let users = [vasya2, petya2, masha2];

let usersMapped = users.map(user => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id
}));

// Выводим результат
alert(usersMapped[0].id); // 1
alert(usersMapped[0].fullName); // Вася Пупкин

/*
### [**Получить средний возраст**](https://learn.javascript.ru/array-methods#poluchit-sredniy-vozrast)

Напишите функцию `getAverageAge(users)`, которая принимает массив 
объектов со свойством `age`и возвращает средний возраст.
Формула вычисления среднего арифметического значения: `(age1 + age2 + ... + ageN) / N`.
*/

let vasya3 = { name: "Вася", age3: 25 };
let petya3 = { name: "Петя", age3: 30 };
let masha3 = { name: "Маша", age3: 29 };

let arr3 = [vasya3, petya3, masha3];

function getAverageAge3(users) {
  let totalAge3 = 0;
  
  for (let i = 0; i < users.length; i++) {
    totalAge3 += users[i].age3;
  }
  
  return totalAge3 / users.length;
}

alert(getAverageAge3(arr3)); // (25 + 30 + 29) / 3 = 28


    
