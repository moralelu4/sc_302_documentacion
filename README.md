# 🎯 Modular FizzBuzz Implementation

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> **Inspired by** [AdevSays Oficial's FizzBuzz implementation](https://www.tiktok.com/@adevsays)  
> **Enhanced by** Luis Morales Chacon

## 🌟 Features
- Customizable rules through simple configuration
- Dual output modes (console + DOM rendering)
- Extensible architecture for additional functionality
- Modern JavaScript (ES6+ syntax)
- Lightweight (<2KB minified)

## 🛠 Technical Implementation
### Core Logic
```javascript
const MODULES = {
    3: 'Fizz',
    5: 'Buzz',
    7: 'Bazz' // Add your own rules here
};

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
```
# DOM Implementation

``` javascript
const $ = selector => document.querySelector(selector);
const createElement = elementType => document.createElement(elementType);

document.addEventListener('DOMContentLoaded', () => {
    const container = $('#fizzbuzz-container');
    if (container) {
        for (let i = 1; i <= 20; i++) {
            const element = createElement('div');
            element.textContent = fizzBuzz(i);
            container.appendChild(element);
        }
    }
});
```
## 🚀 Quick Start

1. **Clone the repository**:
```bash
git clone https://github.com/moralelu4/sc_302_documentacion.git
cd sc_302_documentacion
```
2. **Add to your HTML:**
```html
<div id="fizzbuzz-container"></div>
<script src="fizzBuzz.js"></script>
```

# 📜 License
#### MIT © Luis Morales Chacon
#### Original concept by AdevSays Oficial
