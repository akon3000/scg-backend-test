const app = require('express')()
const axios = require('axios')
const cache = require('./middleware/cache')
const numberSeries = require('./utils/numberSeries')

require('dotenv').config()

const { PORT, API_SEARCH, API_KEY } = process.env

app.get('/scg', cache(10), (req, res) => {
  return res.send('Hello SCG interview s')
})

app.get('/number-series', cache(10), (req, res) => {
  try {
    const numbers = numberSeries([null, 5, 9, 15, 23, null, null])
    return res.send(numbers)
  } catch (err) {
    return res.status(500).send(`Error: ${err.message}`)
  }
})

app.get('/bangsue-restaurants-location', cache(10), async (req, res) => {
  const { search = 'restaurants in Bangsue' } = req.query
  try {
    const response = await axios.get(encodeURI(`${API_SEARCH}?query=${search}&key=${API_KEY}`))
    return res.send(response.data)
  } catch (err) {
    return res.status(500).send(`Error: some thing went worng`)
  }
})

app.listen(PORT, () => console.log(`Server runing on port ${PORT}`))