sum = 0;
for (let i = 0; i < process.argv.length; i++) {
  const element = process.argv[i];
  if (i === 0 || i === 1) {
  } else {
    sum += Number(element);
  }
}
console.log(sum);
