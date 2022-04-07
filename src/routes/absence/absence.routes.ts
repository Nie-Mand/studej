import * as controllers from './absence.controllers'
import express from 'express'

const router = express.Router()

router.get('/', controllers.getAllAbsentStudent)
router.put('/:id', controllers.markStudentAsAbsent)

export default router
