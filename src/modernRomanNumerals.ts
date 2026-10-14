
const romanValues: [string, number][] = [
  ['M', 1000],
  ['CM', 900],
  ['D', 500],
  ['CD', 400],
  ['C', 100],
  ['XC', 90],
  ['L', 50],
  ['XL', 40],
  ['X', 10],
  ['IX', 9],
  ['V', 5],
  ['IV', 4],
  ['I', 1],
];

export function intToRoman(num: number): string {
  if (!Number.isInteger(num) || num < 1 || num > 3999) {
    throw new RangeError('Number must be an integer from 1 to 3999');
  }

  let result = '';

  for (const [symbol, value] of romanValues) {
    while (num >= value) {
      result += symbol;
      num -= value;
    }
  }

  return result;
}

export function romanToInt(roman: string): number {
  if (!/^[IVXLCDM]+$/.test(roman)) {
    throw new Error('Invalid Roman numeral');
  }

  let total = 0;

  for (let i = 0; i < roman.length; i++) {
    const current = romanValues.find(
      ([symbol]) => symbol === roman[i]
    )?.[1];

    const next = romanValues.find(
      ([symbol]) => symbol === roman[i + 1]
    )?.[1] ?? 0;

    if (current === undefined) {
      throw new Error('Invalid Roman numeral');
    }

    total += current < next ? -current : current;
  }

  // Reject non-standard forms such as IIII or VX.
  if (intToRoman(total) !== roman) {
    throw new Error('Invalid Roman numeral');
  }

  return total;
}
