# Rolling Average Number API 📊

A Node.js and Express API that retrieves number sequences, maintains a rolling window of unique values, and calculates the current average.

## ✨ Features

- Prime number endpoint
- Fibonacci number endpoint
- Even number endpoint
- Random number endpoint
- Upstream API integration
- Duplicate filtering
- Rolling window of 10 values
- Previous and current window state
- Average calculation
- Fallback data handling

## 🛠️ Tech Stack

- Node.js
- Express
- Axios

## 🔌 API Endpoints

```http
GET /numbers/p
GET /numbers/f
GET /numbers/e
GET /numbers/r
```

The API runs on port `9876` and returns the previous window, current window, received numbers, and calculated average.

## 🚀 Run Locally

```bash
cd f/average-calculator/average-calculator
npm install
node index.js
```

Then open `http://localhost:9876/numbers/p`.

## 👨‍💻 Author

**Varshith Gorrepati**

[GitHub](https://github.com/VARSHITHGORREPATI) · [LinkedIn](https://www.linkedin.com/in/gorrepativarshith/)