const express = require('express')
const axios = require('axios')
const bodyParser = require('body-parser');

const app = express()
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.set('view engine', 'ejs')
app.set('views', './views')

port = 3002

app.listen(port, () => console.log('running in port '+ port))

app.get('/', (req, res) => {
    res.send('hello Batch 47!')
})

app.get('/sum', (req, res) => {
    console.log('req.query', req.query)
    res.send(req.query)
})

app.get('/sum/:num1/:num2', (req, res) => {
    console.log('req.params', req.params)
    // res.send(req.params)

    res.render('sum', req.params)
})

app.post('/sum', (req, res) => {
    console.log('req.body', req.body)
    res.send(req.body)
})

app.get('/poke', async (req, res) => {
    const { data } = await axios.get('https://pokeapi.co/api/v2/ability/?limit=20&offset=20')
    res.send(data)
})