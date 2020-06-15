import { Router } from 'express'
import reset from './reset'

const router = Router()

// 新增用户
router.use(reset)

export default router
