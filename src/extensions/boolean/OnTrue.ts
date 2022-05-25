declare global {
    interface Boolean {
        /** Callback getting executed if `this`is truthy
         *
         * *Example:* 
         * ```typescript
         * const value = true
         *
         * value.onTrue(()=>{
         *     // callback on true
         * }) 
         * ``` 
         */
        onTrue(cb: () => void): void
    }
}

Boolean.prototype.onTrue = function (callback: () => void) {
    if (this === true) {
        callback()
    }
}

export { }