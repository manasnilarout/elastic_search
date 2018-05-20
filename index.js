// Requiring global modules
const express = require('express');
const app = express();
const port = 3000;

// Starting server to operate on
app.listen(port, () => {
    console.log(`Elastic search instance listening at ${port}`)
});
// Default page
app.get('/', (req, res) => {
    res.send('<h1 style="text-align: center">Welcome to the world of elastic search.</h1>')
});