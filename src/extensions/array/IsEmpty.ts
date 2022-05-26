declare global {
    interface Array<T> {
        /** Checks if `this` is empty */
        isEmpty(): boolean

    }
}

Array.prototype.isEmpty = function () {
    return this.length === 0
}


export { }