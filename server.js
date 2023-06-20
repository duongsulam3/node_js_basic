const express = require('express')


const app = express()
const port = 6868

app.get('/', (req, res) => {
  res.send('Hello World! Dương')
})



app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})