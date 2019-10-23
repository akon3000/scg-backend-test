const app = require('express')()
const cache = require('./middleware/cache')
const numberSeries = require('./utils/numberSeries')

require('dotenv').config()


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

app.listen(3000, () => console.log(`Server runing on port 3000`))