declare global {
    interface Boolean {
        /** Callback getting executed if `this`is falsy
         * 
         * *Example:* 
         * ```typescript
         * const value = true
         *
         * value.onFalse(()=>{
         *     // callback on true
         * }) 
         * ``` 
         */
        onFalse(cb: () => void): void
    }
}

Boolean.prototype.onFalse = function (callback: () => void) {
    if (this === false) {
        callback()
    }
}

export { }