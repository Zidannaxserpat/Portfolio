// server.js
const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();
const port = 5001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.post('/submit', (req, res) => {
  const { Name, Email, Text } = req.body;

  // Format data
  const formData = `Name: ${Name}\nEmail: ${Email}\nText: ${Text}\n\n`;

  // Tulis data ke file output.txt
  fs.appendFile('output.txt', formData, (err) => {
    if (err) throw err;
    console.log('Data saved to output.txt');
  });

  res.send('Form submitted successfully!');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
