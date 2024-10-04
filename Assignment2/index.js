//Собственный магазин

const storeName = "Nstyle";

let founder = "Shynggys";
let clothesNumber = 1000;
let theFirstBranch = false;
let discount = null;
let kidsClothes;

let store = {
  founder: founder,
  clothesNumber: clothesNumber,
  theFirstBranch: theFirstBranch,
  discount: discount,
  kidsClothes,
};

//добавление
store.manager = "Asem";
console.log(`Our new manager is: ${store.manager}`);

// через двойные скобки: добавление
store["newShoes"] = ["Nike", "Adidas", "NewBalance"];
console.log(store.newShoes);

//удаление
delete store.newShoes;

// через двойные скобки: добавление
delete store["theFirstBranch"];
console.log(store);

//Работа с объектами

let vehicle = {};

vehicle.brandName = "Mercedes";
vehicle["model"] = ["S class"];

vehicle["model"] = ["E class"];

delete vehicle["model"];

console.log(vehicle);

//Работа с перебором свойств в объектах

let salaries = {
  Aroo: 100,
  Dalida: 160,
  Samat: 130,
};

let fullSalary = 0;

for (const key in salaries) {
    fullSalary += salaries[key];
}

console.log(`Сумма зарплат: ${fullSalary}`);
