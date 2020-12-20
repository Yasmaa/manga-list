const express = require('express');

const app = express();

app.use(express.static('./dist/mangaList'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/mangaList/'}),
);

app.listen(process.env.PORT || 8080);