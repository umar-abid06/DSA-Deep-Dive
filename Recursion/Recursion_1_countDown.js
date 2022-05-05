// function countDown(num) {
//     for (let u = num; u >= 0; u--) {
//         console.log(u)
//     }
// }

//base case (which tells to stop)
//make sure to call the function with different arguments

function countDown(num) {
  if (num <= 0) {
    console.log("All done");
    return;
  }
  console.log(num);
  num--;
  countDown(num);
}

countDown(5);
