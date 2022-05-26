declare global {
    interface Number {
        /** console logs the value of `this` */
        print(): void
    }
}

Number.prototype.print = function () {
    console.log(this)
}

export { }