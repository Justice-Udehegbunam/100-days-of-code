// RETRY

class MultiplicatorUnitFailure extends Error {}

const primitiveMultiply = (a, b) => {
  let randomCase = Math.random();
  if (randomCase < 0.2) {
    return a * b;
  } else {
    throw new MultiplicatorUnitFailure("An error occurred");
  }
};

const reliableMultiply = (a, b) => {
  for (;;) {
    try {
      return primitiveMultiply(a, b);
    } catch (error) {
      if (error instanceof MultiplicatorUnitFailure) {
        console.log("Retrying...");
      } else {
        throw error;
      }
    }
  }
};

console.log(reliableMultiply(10, 12));
