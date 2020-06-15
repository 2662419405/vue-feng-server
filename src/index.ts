import express from 'express'

const app = express()

app.listen(3000, () => {
  console.log('服务器监听在3000端口')
})
