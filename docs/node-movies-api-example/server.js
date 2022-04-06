require('dotenv').config()

const express = require('express')
const fetch = require('node-fetch')

console.log('server')

const app = express()
const port = 1337

app.use(express.static('static'))

app.set('view engine', 'ejs');
app.set('views', 'views');

app.get('/', (req, res) => {
  res.render('home', {
    title: 'Home'
  });
})

app.get('/movies', (req, res) => {
  fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${process.env.MOVIEDB_TOKEN}`)
    .then(async response => {
      const movieData = await response.json()
      res.render('overview', {
        title: 'Movies',
        movieData
      });
    })
})

app.get('/movies/:id', (req, res) => {
  Promise.all([
    fetch(`https://api.themoviedb.org/3/movie/${req.params.id}?api_key=${process.env.MOVIEDB_TOKEN}`).then(response => response.json()),
    fetch(`https://api.themoviedb.org/3/movie/${req.params.id}/videos?api_key=${process.env.MOVIEDB_TOKEN}`).then(response => response.json())
  ])
    .then(([details, videos]) => {
      res.render('detail', {
        title: details.original_title,
        movieData: {
          ...details,
          videos: videos.results
        }
      });
    })
})

app.get('/search', (req, res) => {
  const url = 'https://api.themoviedb.org/3/search/movie?query='
  fetch(`${url}${req.query.query}&api_key=${process.env.MOVIEDB_TOKEN}`)
    .then(async response => {
      const movieData = await response.json()
      const templateData = {
        query: req.query.query,
        movieData
      }

      if (req.query.async) {
        res.render('partials/result-list', { query: req.query.query, results: movieData.results })
      } else {
        res.render('results', templateData);
      }
    })
})

app.listen(port, () => console.log(`Movie app listening on port ${port}!`))