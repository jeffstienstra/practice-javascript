const orders = [
  { id: "1", status: "pending" },
  { id: "2", status: "pending" },
  { id: "3", status: "cancelled" },
  { id: "4", status: "shipped" },
  { id: "5", status: "returned" },
  { id: "6", status: "pending" },
];

// // count number of occurences for each 'status' type
// result = orders.reduce((acc, order) => {
//   return { ...acc, [order.status]: (acc[order.status] || 0) + 1 };
// }, {});

// console.log("\n", result, "\n");

// array = [1, 2, 3, 4, 5];
// newArray = array.slice(0, 3);
// console.log(newArray);
// array.splice(0, 1);
// console.log(array);

const orderStatus = orders.map((order) => {
  if (order.status =)
});
