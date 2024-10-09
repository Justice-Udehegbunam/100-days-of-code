// i am not feeling to well so i couldnt code today

console.log("get well soon");

function withTimeout(promise, time) {
  return new Promise((resolve, reject) => {
    promise.then(resolve, reject);
    setTimeout(() => reject("Timed out"), time);
  });
}

//  THE EVENT LOOP
//  Asyynchronous behaviour happens on its own empty call stack
