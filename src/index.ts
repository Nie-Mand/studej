import express from 'express'
import { json } from 'body-parser'
import cors from 'cors'
import morgan from 'morgan'
import routes from './routes'

const app = express()

// middlewares
app.use(json())
app.use(cors())
app.use(morgan('dev'))

// routes
app.use(routes)

// launch
app.listen(5000, () => {
  console.log('Server is running on port 5000')
})
