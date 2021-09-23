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
// const checkSets = uniformPieces.reduce((acc, cur) => {
//   let customerName = cur.split("_")[0];
//   let piece = cur.split("_")[1];

// const orders = []
// const order =
//   {
//     name: null,
//     pieces: null, // array of all pieces for that customerName
//   },

//   if (acc[customerName]) {
//     acc[customerName]++;
//   } else {
//     acc[customerName] = 1;
//   }
//   return acc;
// }, {});

// console.log(checkSets);

// console.log(uniformPieces.sort());

// var orders = [];
// var companyList = [];
// function checkSets(uniformSet, uniformPieces) {
//   let companies = uniformPieces.reduce((acc, cur) => {

//     // let acc = {
//     //   name: companyName,
//     //   piece: [piece],
//     // };

//     // acc.push(order);
//     // acc.map((order) => {
//     // console.log((acc = companyName));
//     if (acc[companyName]) {
//       acc[companyName]++;
//     } else {
//       acc[companyName] = 1;
//     }
//   }, {});

//   return acc;
// }

// if (order[name]) {
//   order.piece.push(piece);
// } else {
//   order.name = companyName;
//   order.piece.push(piece);
// }

// console.log(orders);

// const charactersByEyeColor = characters.reduce((acc, cur) => {
//   const color = cur.eye_color;
//   if (acc[color]) {
//     acc[color]++;
//   } else {
//     acc[color] = 1;
//   }
//   return acc;
// }, {});
