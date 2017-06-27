import * as formatters from './formatters';

describe('removeNonNumerics', () => {
    const { removeNonNumerics } = formatters;

    it('should return only numbers', () => {
        const string = '123abc-_=5+{6}';
        
        expect(removeNonNumerics(string)).toBe('12356');
    });

    it('should only receive string type', () => {
        const nullList = [123, NaN, null, undefined, true, false, function () {}, {}, []];
        const definedList = ['123', 'NaN', 'null', 'undefined', 'true', 'false', 'function () {}', '{}', '[]'];
        
        for (var i = nullList.length - 1; i >= 0; i--) {
            expect(removeNonNumerics(nullList[i])).toBeNull();
        }
        
        for (var i = definedList.length - 1; i >= 0; i--) {
            expect(removeNonNumerics(definedList[i])).toBeDefined();
        }
    });
});

describe('removeSpecialChars', () => {
    const { removeSpecialChars } = formatters;

    it('should return only numbers', () => {
        const string = '1!@2%¨3*(À)+=êªºÍ$"õü';
        
        expect(removeSpecialChars(string)).toBe('123ÀêÍõü');
    });

    it('should only receive string type', () => {
        const nullList = [123, NaN, null, undefined, true, false, function () {}, {}, []];
        const definedList = ['123', 'NaN', 'null', 'undefined', 'true', 'false', 'function () {}', '{}', '[]'];
        
        for (var i = nullList.length - 1; i >= 0; i--) {
            expect(removeSpecialChars(nullList[i])).toBeNull();
        }
        
        for (var i = definedList.length - 1; i >= 0; i--) {
            expect(removeSpecialChars(definedList[i])).toBeDefined();
        }
    });
});

describe('applyPattern', () => {
    const { applyPattern } = formatters;

    it('should return values with your patterns', () => {
        const textList = ['12121234', '12312312312', '1234567890'];
        const patternList = ['00/00/0000', '000.000.000-00', '(00) 0000-0000'];
        const textWithPatternList = ['12/12/1234', '123.123.123-12', '(12) 3456-7890'];
        
        for (var i = textList.length - 1; i >= 0; i--) {
            expect(applyPattern(textList[i], patternList[i])).toBe(textWithPatternList[i]);
        }
    });
});
