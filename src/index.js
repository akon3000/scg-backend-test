const app = require('express')()
const cache = require('./middleware/cache')
const numberSeries = require('./numberSeries')

// numberSeries([null, 5, 9, 15, 23, null, null])

app.get('/scg', cache(10), (req, res) => {
  res.send('Hello SCG interview s')
})

app.listen(3000, () => console.log(`Server runing on port 3000`))