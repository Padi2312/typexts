import '../extensions/ArrayExts'

describe('ArrayExtensions', () => {

    test('isEmpty should be TRUE on empty array', () => {
        const testArray: any[] = []
        const result = testArray.isEmpty()
        expect(result).toBeTruthy()
    })

    test('isEmpty should be FALSE on filled array', () => {
        const testArray: string[] = ["t", "e", "s", "t"]
        const result = testArray.isEmpty()
        expect(result).toBeFalsy()
    })

    test('isNotEmpty should be TRUE on empty array', () => {
        const testArray: any[] = []
        const result = testArray.isNotEmpty()
        expect(result).toBeFalsy()
    })

    test('isNotEmpty should be FALSE on filled array', () => {
        const testArray: string[] = ["t", "e", "s", "t"]
        const result = testArray.isNotEmpty()
        expect(result).toBeTruthy()
    })


    test('print should log the value in the console', () => {
        const consoleLogSpy = jest.fn(() => { })
        console.log = consoleLogSpy
        const testArray = ["to", "be", "printed"]
        testArray.print()
        expect(consoleLogSpy).toHaveBeenCalledTimes(1)
    })


    test('reverse should reverse the given array', () => {
        const testArray: any[] = ["r", "e", "v", "e", "r", "s", "e", "d"]
        const result = testArray.reverse()
        const expected: any[] = ["d", "e", "s", "r", "e", "v", "e", "r"]
        expect(result).toStrictEqual(expected)
    })

})