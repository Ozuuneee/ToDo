let a = 10,
  b = 5,
  c = 30,
  d = 22;

let first, second;

if (a > b && a > c && a > d) {
  first = a;
  if (b > c && b > d) {
    second = b;
  } else if (c > b && c > d) {
    second = c;
  } else {
    second = d;
  }
} else if (b > a && b > c && b > d) {
  first = b;
  if (a > c && a > d) {
    second = a;
  } else if (c > a && c > d) {
    second = c;
  } else {
    second = d;
  }
} else if (c > a && c > b && c > d) {
  first = c;
  if (a > b && a > d) {
    second = a;
  } else if (b > a && b > d) {
    second = b;
  } else {
    second = d;
  }
} else {
  first = d;
  if (a > b && a > c) {
    second = a;
  } else if (b > a && b > c) {
    second = b;
  } else {
    second = c;
  }
}

console.log(second);
