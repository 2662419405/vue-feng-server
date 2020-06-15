const mongoose = require('mongoose')
const config = require('../config')

//数据库的地址
const DB_URL = `mongodb://localhost:27017/${config.dbname}`
mongoose.connect(DB_URL)

const models: any = {
  user: {
    //   用户ID
    id: { type: Number, require: true },
    //  创建用户的时间
    createTime: {
      type: Number,
      require: true,
    },
    // 最后一次登录的时间
    lastTime: {
      type: Number,
      require: true,
    },
    // 粉丝
    follows: {
      type: Array,
    },
    // 关注的人
    following: {
      type: Array,
    },
    // 发出的帖子
    tie: {
      type: Array,
    },
  },
}

for (let m in models) {
  mongoose.model(m, new mongoose.Schema(models[m]))
}

module.exports = {
  getNames: function (name: String) {
    return mongoose.model(name)
  },
}
