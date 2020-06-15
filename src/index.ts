import express from 'express'
import consola from 'consola'
import config from './config/index'
import router from './router'

const app = express()

app.use('/api', router)

app.listen(config.port, () => {
  consola.ready({
    message: `Server listening on http://localhost:${config.port}`,
    badge: true,
  })
})

// 捕获可能遗漏的错误，防止程序崩溃, 后续会增加错误日志处理
process.on('uncaughtException', function (e) {
  consola.log(e)
})

process.on('unhandledRejection', function (e) {
  consola.log(e)
})
