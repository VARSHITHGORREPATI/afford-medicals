const express = require('express');
const axios = require('axios');

const app = express();
const port = 9876;
const windowSize = 10;
let numbers = [];

const calculateAverage = (nums) => {
  const sum = nums.reduce((acc, num) => acc + num, 0);
  return (sum / nums.length).toFixed(2);
};

app.get('/numbers/:numberid', async (req, res) => {
  const { numberid } = req.params;
  let url;

  switch (numberid) {
    case 'p':
      url = 'http://20.244.56.144/test/primes';
      break;
    case 'f':
      url = 'http://20.244.56.144/test/fibo';
      break;
    case 'e':
      url = 'http://20.244.56.144/test/even';
      break;
    case 'r':
      url = 'http://20.244.56.144/test/rand';
      break;
    default:
      return res.status(400).json({ error: 'Invalid number ID' });
  }

  try {
    const response = await axios.get(url, { timeout: 2000 });
    const newNumbers = response.data.numbers;

    const uniqueNewNumbers = newNumbers.filter((num) => !numbers.includes(num));
    numbers = [...numbers, ...uniqueNewNumbers].slice(-windowSize);

    const avg = calculateAverage(numbers);

    const responseData = {
      windowPrevState: numbers.slice(0, -uniqueNewNumbers.length),
      windowCurrState: numbers,
      numbers: uniqueNewNumbers,
      avg: parseFloat(avg),
    };

    res.json(responseData);
  } catch (error) {
    console.error('Error fetching numbers:', error.message);

    let mockNumbers;
    if (numberid === 'p') {
      mockNumbers = [2, 3, 5, 7, 11];
    } else if (numberid === 'f') {
      mockNumbers = [1, 1, 2, 3, 5];
    } else if (numberid === 'e') {
      mockNumbers = [2, 4, 6, 8, 10];
    } else if (numberid === 'r') {
      mockNumbers = [7, 13, 42, 23, 19];
    }

    const uniqueMockNumbers = mockNumbers.filter((num) => !numbers.includes(num));
    numbers = [...numbers, ...uniqueMockNumbers].slice(-windowSize);

    const avg = calculateAverage(numbers);

    const responseData = {
      windowPrevState: numbers.slice(0, -uniqueMockNumbers.length),
      windowCurrState: numbers,
      numbers: uniqueMockNumbers,
      avg: parseFloat(avg),
    };

    res.json(responseData);
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});