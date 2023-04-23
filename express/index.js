const express = require('express')

const app = express()

port = 3002

app.listen(port, () => console.log('running in port '+ port))

app.get('/', (req, res) => {
    res.send('hello Batch 47!')
})

app.get('/sum', (req, res) => {
    console.log('req.params', req.query.params)
    res.send('hello Batch 47!')
})