declare global {
    interface String {
        print(): void
    }
}

String.prototype.print = function () {
    console.log(this)
}

export { }