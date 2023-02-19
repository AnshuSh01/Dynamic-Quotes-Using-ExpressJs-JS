const path = require('path');
const express = require('express');
const dirpath = path.join(__dirname, '');
const app = new express();
app.use(express.static(dirpath));
app.get('', (req, res) => {
    res.sendFile(`${dirpath}/index.html`);
});
app.listen(8000);