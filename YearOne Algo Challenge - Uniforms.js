var uniformSet = ["shoe", "shirt", "belt", "pant"];
var uniformPieces = [
  "AstroCorp_shoe",
  "BetaCorp_hat",
  "CaliCorp_pant",
  "AstroCorp_shirt",
  "DeltaCorp_pant",
  "BetaCorp_shirt",
  "AstroCorp_belt",
  "DeltaCorp_shoe",
  "BetaCorp_belt",
  "BetaCorp_shoe",
  "CaliCorp_shirt",
  "CaliCorp_shoe",
  "AstroCorp_hat",
  "CaliCorp_belt",
  "CaliCorp_jacket",
  "DeltaCorp_belt",
  "DeltaCorp_pant",
  "AstroCorp_pant",
  "DeltaCorp_lanyard",
  "DeltaCorp_shirt",
];

// class order {
//   constructor(name, pieces) {
//     this.name = name;
//     this.pieces = pieces;
//   }
// }

var order = {
  name: uniformPieces.sort()[0].split("_")[0],
  pieces: [uniformPieces.sort()[0].split("_")[1]],
};
var orders = [
  // {
  //   name: company,
  //   pieces: ["thing1", "thing2",...],
  // }
];
console.log(uniformPieces.sort());

for (i = 1; i < uniformPieces.length; i++) {
  let name = uniformPieces.sort()[i].split("_")[0];
  let piece = uniformPieces.sort()[i].split("_")[1];
  let prevName = uniformPieces.sort()[i - 1].split("_")[0];

  if (name == prevName) {
    order.pieces.push(piece);
    console.log("===BUILDING ORDER===", order);
  } else if (name !== prevName) {
    console.log("===COMPLETED ORDER===", order);
    orders.push(order);
    console.log(orders);
    order.name = name;
    order.pieces = [];
    order.pieces.push(piece);
  }
  console.log(i);
  console.log("======ORDERS=====", orders);

  if (i == uniformPieces.length - 1) {
    orders.push(order);
    console.log("===i COMPLETED ORDER FINAL===", order);
  }
}

console.log("==========ORDERS===========", orders);
