const { constructField } = require('./field');
const { makeMove, verifyMove } = require('./movements');

let gameOn = true; 

const myField = constructField();
myField.formatedField();

while(gameOn) {
  let mov = makeMove();
  let typeMov = myField.changePosition(mov);
  gameOn = verifyMove(typeMov);
};