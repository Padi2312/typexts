declare global {
    interface String {
        /** console logs the value of `this` */
        print(): void
    }
}

String.prototype.print = function () {
    console.log(this)
}

export { }