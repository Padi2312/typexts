declare global {
    interface Array<T> {
        /** Returns the reversed items of `this` */
        reverse(): Array<T>
    }
}

Array.prototype.reverse = function () {
    let reversed = []
    for (let index = this.length - 1; index >= 0; index--) {
        reversed.push(this[index])
    }
    return reversed
}

export { }