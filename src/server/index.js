const express = require('express')
const app = express()

app.use(express.static('dist'))
app.get('/api/test', (req, res) => {
  res.send({ message: 'OK' })
})
app.listen(8081, () => console.log('Listening on port 8081!'))
