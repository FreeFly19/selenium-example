
timer(1500)
    .then(() => {
        console.log("Timer 1500 has been triggered!");
        return timer(1000);
    })
    .then(() => {
        console.log("Timer 1500 + 1000 has been triggered!");
        return timer(2000);
    })
    .then(() => {
        console.log("Timer 1500 + 1000 + 2000 has been triggered!");
    });

console.log(123);