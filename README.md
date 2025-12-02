# Advent of Code Solutions (2022-2025)

Solutions are organized by year, demonstrating evolution in my problem-solving approach.

---

## 🛠️ Project Structure & Technology

The active year's solutions (2025) are built in JavaScript (Node.js) using a modular runner script.

### Tech Stack (2025)

* **Primary Language:** JavaScript (Node.js)
* **Runner Script:** `index.js` (Handles dynamic file loading and input reading)

### Folder Structure

The structure separates years at the root, with the 2025 solutions nested under a `src` directory.

```
advent_code/
├── 2022/
├── 2023/
├── 2024/
├── 2025/                    <-- Active Year
│   └── src/                 <-- JavaScript Source
│       ├── day1/
│       │   ├── input.txt
│       │   ├── puzzle1.js   (Part 1)
│       │   └── puzzle2.js   (Part 2)
│       └── index.js         <-- The main execution script
└── README.md                <-- This file
```

---

## 🚀 Running the Solutions (2025)

The execution is handled by the central `index.js` script, which automatically loads the correct `input.txt` and runs both `puzzle1.js` and `puzzle2.js` for the specified day.

### Execution Command

1. Navigate to the source directory:
   ```bash
   cd 2025/src
   ```

2. Run the main script and **specify the day number** as an argument:
   ```bash
   # Replace [DAY_NUMBER] with 1, 2, 3, etc.
   node index.js [DAY_NUMBER]
   
   # Example for Day 1:
   node index.js 1
   ```

### Expected Output

```
Day 1
Result Part 1: [Result from puzzle1.js]
Result Part 2: [Result from puzzle2.js]
```

### Note for Developers

The `solve` function in each `puzzle[N].js` file must be exported and accept the full input string as its only argument.

---

## 🔗 Resources

- [Advent of Code Official Website](https://adventofcode.com/)
- [AoC Subreddit](https://www.reddit.com/r/adventofcode/)

---

## 📝 License

This project is for educational purposes.

---

**🎄✨**
