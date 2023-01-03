let i;
console.log("Задание 1: ");
for (i = 0; i <= 100; i++) {
    if (i % 2 == 0){
        console.log(i);
    }
}

console.log("Задание 2: ");
for (i = 100; i > -1; i--) {
    console.log(i);
}

console.log("Задание 3: ");
let arr = ['a', 'b', 'c', 'd', 'e'];
arr.shift();
arr.pop();
console.log(arr);

console.log("Задание 4: ");
let mass = [2, 3, 12, 31, -2, 8, 15, 1, 9, 0]
let mass_chet = [];
let mass_nechet = [];
for (i = 0; i < mass.length; i++){
    if (mass[i] % 2 == 0 && mass[i] != 0){
        mass_chet.push(" " + mass[i]);
    }
    if (mass[i] % 2 == 1) {
        mass_nechet.push(" " + mass[i])
    }
}
console.log("Массив из четных чисел:" + mass_chet);
console.log("Массив из не четных чисел:" + mass_nechet);