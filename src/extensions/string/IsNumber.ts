declare global {
    interface String {
        isNumber(): boolean
    }
}

String.prototype.isNumber = function () {
    return !isNaN(Number(this))
}

export { }