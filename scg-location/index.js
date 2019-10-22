const app = require('express')()

app.get('/scg', (req, res) => {
  res.send('SCG Hello world')
})

app.listen(3000, () => console.log(`Server runing on port 3000`))