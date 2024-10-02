const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Sample route to get sorting tips
app.get('/api/sorting-tips', (req, res) => {
  res.json([
    "Remember, Bubble Sort is simple but not efficient for large lists.",
    "Merge Sort has a consistent time complexity, making it a better choice for larger datasets."
  ]);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
