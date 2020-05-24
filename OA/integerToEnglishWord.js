/*
273. Integer to English Words
Hard

Convert a non-negative integer to its english words representation. Given input is guaranteed to be less than 231 - 1.

Example 1:
Input: 123
Output: "One Hundred Twenty Three"

Example 2:
Input: 12345
Output: "Twelve Thousand Three Hundred Forty Five"

Example 3:
Input: 1234567
Output: "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven"

Example 4:
Input: 1234567891
Output: "One Billion Two Hundred Thirty Four Million Five Hundred Sixty Seven Thousand Eight Hundred Ninety One"
*/

//O(n) O(n)

function numberToWords(num) {
    if (num === 0) {
        return 'Zero';
    }
    if (num <= 20) {
        return translations.get(num);
    }

    let result = [];
    
    for (let [value, translation] of translations) {
        const time = Math.floor(num / value);

        if (times === 0) {
            continue;
        }

        num -= times * value;

        if (times === 1 && value >= 100) {
            result.push('One', translation);
            continue;
        }

        if (times === 1) {
            result.push(translation);
            continue;
        }

        result.push(numberToWords(times), translation);
    }

    return result.join(' ');
}

const translations = new Map([
  [1000000000, 'Billion'],
  [1000000, 'Million'],
  [1000, 'Thousand'],
  [100, 'Hundred'],
  [90, 'Ninety'],
  [80, 'Eighty'],
  [70, 'Seventy'],
  [60, 'Sixty'],
  [50, 'Fifty'],
  [40, 'Forty'],
  [30, 'Thirty'],
  [20, 'Twenty'],
  [19, 'Nineteen'],
  [18, 'Eighteen'],
  [17, 'Seventeen'],
  [16, 'Sixteen'],
  [15, 'Fifteen'],
  [14, 'Fourteen'],
  [13, 'Thirteen'],
  [12, 'Twelve'],
  [11, 'Eleven'],
  [10, 'Ten'],
  [9, 'Nine'],
  [8, 'Eight'],
  [7, 'Seven'],
  [6, 'Six'],
  [5, 'Five'],
  [4, 'Four'],
  [3, 'Three'],
  [2, 'Two'],
  [1, 'One'],
]);


