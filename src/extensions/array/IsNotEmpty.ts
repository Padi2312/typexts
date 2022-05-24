declare global {
    interface Array<T> {
        isNotEmpty(): boolean
    }
}

Array.prototype.isNotEmpty = function () {
    return this.length !== 0
}

export { }