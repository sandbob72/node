module.exports.getKelvin = (k) =>{
    var c = 0.00
    var f = 0.00

    c = k-273.15
    console.log("Kelvin"+" "+k+" "+"to degree Celsius"+" is "+c)
    
    f = k * 1.8 - 459.69
    console.log("Kelvin"+" "+k+" "+"Fahrenheit"+" is "+c)

    return c,f

}