const prompt = require('prompt-sync')({sigint: true});

const makeMove = () => {
    let mov = "";

    do {
        console.log("Which movement do you wish realize?");
        console.log("Please, enter one of these characters:");
        console.log("U - Up | R - Rigth | B - Bottom | L - Left");
        mov = prompt("> ");
    } while(mov !== "U" && mov !== "R" && mov !== "B" && mov !== "L");
 
    return mov;
}

const verifyMove = (typeMov) => {
    if(typeMov === "Lose") {
        console.log("You Lose");
        return false;
    } else if(typeMov === "Win") {
        console.log("You win!");
        return false;
    }

    return true;
}

module.exports.makeMove = makeMove;
module.exports.verifyMove = verifyMove;