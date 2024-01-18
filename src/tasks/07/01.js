function curry(binaryFn, arg1) {
    return function (arg2) {
        return binaryFn(arg1, arg2);
    };
}

// Beispiel: Addition
function add(x, y) {
    return x + y;
}

const add3 = curry(add, 3);
console.log(add3(4)); // Ergebnis: 7

// Beispiel: Multiplikation
function mul(x, y) {
    return x * y;
}

const mul5 = curry(mul, 5);
console.log(mul5(6)); // Ergebnis: 30


// Aufgabe 4.1 - addf-Funktion
function addf(x) {
    return function (y) {
        return x + y;
    };
}

// Curry-Funktion
function curry(binaryFn, arg1) {
    return function (arg2) {
        return binaryFn(arg1, arg2);
    };
}

// inc durch Curry und addf erstellen
const inc = curry(addf, 1);

console.log(inc(5)); // Ergebnis: 6

function applyf(binaryFn) {
    return function (x) {
        return function (y) {
            return binaryFn(x, y);
        };
    };
}

// inc durch Curry und applyf erstellen
const inc = curry(applyf, add);

console.log(inc(5)); // Ergebnis: 6
function applyf(binaryFn) {
    return function (x) {
        return function (y) {
            return binaryFn(x, y);
        };
    };
}

function addf(x) {
    return function (y) {
        return x + y;
    };
}

// Curry-Funktion
function curry(binaryFn, arg1) {
    return function (arg2) {
        return binaryFn(arg1, arg2);
    };
}

// inc durch Kombination von curry, applyf und addf erstellen
const inc = curry(applyf, addf)(1);

console.log(inc(5)); // Ergebnis: 6

function demethodize(method) {
    return function (x, y) {
        return method.call(x, y);
    };
}

// Beispiel: demethodize für die add-Methode von Number.prototype
const add = demethodize(Number.prototype.add);

console.log(add(5, 6)); // Ergebnis: 11

function twice(binaryFn) {
    return function (x) {
        return binaryFn(x, x);
    };
}

// Beispiel: twice für die add-Funktion
const add = function (x, y) {
    return x + y;
};
const double = twice(add);

console.log(double(11)); // Ergebnis: 22

// Beispiel: twice für die mul-Funktion
const mul = function (x, y) {
    return x * y;
};
const square = twice(mul);

console.log(square(11)); // Ergebnis: 121

function composeu(fn1, fn2) {
    return function (x) {
        return fn2(fn1(x));
    };
}

// Beispiel: composeu für die Funktionen double und square
const double = function (x) {
    return x * 2;
};

const square = function (x) {
    return x * x;
};

const composedFunction = composeu(double, square);

console.log(composedFunction(3)); // Ergebnis: 36

function composeb(fn1, fn2) {
    return function (x, y, z) {
        return fn2(fn1(x, y), z);
    };
}

// Beispiel: composeb für die Funktionen add und mul
const add = function (x, y) {
    return x + y;
};

const mul = function (x, y) {
    return x * y;
};

const composedFunction = composeb(add, mul);

console.log(composedFunction(2, 3, 5)); // Ergebnis: 25

function once(fn) {
    let hasBeenCalled = false;
    let result;

    return function (...args) {
        if (!hasBeenCalled) {
            hasBeenCalled = true;
            result = fn(...args);
            return result;
        } else {
            throw new Error("Function can only be called once.");
        }
    };
}

// Beispiel: once für die Funktion add
const add = function (x, y) {
    return x + y;
};

const add_once = once(add);

console.log(add_once(3, 4)); // Ergebnis: 7
// console.log(add_once(3, 4)); // Würde einen Fehler auslösen

function counterf(initialValue) {
    let counter = initialValue;

    return {
        inc: function () {
            counter += 1;
            return counter;
        },
        dec: function () {
            counter -= 1;
            return counter;
        }
    };
}

// Beispiel: Verwendung von counterf
const counter = counterf(10);

console.log(counter.inc()); // Ergebnis: 11
console.log(counter.dec()); // Ergebnis: 10

function revocable(fn) {
    let isRevoked = false;

    return {
        invoke: function (...args) {
            if (!isRevoked) {
                return fn(...args);
            } else {
                throw new Error("Function has been revoked.");
            }
        },
        revoke: function () {
            isRevoked = true;
        }
    };
}

// Beispiel: Verwendung von revocable
const temp = revocable(alert);

temp.invoke(7); // führt zu alert(7);
temp.revoke();

// temp.invoke(8); // Würde einen Fehler auslösen, da die Funktion zurückgerufen wurde

function vector() {
    const privateArray = [];

    return {
        append: function (value) {
            privateArray.push(value);
        },
        store: function (index, value) {
            privateArray[index] = value;
        },
        get: function (index) {
            return privateArray[index];
        }
    };
}

// Beispiel: Verwendung des "Array Wrapper"-Objekts
const my_vector = vector();

my_vector.append(7);
my_vector.store(1, 8);

console.log(my_vector.get(0)); // Ergebnis: 7
console.log(my_vector.get(1)); // Ergebnis: 8
