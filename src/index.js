const app = require('express')()
const numberSeries = require('./numberSeries')

numberSeries([null, 5, 9, 15, null, null, 45, null, null])

app.get('/scg', (req, res) => {
  res.send('Hello SCG interview')
})

app.listen(3000, () => console.log(`Server runing on port 3000`))