declare global {
    interface String  {
        /** Checks if `this` is empty */
        isEmpty(): boolean
    }
}

String.prototype.isEmpty = function () {
    return this.length === 0
}

export { }