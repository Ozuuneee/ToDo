const a = 92;
if (a >= 0 && a <= 59) {
  console.log(a, "Your grade is F.");
} else if (a >= 60 && a <= 69) {
  console.log(a, "Your grade is D.");
} else if (a >= 70 && a <= 79) {
  console.log(a, "Your grade is C.");
} else if (a >= 80 && a <= 89) {
  console.log(a, "Your grade is B.");
} else if (a <= 100) {
  console.log(a, "Your grade is A.");
}
