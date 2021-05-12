const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const poll = require('./routes/poll');
const results = require('./routes/results');

// Set public folder
app.use(express.static(path.join(__dirname, 'public')));

// Body parer middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Enable cors
app.use(cors());

app.use('/poll', poll);
app.use('/results', results);

const port = process.env.PORT || 3000;

// Start server

app.listen(port, () => console.log(`Server started on port ${port}`));
// app.listen(3000, () => console.log(`Server started on port ${port}`));