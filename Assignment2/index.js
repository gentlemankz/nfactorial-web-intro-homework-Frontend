const storeName = "Nstyle";

const founder = "Shynggys";
const clothesNumber = 1000;
const theFirstBranch = false;
const discount = null;
let kidsClothes;

const store = { 
  founder, 
  clothesNumber, 
  theFirstBranch, 
  discount, 
  kidsClothes 
};

//добавление
store.manager = "Asem";
console.log(`Our new manager is: ${store.manager}`);

// через двойные скобки: добавление
store["newShoes"] = ["Nike", "Adidas", "NewBalance"];
console.log(store.newShoes);

//удаление
delete store.newShoes;

// через двойные скобки: удаление
delete store["theFirstBranch"];
console.log(store);

//Работа с объектами

const vehicle = {};

vehicle.brandName = "Mercedes";
vehicle["model"] = ["S class"];

vehicle["model"] = ["E class"];

delete vehicle["model"];

console.log(vehicle);

//Работа с перебором свойств в объектах

const salaries = {
  Aroo: 100,
  Dalida: 160,
  Samat: 130,
};

let fullSalary = 0;

for (const key in salaries) {
    fullSalary += salaries[key];
}

console.log(`Сумма зарплат: ${fullSalary}`);
