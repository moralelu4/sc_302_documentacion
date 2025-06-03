// This is an example version of FizzBuzz from AdevSays Oficial taken from Tiktok

// Define the modules (number: output) pairs
const MODULES = {
    3: 'Fizz',
    5: 'Buzz',
    // You can add more modules here
    7: 'Bazz'
};

// FizzBuzz function
function fizzBuzz(num) {
    let result = '';
    for (const module in MODULES) {
        const moduleNum = Number(module);
        if (num % moduleNum === 0) {
            result += MODULES[module];
        }
    }
    return result || num.toString();
}

// DOM Utilities
const $ = selector => document.querySelector(selector);
const createElement = elementType => document.createElement(elementType);

// Console Output Example
console.log("Console Output (1-20):");
for (let i = 1; i <= 20; i++) {
    console.log(fizzBuzz(i));
}

// DOM Output Example
document.addEventListener('DOMContentLoaded', () => {
    const container = $('#fizzbuzz-container');
    if (container) {
        console.log("\nDOM Output (1-20):");
        for (let i = 1; i <= 20; i++) {
            const element = createElement('div');
            element.textContent = fizzBuzz(i);
            container.appendChild(element);
            console.log(fizzBuzz(i)); // Also log to console for visibility
        }
    }
});
console.log('Luis Morales Chacon')