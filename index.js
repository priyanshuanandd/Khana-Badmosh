const express = require('express');
const app= express()
const mongoDB= require("./db")
app.get('/', (req, res) => {
  res.send('Hello from the API');
});
app.use(express.json())
app.use('/api',require("./routes/CreateUser"));
// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
