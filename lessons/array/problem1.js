// let favoriteColors = ["green", "blue", "black", "white", "red"];
// favoriteColors[2] = "purple";
// console.log(favoriteColors);

// let levelsCompleted = [false, true, false, true];
// levelsCompleted.push(true);
// console.log(levelsCompleted);

// let destinations = ["Tokyo", "Paris", "London", "Moscow", "Madrid"];
// destinations.shift();
// console.log(destinations);
// destinations.unshift() = "New York";
// console.log(destinations);

// let ages = [18, 21, 22, 20, 23, 36, 79];
// for (let i = 0; i < ages.length; i++) {
//   ages[i] += 5;
// }
// console.log(ages);

let numbers = [1, 5, 6, 23, 12, 45, 23, 55, 32, 46, 25, 14, 6, 4, 9];

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

let max = numbers[0];
for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i];
  }
}

let min = numbers[0];
for (i = 1; i < numbers.length; i++) {
  if (numbers[i] < min) {
    min = numbers[i];
  }
}

let evenNum = 0;
let oddNum = 0;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    evenNum++;
  } else {
    oddNum++;
  }
}
numbers.unshift(15);
numbers.push(23);

console.log("Тоонууд:", numbers);
console.log("Нийлбэр:", sum);
console.log("Хамгийн их тоо:", max);
console.log("Хамгийн бага тоо:", min);
console.log("Тэгш тоо:", evenNum);
console.log("Сондгой тоо:", oddNum);
