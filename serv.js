const express = require('express')
const app = express()
const { users } = require('./data')
const shopRouter = require('./routes/shop')
const homeRouter= require('./routes/home')
const communityRouter= require('./routes/community')

app.use(express.json())
app.use(setUser)
app.use('/shop', shopRouter)
app.use('/home',homeRouter)
app.use('/community',communityRouter)

app.get('/', (req, res) => {
  res.send('Welcome to roles and permissions')
})


function setUser(req, res, next) {
  const userId = req.body.userId
  if (userId) {
    req.user = users.find(user => user.id === userId)
  }
  next()
}

app.listen(8081)