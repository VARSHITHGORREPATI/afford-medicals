# Rolling Average Number API 📊

A small Express API that requests number sequences from an upstream service, maintains a rolling window of up to 10 unique numbers, and returns the updated window and average.

## ✨ Features

- Prime, Fibonacci, even, and random number endpoints
- Upstream HTTP data fetching
- Duplicate filtering
- Rolling window of 10 values
- Previous/current window state
- Average calculation
- Fallback sample data when the upstream service is unavailable

## 🛠️ Tech Stack

- Node.js
- Express
- Axios

## 🔌 API

```http
GET /numbers/p
GET /numbers/f
GET /numbers/e
GET /numbers/r
```

The API listens on port `9876` and returns `windowPrevState`, `windowCurrState`, `numbers`, and `avg`.

## 🚀 Run Locally

The current application is nested under `f/average-calculator/average-calculator/`:

```bash
cd f/average-calculator/average-calculator
npm install
node index.js
```

Then try `http://localhost:9876/numbers/p`.

## 📌 Cleanup Before Showcasing

- Move the application to the repository root or clearly document the nested path.
- Keep `node_modules` out of Git.
- Add start scripts and project metadata where appropriate.
- Consider renaming the repository to match the actual project.

## 👨‍💻 Author

[Varshith Gorrepati](https://github.com/VARSHITHGORREPATI)
