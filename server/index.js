const express = require('express');
const router = require('./routers');
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors')
const port = 3000


app.use(cors())
app.use(bodyParser.json())
app.use(router);


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Zak listening on port ${port}`)
})