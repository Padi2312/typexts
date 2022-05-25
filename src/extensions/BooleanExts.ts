declare global {
    interface Boolean {
        /** Prints the current value */
        print(): void
        /** First parameter is the callback if `this` is truthy second for `this`is falsy*/
        on(onTrue?: (() => void) | null | undefined, onFalse?: () => void): void
        /** Callback getting executed if `this`is truthy */
        onTrue(cb: () => void): void
        /** Callback getting executed if `this`is falsy */
        onFalse(cb: () => void): void
    }
}

Boolean.prototype.print = function () {
    console.log(this.toString())
}

Boolean.prototype.on = function (onTrue?: (() => void) | null | undefined, onFalse?: () => void) {
    if (this === true) {
        if (onTrue)
            onTrue()
    }
    else {
        if (onFalse)
            onFalse()
    }
}

Boolean.prototype.onTrue = function (callback: () => void) {
    if (this === true) {
        callback()
    }
}


Boolean.prototype.onFalse = function (callback: () => void) {
    if (this === false) {
        callback()
    }
}

export { }