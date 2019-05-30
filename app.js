const express = require('express');
const app = express();
app.listen(3000);
app.get('/index', (req, res) => {
    res.send('');
});
app.get('/demon', (req, res) => {
    res.send('ok');
});