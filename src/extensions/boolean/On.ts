declare global {
    interface Boolean {
        /** First parameter is the callback if `this` is truthy second for `this`is falsy
         *  
         * *Example:* 
         * ```typescript
         * const value = false
         *
         * value.on(()=>{
         *     // callback on true
         * },()=>{
         *     // callback on false
         * }) 
         * ```
         * ---
         * *Example Two:*
         * 
         * Callbacks can be null or undefined if not used. 
         * ```typescript
         * const value = false
         *
         * value.on(null,()=>{
         *     // callback on false
         * })  
         * ```
         */
        on(onTrue?: (() => void) | null | undefined, onFalse?: () => void): void
    }
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

export { }