var express = require('express')
var app = express()

app.use(express.static('public'));

app.listen(3001, () => {
  console.log('http://localhost:3001 启动成功')
})