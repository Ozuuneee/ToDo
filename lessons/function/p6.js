let Volume;
function calculateVolume(width, height, depth) {
  Volume = width * height * depth;
  return Volume;
}
Volume = calculateVolume(10, 20, 30);
console.log("Volume:", Volume);
