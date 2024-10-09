# Asynchronous Programming

Is used mostly when tring to make network requests and/or when trying to fetch data from drive which is much slower than the main memory

## Ways to build Asyncrounous programs

- Using Callbacks

- Promises: A promise is a receipt representing a value that may not be available yet.
  It provides a then method that allows you to register a function that should be called when the action for which it is waiting finishes. When the promise is resolved, meaning its value becomes available, such functions (there can be multiple) are called with the result value. It is possible to call then on a promise that has already resolved—your function will still be called.

## Failures

A common convention is to use the first argument to the callback to indicate that the action failed, and the second to pass the value produced by the action when it was successful.

```js
someAsyncFunction((error, value) => {
  if (error) handleError(error);
  else processValue(value);
});
```

if any element in a chain of asynchronous actions fails, the outcome of the whole chain is marked as rejected, and no success handlers are called beyond the point where it failed.
