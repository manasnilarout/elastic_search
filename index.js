// Requiring global modules
const express = require('express');
const app = express();
const port = 3000;

let test = require('./controller/indices');

// Starting server to operate on
app.listen(port, () => {
    console.log(`Elastic search instance listening at ${port}`)
});
// Default page
app.get('/', (req, res) => {
    res.send('<h1 style="text-align: center">Welcome to the world of elastic search.</h1>')
});

app.get('/indices', async (req, res) => {
    let result = await test();
    if (result) {
        res.send('<h3>Successfully indexed and ststus is open.</h3>');
    }
});