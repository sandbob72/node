module.exports.getKelvin = (k) =>{
    var c = 0.00
    var f = 0.00
    var r = 0.00

    c = k-273.15
    console.log("Kelvin "+k+" to degree Celsius is "+c)
    
    f = k * 1.8 - 459.69
    console.log("Kelvin "+k+" to Fahrenheit is "+f)

    r = c * 0.8
    console.log("degree Celsius "+k+" to Réaumur is "+r)

    return c,f,r

}