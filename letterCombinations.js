// phone keypad letter combination
// leetcode question - 17

const phoneMap = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
};

function letterCombinations(digits) {
    if (digits.length === 0) return []; // Handle empty input

    const result = [];

    function backtrack(index, currentCombination) {
        // If we've generated a combination for every digit, add it to the result
        if (index === digits.length) {
            result.push(currentCombination);
            return;
        }

        // Get the letters that the current digit maps to
        const letters = phoneMap[digits[index]];

        // Recursively form combinations by trying each letter for the current digit
        for (const letter of letters) {
            backtrack(index + 1, currentCombination + letter);
        }
    }

    // Start the backtracking process from the first digit
    backtrack(0, "");
    return result;
}
// Example usage
console.log(letterCombinations("23"));

// Different approach ==================================================>

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinationsRecursive = function (digits) {
    if (digits.length === 0) return [];

    const phone_map = ["abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
    const output = [];
    backtrack("", digits, phone_map, output);
    return output;

    function backtrack(combination, next_digits, phone_map, output) {
        if (next_digits.length === 0) {
            output.push(combination);
        } else {
            const letters = phone_map[next_digits[0] - "2"];
            for (const letter of letters) {
                backtrack(
                    combination + letter,
                    next_digits.slice(1),
                    phone_map,
                    output
                );
            }
        }
    }
};

console.log(letterCombinationsRecursive("23"));

// Different approach ==================================================>

function generateCombinations(digits) {
    // Edge case: if no input is given, return an empty array
    if (!digits) return [];

    // Initialize with an empty combination
    let combinations = [""];

    // Iterate over each digit in the input
    for (const digit of digits) {
        if (!phoneMap[digit]) continue; // Skip invalid digits like 1, 0

        const newCombinations = [];

        // Append each letter corresponding to the current digit to existing combinations
        for (const combination of combinations) {
            for (const letter of phoneMap[digit]) {
                newCombinations.push(combination + letter);
            }
        }

        combinations = newCombinations; // Update combinations with the new set
    }

    return combinations;
}
console.log(generateCombinations("23"));
