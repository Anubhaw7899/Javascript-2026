// Spread: one array becomes separate values
const values = [1, 2, 3];
console.log(...values); // 1 2 3

// Rest: separate values become one array
function show(...values) {
  console.log(values);
}

show(1, 2, 3); // [1, 2, 3]