import isLeap from '../is-leap';

describe(isLeap, () => {
    it('knows that a leap year is even', () => {
        expect(isLeap(2003)).toBe(false);
    });

    it('knows that a leap year is divisible by four', () => {
        expect(isLeap(2004)).toBe(true);
    });

    it('knows that a leap year cannot be divisible by 100', () => {
        expect(isLeap(1900)).toBe(false);
    });

    it('knows that a leap year can be divisible by 100 if also divisible by 400', () => {
        expect(isLeap(2000)).toBe(true);
    });
});
