// Core
import { sum, delay, getUniqueID, getFullApiUrl } from './';

describe('instruments:', () => {
    test('sum function should be a function', () => {
        expect(sum).toBeInstanceOf(Function);
    });

    test('sum function should throw then called with non-numeric type as second argument', () => {
        expect(() => sum(2, 'Hello')).toThrow();
    });

    test('sum function should throw then called with non-numeric type as first argument', () => {
        expect(() => sum('Hello', 2)).toThrow();
    });

    test('sum function should return an addition of two arguments passed', () => {
        expect(sum(2, 2)).toBe(4);
        expect(sum(-2, 2)).toMatchSnapshot();
    });

    test('delay function should return a resolved promise', async () => {
        await expect(delay()).resolves.toBeUndefined;
    });

    test('getUniqueID function should be a function', () => {
        expect(getUniqueID).toBeInstanceOf(Function);
    });

    test('getUniqueID function should to return string with length 15 by default', () => {
        expect(getUniqueID()).toHaveLength(15);
    });

    test('getUniqueID function should throw then called with non-numeric type', () => {
        expect(() => getUniqueID('Hello')).toThrow();
    });

    test('getUniqueID function should produce a string of a desired given length', () => {
        expect(typeof getUniqueID()).toBe('string');
        expect(getUniqueID(5)).toHaveLength(5);
        expect(getUniqueID(15)).toHaveLength(15);
    });

    test('getFullApiUrl function should be a function', () => {
        expect(getFullApiUrl).toBeInstanceOf(Function);
    });

    test('getFullApiUrl function should throw then called with non-string type as second argument', () => {
        expect(() => getFullApiUrl(2, 'Hello')).toThrow();
    });

    test('getFullApiUrl function should throw then called with non-string type as first argument', () => {
        expect(() => getFullApiUrl('Hello', 2)).toThrow();
    });

    test('getFullApiUrl function should produce a string ', () => {
        expect(typeof getFullApiUrl('string', 'string')).toBe('string');
    });
});
