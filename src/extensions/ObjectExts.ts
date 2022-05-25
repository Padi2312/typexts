declare global {
    interface Object {
        print(): void
        printAsJson(): void
    }
}

Object.prototype.print = function () {
    console.log(this)
}

Object.prototype.printAsJson = function () {
    console.log(JSON.stringify(this))
}

export { }