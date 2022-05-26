declare global {
    interface Number {
        /** Returns true if `this` is **under** zero */
        isNegative(): boolean
    }
}

Number.prototype.isNegative = function () {
    return this < 0
}

export { }