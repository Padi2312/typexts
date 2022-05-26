declare global {
    interface Number {
        /** Returns true if `this` is **above** zero */
        isPositive(): boolean
    }
}

Number.prototype.isPositive = function () {
    return this > 0
}

export { }