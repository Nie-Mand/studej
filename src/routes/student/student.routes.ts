import * as controllers from './student.controllers'
import express from 'express'
import * as schemas from './students.validators'
import validator from '../../middlewares/validator'

const router = express.Router()

router.post(
  '/',
  validator(schemas.createStudentSchema),
  controllers.createStudent
)

router.get('/', controllers.getAllStudents)
router.get('/:id', controllers.getStudent)
router.delete('/:id', controllers.deleteStudent)

export default router
