declare global {
    interface String {
        isNotEmpty(): boolean
    }
}

String.prototype.isNotEmpty = function () {
    return this.length !== 0
}

export { }