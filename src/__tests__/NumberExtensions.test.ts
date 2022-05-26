import '../extensions/NumberExts'

describe('NumberExtensions', () => {

    test('print should log the value in console', () => {
        const consoleLogSpy = jest.fn(() => { })
        console.log = consoleLogSpy
        const testObject = 4
        testObject.print()
        expect(consoleLogSpy).toHaveBeenCalledTimes(1)
    })

    describe('isPositive', () => {
        test('should be true if number is greater than zero', () => {
            const testNumber = 2
            expect(testNumber.isPositive()).toBeTruthy()
        })

        test('should be false if number is less than zero', () => {
            const testNumber = -24
            expect(testNumber.isPositive()).toBeFalsy()
        })
    })

    describe('isNegative', () => {
        test('should be true if number is less than zero', () => {
            const testNumber = -23
            expect(testNumber.isNegative()).toBeTruthy()
        })

        test('should be false if number is greater than zero', () => {
            const testNumber = 23
            expect(testNumber.isNegative()).toBeFalsy()
        })
    })

    describe('isZero', () => { 

        test('should be true if number equals zero', () => {
            const testNumber = 0
            expect(testNumber.isZero()).toBeTruthy()
        })

        test('should be false if number is not equal to zero', () => {
            const testNumber = 12
            expect(testNumber.isZero()).toBeFalsy()
        })


     })
})