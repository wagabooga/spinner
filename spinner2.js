// setTimeout(() => {
//   process.stdout.write('\r|   ');
// },200)

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 500)

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 700 )

// setTimeout(() => {
//   process.stdout.write('\r\\   ');
// }, 900)


function continueSpin() {
  let state = 1;

  setInterval(() => {
    if (state === 1) {
      process.stdout.write('\r|   ');
      state++;
    } else if (state === 2) {
      process.stdout.write('\r/   ');
      state++;
    } else if (state === 3) {
      process.stdout.write('\r-   ');
      state++;
    } else if (state === 4) {
      process.stdout.write('\r\\   ');
      process.stdout.write('\x07');
      state = 1;
    }
  }, 400);
}
continueSpin();