declare global {
    interface Object {
        print(): void
        printJson(): void
    }
}

Object.prototype.print = function () {
    console.log(this)
}

Object.prototype.printJson = function () {
    console.log(JSON.stringify(this))
}

export { }