console.log("What is your name?");
        process.stdin.once('data', (chunk) => {
            let name = chunk.toString().trim();
            console.log("Hello, " + name + "!");
        });



