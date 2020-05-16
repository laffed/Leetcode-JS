/*
  A  B  C  D
1    S  S
2    S  S  S
3          S
4          S

  A  B  C  D
1    S  S  x
2    x  S  x
3          x
4          x

Strategy:

sunk = 0;
hit = 0;
ship object: Key = name of ship, Value = [initShip area, [points of ship...]]:

ship = {
  "1B 2C": [4, ["1B", "1C", "2B", "2C"]],
  "2D 4D": [3, ["2D", "3D", "4D"]]
}
Loop through T:
  removing T el from value arrays[1]
shipArr loop through 
if valArr[1].length === 0: 
  sunk += 1;
elif valArr[1].length < valArr[0]:
  hit += 1;
*/
const N = 4
const S = "1B 2C,2D 4D" 
const T = "2B 2D 3D 4D 4A"

function battleship(N, S, T) {
  let sunk = 0; 
  let hit = 0;
  const ship = {};
  const alpha = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split('');
  let ships = S.split(',');

  //create ship object
  for (let i = 0; i < ships.length; i++) {
    let currShip = ships[i].split(' ');
    ship[ships[i]] = [0, []]
    console.log(currShip)

    let L = currShip[0].split('');
    let R = currShip[1].split('');
    let alphaL = alpha.indexOf(L[1]) + 1;
    let alphaR = alpha.indexOf(R[1]) + 1;
    console.log("L: " + L, "R: " + R); 

    //is the ship is a line
    if (L[0] === R[0] || L[1] === R[1]) {
      //if the alpha chars are the same
      if (L[1] === R[1]) {
        for (let l = parseInt(L[0]); l <= parseInt(R[0]); l++) {
          ship[ships[i]][1].push(l + L[1]);
        }
      } else {
        //if the number chars are the same
        let startIndx = alpha.indexOf(L[1]);
        let endIndx = alpha.indexOf(R[1]);
        for (let l = startIndx; l <= endIndx; l++) {
          ship[ships[i]][1].push(L[0] + alpha[l]);
        }
      }
      //update the ships array init len count
      ship[ships[i]][0] = ship[ships[i]][1].length;
    } else {
      //ship is a rectangle

    }
  }
  console.log(ship);
}

console.log(battleship(4, S, T))
