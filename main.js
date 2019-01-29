var mul = require('./multiply');
var avgG = require('./avg');
var tmps = require('./tmp');
var speedC = require('./speedCar')
var Acircle = require('./circle')
var Vcylinder = require('./cylinder')

let stdin = process.openStdin()
let i=1, a, b
stdin.addListener("data", (d) => {
    if(i===1){
        a = d
        
    }
    else if(i==2){
        b = d
        Vcylinder.Cylinder(a,b)
        stdin.destroy();
    }
    i++
});

// mul.muls(a);
// avgG.avgGrade(80);
// tmps.getKelvin(300);
// speedC.sCar(110,2);
// Acircle.areaC(4);

// console.log("hello")
