const express = require('express');
const cors = require('cors'); // Import cors package
const app = express();
const mongoDB = require("./db");

app.use(cors()); // Enable CORS for all requests

app.get('/', (req, res) => {
  res.send('Hello from the API');
});

app.use(express.json());
app.use('/api', require("./routes/CreateUser"));
app.use('/api', require("./routes/LogInUser"));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
