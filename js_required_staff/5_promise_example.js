const promise = new Promise(function (resolve, reject) {
    resolve(1);
});

promise
    .then((val) => {
        console.log("First: " + val);
        return val + 5;
    })
    .then((val) => {
        console.log("Second: " + val);
        return val * 3;
    })
    .then(function (prevPromiseRes) {
        console.log("Third: " + prevPromiseRes);
    })
    .then((res) => {
        console.log("Last: " + res);
    });

console.log("All promised are done.");