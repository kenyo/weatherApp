const express = require('express')
const app = express()
const fetch = require('node-fetch')

const CLIENT_ID = 'i5pHKBD39KOmHRkLoHcSi'
const CLIENT_SECRET = 'zjEUHJhnSKZR7yxrfXOU5QtFo3XGiyDjErG59s9M'
const HOST = 'http://api.aerisapi.com/forecasts/11101'

app.get('/', function (req, res) {
  res.send('Hello World!')
})

// API routes
app.get('/api/weather', (req, res, next) => {
  const aerisApiUrl = `${HOST}?\
    client_id=${CLIENT_ID}&\
    client_secret=${CLIENT_SECRET}`

  return fetch(aerisApiUrl)
    .then(res => res.json())
    .then(json => res.send(json))
    .catch(next)
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
