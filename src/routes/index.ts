import express from 'express'
import absence from './absence/absence.routes'
import student from './student/student.routes'

const router = express.Router()

router.use('/absence', absence)
router.use('/student', student)

export default router
