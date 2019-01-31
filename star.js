module.exports.starS = (number) => {
    // stdin =process.openStdin()
    // stdin.addListener("data",(d)=>{

    // })
    var num = ''
    var n = 0

    for(var i=0 ; i<number ; i++){
            num = num+'*'
            // console.log(i);
        console.log(num);   
    }
    console.log("ok");
    num = ''

    console.log("---------------------------------------");

    for(var i=0 ; i<number ; i++){

        for(var j = number-i ; j>0 ; j--){
            num = num+'*'
            // console.log(i);   
        }

        console.log(num);
        num = ''

    }
    console.log("ok");

    console.log("---------------------------------------");

    
    for(var i=0 ; i<number ; i++){

        for(var j = number-i ; j>0 ; j--){
            num = num+' '
            // console.log(i);

        }
        for(var k=0 ; k<=i ; k++){
            num = num + '*'
        }

        console.log(num);
        num = ''

    }
    console.log("ok");

    console.log("---------------------------------------");

    for (var i = 0; i < number; i++) {

        // console.log(i);
        if (n = 0) {
            for (var l = 0; l <= number; l++) {
                num = num + '+'
            }
        }
        else {
            for (var j = 0; j <= i; j++) {
                num = num + ' '
            }
            for (var k = number - 1; k >= i; k--) {
                num = num + '*'
            }
        }

        console.log(num);
        
        num = ''
        n++
    }
    console.log("ok");

    console.log("---------------------------------------");
}