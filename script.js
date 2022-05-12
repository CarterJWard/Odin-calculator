const add = (n1, n2) => {
    return n1 + n2;
}

const subtract = (n1, n2) => {
    return n1 - n2;
}

const multiply = (n1, n2) => {
    return n1 * n2;
}

const divide = (n1, n2) => {
    if (n1 == 0 || n2 == 0) {
        return 0;
    }
    return n1 / n2;
}

const operate = (n1, n2, op) => {
    switch (op) {
        case add: add(n1, n2);
        case sub: subtract(n1, n2);
        case multi: multiply(n1, n2);
        case divide: divide(n1, n2);
        default: return 0;
    }
}