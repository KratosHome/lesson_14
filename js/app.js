// first task
cube = prompt("Число в кубе");
let namberCub = "Результат числа в куббе";
console.log(namberCub, cube * 4);
// Sekend Tak

// Имя клиента
nameUser = prompt("Ваше Ф.И.О?");
let nameUserPromt = "Ф.И.О";
console.log(nameUserPromt, nameUser);

// сумма депозита
depositАmount = prompt("Вы внесли");
let depositАmountPromt = "Вы внесли";
console.log(depositАmountPromt, depositАmount);

// Строк действия 
timeOfAction = prompt("На время (месяц)");
let timeOfActionPromt = "На время (месяц)";
console.log(timeOfActionPromt, timeOfAction);

// Сколько человек заработает за это время 20% годовых
/*
console.log(youveEarned, procetn / timeOfAction);
*/
let youveEarned = "Вы заработали";
let procetn15 = (((depositАmount / 12) / 100 * 15) * timeOfAction);
let procetn16 = (((depositАmount / 12) / 100 * 16) * timeOfAction);
let procetn17 = (((depositАmount / 12) / 100 * 17) * timeOfAction);

if (timeOfAction <= 1 >= 5) {
	console.log(youveEarned, procetn15)
} else if (timeOfAction <= 6 >= 8) {
	console.log(youveEarned, procetn16)
} else if (timeOfAction >= 9) {
	console.log(youveEarned, procetn17)
};


// Task thri 
let textABplus = "Плюс число А и В";
userNamberA = parseInt(prompt("Число А"));
userNamberB = parseInt(prompt("Число B"));
console.log(textABplus, userNamberA + userNamberB);
console.log(textABplus, userNamberA - userNamberB);
console.log(textABplus, userNamberA * userNamberB);
console.log(textABplus, userNamberA / userNamberB);

// sekend leson 
// task one

let a;
a = 3 < 12 ? console.log(true) : console.log(false);
let b;
b <= 5 > 13 ? console.log(true) : console.log(false);
// task two
let userAnser = "Возраст";
userAge = +prompt("Сколько вам лет?");
if (userAge <= 18 >= 45) {
	console.log(userAnser, "Подходит")
} else {
	console.log(userAnser, "Не подходит")
};

