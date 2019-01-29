var mul = require('./multiply');
var avgG = require('./avg');
var tmps = require('./tmp');
var speedC = require('./speedCar')
var Acircle = require('./circle')

let stdin = process.openStdin()
let i=1, a, b
stdin.addListener("data", (d) => {
    if(i===1){
        a = d
        mul.muls(a);
        stdin.destroy();
    }
    i++
});

// avgG.avgGrade(80);
// tmps.getKelvin(300);
// speedC.sCar(110,2);
// Acircle.areaC(4);

// console.log("hello")
