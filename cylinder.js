module.exports.Cylinder = (r,h)=>{
    var volumeCylindrical = 0
    var volumeCone = 0
    volumeCylindrical = (3.14)*(r*r)*h
    volumeCone = (3.14*(r*r)*h)/3
    console.log("volumeCylindrical is "+volumeCylindrical);
    console.log("volumeCone is "+volumeCone);
    return volumeCylindrical
    
}