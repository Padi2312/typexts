declare global {
    interface Number {
        /** Returns true if `this` equals zero */
        isZero(): boolean
    }
}

Number.prototype.isZero = function () {
    return this === 0
}

export { }