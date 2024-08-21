const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.post('/api/contact', (req, res) => {
  const formData = req.body;

  const filePath = path.join(__dirname, 'form-data.json');

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to read data file' });
    }

    const jsonData = data ? JSON.parse(data) : [];
    jsonData.push(formData);

    fs.writeFile(filePath, JSON.stringify(jsonData, null, 2), (err) => {
      if (err) {
        return res.status(500).json({ error: 'Failed to write data file' });
      }
      res.status(200).json({ message: 'Data saved successfully' });
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
