const express = require('express');
const path = require('path');
const app = express();

// Set view engine to Pug and set views directory
app.set('view engine', 'pug');
app.set('views', path.join(__dirname));

// Render pug2.pug on root route
app.get('/', (req, res) => {
    res.render('pug2'); // No need for full path or extension
});

app.get('/data', (req, res) => {
    res.write(req.query.n + "\n");
    res.write(req.query.e + "\n");
    res.end(); // End the response properly
});

app.listen(3442)
