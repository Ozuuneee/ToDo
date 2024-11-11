a = 3;
b = 5;
c = 8;
if (c % a == 0 && c % b == 0) {
  console.log("This number can be divided by both number.");
} else if (c % a == 0) {
  console.log("This number can be divided by 3.");
} else if (c % b == 0) {
  console.log("This number can be divided by 5.");
} else {
  console.log("This number can't be divided by both number.");
}
