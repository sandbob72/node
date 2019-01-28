module.exports.muls = (num) =>{
   var sum = 0
   for(var i=1;i<12;i++){
       sum = num*i
       console.log(i+"*"+num+"="+sum)
   }
   return sum
}