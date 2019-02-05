var count = 1
let stdin = process.openStdin()

stdin.addListener("data", (d) => {
        let answer = Math.floor(Math.random() * 5);
        if (answer == d) {
            console.log('BIGO');
            stdin.destroy();
        }
        else {
            console.log('WRONG');
        }
        if (count == 5) {
            stdin.destroy();
        }
        count++;  
});
