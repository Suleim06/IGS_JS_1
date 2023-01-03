let a, b, c, x, d, x1, x2;
a = prompt("Введите а");
b = prompt("Введите b");
c = prompt("Введите c");
console.log("a = " + a + "; b = " + b + "; c = " + c + ";");
a*x*x + b*x + c == 0;  //квадратное уравнение в корне
dis = b*b - 4*a*c; //формула нахождения дискриминанта
console.log("Дискриминант равен " + dis + ";");
if (dis > 0){
    x1 = (-b + Math.sqrt(dis)) / (2 * a);
    x2 = (-b - Math.sqrt(dis)) / (2 * a);
    console.log("Дискриминант > 0, два корня: ");
    console.log("x1 = " + x1 + ";" );
    console.log("x2 = " + x2 + ";" );
}
else if (dis == 0){
    x = -b / (2 * a);
    console.log("Дискриминант = 0, один корень: ");
    console.log("x = " + x + ";" );
}
else {
    console.log("Дискриминант < 0, нет кореней (есть, но об этом вы узнаете в университете) ");
}