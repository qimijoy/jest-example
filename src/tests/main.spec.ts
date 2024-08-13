import { describe, expect, test } from '@jest/globals';

import { sum, sub } from '../scripts/main';

describe('Check add function', () => {
	test('add 1 + 2 to equal 3', () => {
		expect(sum(1, 2)).toBe(3);
	});

	test('add 2 + 2 to equal 4', () => {
		expect(sum(2, 2)).toBe(4);
	});
});

describe('Check sub function', () => {
	test('sub 2 - 1 to equal 1', () => {
		expect(sub(2, 1)).toBe(1);
	});

	test('sub 3 - 1 to equal 2', () => {
		expect(sub(3, 1)).toBe(2);
	});
});

describe('Check null & zero', () => {
	test('null', () => {
		const n = null;

		expect(n).toBeNull();
		expect(n).toBeDefined();
		expect(n).not.toBeUndefined();
		expect(n).not.toBeTruthy();
		expect(n).toBeFalsy();
	});

	test('zero', () => {
		const z = 0;

		expect(z).not.toBeNull();
		expect(z).toBeDefined();
		expect(z).not.toBeUndefined();
		expect(z).not.toBeTruthy();
		expect(z).toBeFalsy();
	});
});
