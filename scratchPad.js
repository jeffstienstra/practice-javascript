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

const editedUniformPieces = [];

// create individual key/value objects using company name and item
uniformPieces.map((uniformPiece) => {
  const name = uniformPiece.split("_")[0];
  const piece = uniformPiece.split("_")[1];
  let order = {
    [`${name}`]: [piece],
  };
  editedUniformPieces.push(order);
});

console.log("Step 1: create array of individual objects", editedUniformPieces);
// combine array of hashes so each company appears once with an array of items
const merged = editedUniformPieces.reduce((accum, obj) => {
  for (key in obj) {
    accum[key] = accum[key] ? [...accum[key], obj[key]] : obj[key];
  }
  return accum;
}, {});

console.log("Step 2: merge objects into single key/value pair for each company with array of items", merged);
console.log(merged["AstroCorp"]);

// ===== COMING BACK TO THIS LATER =====

// check to see if each company has all required items ready
// for (i = 0; i < merged.length; i++) {
//   if (merged[i].shirt && merged[i].pant && merged[i].shoe && merged[i].belt) {
//     console.log(`customer ${merged[i.key]}'s order is ready.`);
//   } else {
//     console.log("no orders are ready");
//   }
// }
