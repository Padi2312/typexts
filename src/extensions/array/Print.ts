declare global {
    interface Array<T> {
        print(): void
    }
}

Array.prototype.print = function () {
    console.log(this)
}

export { }