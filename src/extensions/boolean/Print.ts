declare global {
    interface Boolean {
        /** Prints the current value */
        print(): void
    }
}

Boolean.prototype.print = function () {
    console.log(this.toString())
}

export { }