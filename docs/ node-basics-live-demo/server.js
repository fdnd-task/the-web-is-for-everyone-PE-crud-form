const { response } = require('express')
const express = require('express')
const fetch = require('node-fetch')
const port = 1337
const apiKey = '5455994708c614341bbed7bb1ded27cc'
const apiEndpoint = 'https://api.themoviedb.org/3/'

const server = express()

server.set('view engine', 'ejs')
server.set('views', 'views')

server.listen(port, () => {
    console.log(`the server has been started @port: ${port}`)
})

server.get('/', async (req, res) => {
    const url = `${apiEndpoint}discover/movie?sort_by=popularity.desc&api_key=${apiKey}`
    const response = await fetch(url)
    const data = await response.json()
    const movies = data.results
    
    res.render('index', { movies:movies })
})

server.get('/:id', async (req, res) => {
    const url = `${apiEndpoint}/movie/${req.params.id}?api_key=${apiKey}`
    const response = await fetch(url)
    const movie = await response.json()
   
    res.render('detail', { movie:movie })
})

server.get('/search', (req, res) => {
   console.log(1)
})

server.post('/', (request, response) => {
})