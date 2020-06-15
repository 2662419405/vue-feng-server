import { Router } from 'express'

const router = Router()

router.use('/reset', (req, res) => {
  res.status(200).json({
    code: 1,
    msg: '用户已存在',
  })
})

export default router
