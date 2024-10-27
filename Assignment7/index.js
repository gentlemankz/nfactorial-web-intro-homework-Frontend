//1 

function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  
  delay(3000).then(() => alert('выполнилось через 3 секунды'));

  
// Вывод будет 1, нельзя промис перевыполнить 
let promise = new Promise(function(resolve, reject) {
    resolve(1);
  
    setTimeout(() => resolve(2), 1000);
  });
  
  promise.then(alert);

//promise.then(f1).catch(f2); против promise.then(f1, f2);

/*
let promise= new Promise((resolve, reject) => {
    reject("Ошибка в исходном промисе");
  });
  
  promise.then(
    (result) => console.log(result),    // f1
    (error) => console.log("Обработано f2:", error) // f2
  );

let promise = new Promise((resolve, reject) => {
  reject("Ошибка в исходном промисе");
});

promise
  .then((result) => console.log(result)) // f1
  .catch((error) => console.log("Обработано catch(f2):", error)); // f2


*/