//  the promise param names are important
const doWorkPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // The order is really important as it can affect the state of what the promise will return first
    resolve([7, 4, 1]);
    //When resolve which is the first one the promise is essentially done and nothing else runs
    reject("Something went wrong");
  }, 2000);
});

doWorkPromise
  .then((res) => {
    console.log("success!", res);

    /* returns  $ node howPromisesWork.cjs
success! [ 7, 4, 1 ]
*/
  })
  .catch((err) => {
    console.log("Error: " + err);
  });
// the .then method allows us to get the value that comes through when a promise resolves successfully
