import '../extensions/BooleanExts'

describe('BooleanExtensions', () => {

    test('print should log the value in console', () => {
        const consoleLogSpy = jest.fn(() => { })
        console.log = consoleLogSpy
        const testObject = false
        testObject.print()
        expect(consoleLogSpy).toHaveBeenCalledTimes(1)
    })

    describe('onFalse', () => {
        test('function should be called', () => {
            const testObject = false
            const shouldBeCalled = jest.fn()
            testObject.onFalse(shouldBeCalled)
            expect(shouldBeCalled).toHaveBeenCalledTimes(1)
        })

        test('function should NOT be called', () => {
            const testObject = true
            const shouldBeCalled = jest.fn()
            testObject.onFalse(shouldBeCalled)
            expect(shouldBeCalled).toHaveBeenCalledTimes(0)
        })
    })

    describe('onTrue', () => {
        test('function should be called', () => {
            const testObject = true
            const shouldBeCalled = jest.fn()
            testObject.onTrue(shouldBeCalled)
            expect(shouldBeCalled).toHaveBeenCalledTimes(1)
        })

        test('function should NOT be called', () => {
            const testObject = false
            const shouldBeCalled = jest.fn()
            testObject.onTrue(shouldBeCalled)
            expect(shouldBeCalled).toHaveBeenCalledTimes(0)
        })
    })

    describe('on', () => {
        test('function on true should be called', () => {
            const testObject = true
            const funcOnTrue = jest.fn()
            const funcOnFalse = jest.fn()

            testObject.on(funcOnTrue, funcOnFalse)
            expect(funcOnTrue).toHaveBeenCalledTimes(1)
            expect(funcOnFalse).toHaveBeenCalledTimes(0)
        })

        test('function on false should be called', () => {
            const testObject = false
            const funcOnTrue = jest.fn()
            const funcOnFalse = jest.fn()

            testObject.on(funcOnTrue, funcOnFalse)
            expect(funcOnTrue).toHaveBeenCalledTimes(0)
            expect(funcOnFalse).toHaveBeenCalledTimes(1)
        })
    })
})