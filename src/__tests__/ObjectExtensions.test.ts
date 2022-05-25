import '../extensions/ObjectExts'

describe('ObjectExtensions', () => {

    test('print should log the value in console', () => {
        const consoleLogSpy = jest.fn(() => { })
        console.log = consoleLogSpy
        const testObject = {
            any: "value",
            should: "be",
            typed: "."
        }
        testObject.print()
        expect(consoleLogSpy).toHaveBeenCalledTimes(1)
    })

    test('printJson should log the value as json in console', () => {
        const consoleLogSpy = jest.fn()
        const jsonStringifySpy = jest.fn()

        JSON.stringify = jsonStringifySpy
        console.log = consoleLogSpy

        const testObject = {
            any: "value",
            should: "be",
            typed: "."
        }
        testObject.printAsJson()

        expect(consoleLogSpy).toHaveBeenCalledTimes(1)
        expect(jsonStringifySpy).toHaveBeenCalledTimes(1)
    })
})