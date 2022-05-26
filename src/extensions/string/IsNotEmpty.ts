declare global {
    interface String {
        /** Checks if `this` is NOT empty */
        isNotEmpty(): boolean
    }
}

String.prototype.isNotEmpty = function () {
    return this.length !== 0
}

export { }