import { RequestHandler } from 'express'

export const createStudent: RequestHandler = (req, res) => {
  console.log(req.body)

  return res.send('Hello world')
}

export const getStudent: RequestHandler = (req, res) => {
  console.log(req.body)

  return res.send('Hello world')
}

export const getAllStudents: RequestHandler = (req, res) => {
  console.log(req.body)

  return res.send('Hello world')
}

export const deleteStudent: RequestHandler = (req, res) => {
  console.log(req.body)

  return res.send('Hello world')
}
