import '../extensions/stringexts'

describe('StringExtensions', () => {

    test('isEmpty should be TRUE on empty string', () => {
        const testString = ""
        const result = testString.isEmpty()
        expect(result).toBeTruthy()
    })

    test('isEmpty should be FALSE on non empty string', () => {
        const testString = "test"
        const result = testString.isEmpty()
        expect(result).toBeFalsy()
    })


    test('isNotEmpty should be FALSE on non empty string', () => {
        const testString = "test"
        const result = testString.isNotEmpty()
        expect(result).toBeTruthy()
    })

    test('isNotEmpty should be TRUE on empty string', () => {
        const testString = ""
        const result = testString.isNotEmpty()
        expect(result).toBeFalsy()
    })

    test('isNumber should be TRUE if string is a number', () => {
        const testString = "8"
        const testStringTwo = "12.5"
        const result = testString.isNumber()
        const resultTwo = testStringTwo.isNumber()
        expect(result).toBeTruthy()
        expect(resultTwo).toBeTruthy()
    })

    test('isNumber should be FALSE if string is NaN', () => {
        const testString = "ABC"
        const result = testString.isNumber()
        expect(result).toBeFalsy()
    })

    test('print should log the value in the console', () => {
        const consoleLogSpy = jest.fn(() => { })
        console.log = consoleLogSpy
        const testString = "to be printed"
        testString.print()
        expect(consoleLogSpy).toHaveBeenCalledTimes(1)
    })

    test('reverse should reverse the given string', () => {
        const testString = "reversed"
        const result = testString.reverse()
        const expected = "desrever"
        expect(result).toBe(expected)
    })


    describe('isUrl test', () => {

        test.each([
            "http://test.de",
            "www.test.de",
            "https://sub.main.de/path",
            "https://sub.main.de/path/another/one?bites=the+dust"
        ])('%s should be url', (url: string) => {
            const result = url.isUrl()
            expect(result).toBeTruthy()
        })

        test.each([
            "test.de",
            "blahblah",
            "i_am_url"
        ])('%s should NOT be url', (url: string) => {
            const result = url.isUrl()
            expect(result).toBeFalsy()
        })
    })
})
