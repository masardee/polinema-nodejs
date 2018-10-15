const express = require('express')
const app = express()
const port = 3000

// ROUTING
app.get('/', (req, res) => res.send('Hello World!'))
app.get('/kontak', (req, res) => res.send('Ini halaman kontak'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))