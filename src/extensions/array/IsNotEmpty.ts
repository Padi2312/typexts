declare global {
    interface Array<T> {
        /** Checks if `this` is NOT empty */
        isNotEmpty(): boolean
    }
}

Array.prototype.isNotEmpty = function () {
    return this.length !== 0
}

export { }