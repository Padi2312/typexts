declare global {
    interface String  {
        /** Returns the reversed chars of `this` */
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