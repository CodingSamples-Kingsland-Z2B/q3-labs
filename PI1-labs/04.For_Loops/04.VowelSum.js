function main(n, letters) {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    let char = letters.shift();

    switch (char) {
      case "a":
        sum += 1;
        break;
      case "e":
        sum += 2;
        break;
      case "i":
        sum += 3;
        break;
      case "o":
        sum += 4;
        break;
      case "u":
        sum += 5;
        break;
      default:
        break;
    }
  }

  console.log(sum);
}

main(3, ["i", "x", "u"]);
