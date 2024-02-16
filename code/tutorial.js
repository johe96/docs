
function start() {
    const readline =
    require('node:readline').createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    console.log("what do you want to do?\n");
    console.log("start the program? (Y/N)\n");
    
    readline.question(`what's your answer?\n`, answer => {
        console.log(`this is your reply ${answer}!`);
        readline.close();
    })
    
    return 0;
}

function main() {
    start();
    return 0;
}

main();