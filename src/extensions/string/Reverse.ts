declare global {
    interface String  {
        reverse(): string
    }
}

String.prototype.reverse = function () {
    let reversed: string = ""
    for (let index = this.length - 1; index >= 0; index--) {
        reversed += this[index]
    }
    return reversed}

export { }