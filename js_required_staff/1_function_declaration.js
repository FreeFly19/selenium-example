function sum(a, b) {
    return a + b;
}

const multiply = function (p1, p2) {
    return p1 * p2;
};

console.log(sum(1,2));
console.log(multiply(1,2));


// Red Dragon level
const compose = (f1, f2) => (a, b) => f1(f2(a, b), 1);

const multiplyPlusOne = compose(sum, multiply);

const res = multiplyPlusOne(2,3);


function compose(f1, f2) {
    return function (a, b) {
        return f1(f2(a,b), 1)
    };
}







