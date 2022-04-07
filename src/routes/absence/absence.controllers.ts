import { RequestHandler } from 'express'

export const markStudentAsAbsent: RequestHandler = (req, res) => {
  return res.send('Hello ' + req.params.id)
}

export const getAllAbsentStudent: RequestHandler = (req, res) => {
  console.log(req.body)

  return res.send('Hello world')
}

const x: number = 40
