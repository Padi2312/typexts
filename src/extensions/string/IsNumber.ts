declare global {
    interface String {
        /** Checks if `this` string is a number */
        isNumber(): boolean
    }
}

String.prototype.isNumber = function () {
    return !isNaN(Number(this))
}

export { }