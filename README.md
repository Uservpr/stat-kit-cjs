# stat-kit-cjs

📦 Simple and lightweight JavaScript statistics toolkit using CommonJS.  
Provides utility functions for common statistical calculations.

> 🧠 Ideal for developers, students, or anyone needing basic statistics in Node.js apps.

---

## 📥 Installation

```
npm install stat-kit-cjs
```

---

## 📦 Features

- 📊 `mean(array)`
- 📈 `median(array)`
- 🧮 `mode(array)`
- 📏 `range(array)`
- 🧠 `variance(array)`
- 🧬 `stdDev(array)`
- 🧷 `weightedMean(values, weights)`
- 🌀 `sort(array)`

---

## 🚀 Usage

```javaScriptt
const Stat = reuire('stat-kit-cjs');
const stat = Stat()

const data = [2, 4, 4, 4, 5, 5, 7,', stat.mean(data));             // 5
console.log('Median:', stat.median(data));         // 4.5
console.log('Mode:', stat.mode(data));             // 4
console.log('Range:', stat.range(data));           // 7
console.log('Standard Deviation:', stat.stdDev(data)); // ~2
console.log('Variance:', stat.variance(data));     // ~4
console.log('Sorted:', stat.sort(data));           // [2, 4, 4,alues = ;
const weights = [0.2, 0.3, 0.5];
console.log('Weighted Mean:', stat.weightedMean(values, weights)); // 93
```

---

## ⚠️ Error Handling

All methods include input validation. Invalid inputs will throw errors:

```
try {
  stat.mean("invalid"); // ❌
} catch (e) {
  console.error(e.message); // Input must be an array
}
```

---

## 🧱 Internal Structure

```
stat-kit-cjs/
├── index.js          // exports instance of Stat
├── Stat.js           // Stat class wrapper
└── stat/
    ├── mean.js
    ├── median.js
    ├── mode.js
    ├── range.js
    ├── sort.js
    ├── stdDev.js
    ├── variance.js
    └── weightedMean.js
```

---

## 📃 License

MIT

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first  
to discuss what you would like to change.

---

## 📫 Author

Created with ❤️ by @uservpr