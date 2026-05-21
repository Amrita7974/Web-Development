function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data received");
        }, 2000);
    });
}

getData().then((data) => {
    console.log(data);
});

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("foo");
  }, 300);
});

myPromise
  .then(handleFulfilledA, handleRejectedA)
  .then(handleFulfilledB, handleRejectedB)
  .then(handleFulfilledC, handleRejectedC);

  function add(num) {
    return new Promise((resolve) => {
        resolve(num + 50);
    });
}

add(5)
    .then((result) => {
        console.log(result); 
        return result * 3;
    })
    .then((result) => {
        console.log(result); 
    })

