let stdin = process.openStdin()
stdin.addListener("data", (d) => {
 var s2 = d.toString().trim().toLowerCase()
    var s1 = ""

    for (var i = s2.length - 1; i >= 0; i--) {
        s1 += s2[i]
    }

    if (s1 == s2) {
        console.log("Yes Palindrome");
    }
    else {
        console.log("No Palindrome");
    }
 stdin.destroy()
});


// console.log("What is your name?");
// process.stdin.once('data', (chunk) => {
//     let name = chunk.toString().trim();
    

//     var s2 = name
//     var s1 = ""

//     for (var i = s2.length - 1; i >= 0; i--) {
//         s1 += s2[i]
//     }

//     if (s1 == s2) {
//         console.log("Yes Palindrome");
//     }
//     else {
//         console.log("No Palindrome");
//     }

//     process.exit();
// });

// -------------------------------------------------------------------------

// var str = "adxd"
// var str2 = ""

// for(var i = str.length-1,j = 0    ; i >= 0  ;i--, j++){

//        str2 = str2 + str[i]

// }
//             // console.log(str);
//             // console.log(str2);

// if(str == str2){
//   console.log("yes , it is palindrome");
// }
// else{
//   console.log("no");
// }

// var str = 'axba'
// var status = true

// for(var i =0;i<str.length;i++){
//   if(str[i] == str[str.length-1-i]){
//     status = true;
//   }
//   else{
//     status = false;
//     break;
//   }
// }

// if(status == true ){
//   console.log("yes it palindrome")
// }
// else{
//   console.log("no")
// }