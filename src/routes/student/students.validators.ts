import Joi from 'joi'

export const createStudentSchema = Joi.object({
  fullname: Joi.string().required().min(5).max(30),
  email: Joi.string().email().required(),
  phone: Joi.string()
    .required()
    .min(8)
    .max(8)
    .pattern(/^[0-9]+$/),
  address: Joi.string().required().min(5).max(30),
})
