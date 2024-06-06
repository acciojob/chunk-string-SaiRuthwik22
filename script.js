function stringChop(str, size) {
  if (!str) {
    return [];
  }
  
  let x = 0;
  let y = size;
  let arr = [];
  
  while (true) {
    if (y < str.length) {
      arr.push(str.slice(x, y));
      x += size;
      y += size;
    } else {
      arr.push(str.slice(x, y));
      break;
    }
  }
  
  return arr;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
