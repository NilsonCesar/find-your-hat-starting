const prompt = require('prompt-sync')({sigint: true});

const hat = "^";
const hole = "O";
const fieldCharacter = "░";
const pathCharacter = "*";

const constructField = () => {
    let lines = 0;
    let columns = 0;

    do {
        lines = Number(prompt("How much lines the field must have? between 2-7\n> "));
    } while(lines < 2 || lines > 7);
    
    do {
        columns = Number(prompt("How much columns the field must have? Between 2-10\n> "));
    } while(columns < 2 || columns > 10);

    let field = [];
    let holes = 0;
    let holesMax = (columns * lines) / 4;

    for(let i = 0; i < lines; i++) {
        for(let j = 0; j < columns; j++) {
        option = Math.ceil(Math.random() * 2);
        if(option === 1 && holes <= holesMax) {
            field.push(hole);
            holes++;
        } else {
            field.push(fieldCharacter);
        }
        }
    }

    positionHat = 1;

    do {
        positionHat = Math.floor(Math.random() * (columns * lines));
    } while(positionHat === 0 || positionHat >= columns * lines - 1);

    field[positionHat] = hat;
    field[0] = pathCharacter;
    return new Field(field, columns, lines, 0);
}
  
class Field {
    constructor(field, lines, columns, pathPosition) {
    this.field = field;
    this.lines = lines;
    this.columns = columns;
    this.pathPosition = pathPosition;
    };

    formatedField = function () {
    let fieldString = this.field.join('');
    let begin = 0;
    let end = this.columns;
    for(let i = 0; i < this.lines; i++) {
        console.log(fieldString.slice(begin, end));
        begin = end;
        end += this.columns;
    }
    };

    changePosition = function (mov) {
    let typeMov = '';

    if(mov == "U") {
        const position = this.pathPosition - this.columns;

        if(position < 0) {
        console.log("Invalid move!")
        typeMov = "Wall";
        } else if(this.field[position] === hole) {
        console.log("Owww no! You fall in a hole!");
        typeMov = "Lose";
        } else if(this.field[position] === hat) {
        console.log("Congratulations! You find the hat!");
        typeMov = "Win";
        } else {
        this.field[this.pathPosition] = fieldCharacter;
        this.field[position] = pathCharacter;
        this.pathPosition = position;
        typeMov = "NormalMov";
        }
    }

    if(mov == "R") {
        const position = this.pathPosition + 1;

        if(position >= this.lines * this.columns) {
        console.log("Invalid move!")
        typeMov = "Wall";
        } else if(this.field[position] === hole) {
        console.log("Owww no! You fall in a hole!");
        typeMov = "Lose";
        } else if(this.field[position] === hat) {
        console.log("Congratulations! You find the hat!");
        typeMov = "Win";
        } else {
        this.field[this.pathPosition] = fieldCharacter;
        this.field[position] = pathCharacter;
        this.pathPosition = position;
        typeMov = "NormalMov";
        }
    }

    if(mov == "B") {
        const position = this.pathPosition + this.columns;

        if(position >= this.lines * this.columns ) {
        console.log("Invalid move!")
        typeMov = "Wall";
        } else if(this.field[position] === hole) {
        console.log("Owww no! You fall in a hole!");
        typeMov = "Lose";
        } else if(this.field[position] === hat) {
        console.log("Congratulations! You find the hat!");
        typeMov = "Win";
        } else {
        this.field[this.pathPosition] = fieldCharacter;
        this.field[position] = pathCharacter;
        this.pathPosition = position;
        typeMov = "NormalMov";
        }
    }

    if(mov == "L") {
        const position = this.pathPosition - 1;

        if(position < 0) {
        console.log("Invalid move!")
        typeMov = "Wall";
        } else if(this.field[position] === hole) {
        console.log("Owww no! You fall in a hole!");
        typeMov = "Lose";
        } else if(this.field[position] === hat) {
        console.log("Congratulations! You find the hat!");
        typeMov = "Win";
        } else {
        this.field[this.pathPosition] = fieldCharacter;
        this.field[position] = pathCharacter;
        this.pathPosition = position;
        typeMov = "NormalMov";
        }
    }

    this.formatedField();
    return typeMov;
    };
};  

module.exports.constructField = constructField;