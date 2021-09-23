
function continueSpin () {
  let offset = 200
  let state = 1
  // for (let i = 1; i >= 1; i++){
  //   let changedOffset = offset * i
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
    // }
    continueSpin()
    
        // setTimeout(() => {
        //   process.stdout.write('\r|   ');
        // }, offset*i)
        
        // setTimeout(() => {
        //   process.stdout.write('\r/   ');
        // }, offset*i)
        
        // setTimeout(() => {
        //   process.stdout.write('\r-   ');
        // }, offset*i)
        
        // setTimeout(() => {
        //   process.stdout.write('\r\\   ');
        // }, offset*i)