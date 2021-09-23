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


function continueSpin () {
  let offset = 200
  let state = 1

    setInterval(() => {
      if (state === 1){
        process.stdout.write('\r|   ');
        state++
      }
      else if(state === 2){
        process.stdout.write('\r/   ');
        state++
      }
      else if(state === 3){
        state++

        process.stdout.write('\r-   ');
      }
      else if(state === 4){
        process.stdout.write('\r\\   ');
        state = 1
      }
      }, offset)
    
    }