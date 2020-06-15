import user from './user'
import { Router } from 'express'

const router = Router()

// 用户处理
router.use('/user', user)

export default router
