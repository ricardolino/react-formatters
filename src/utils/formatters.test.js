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
