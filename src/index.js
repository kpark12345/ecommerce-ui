const express = require('express')
const path = require('path')
const app = express()
const bodyParser = require('body-parser');
const port = 9000

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../public/dist')));

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Server listening at http://localhost:${port}`))